import React, { useState, useEffect, useRef } from 'react';
import { LazyImage } from './LazyImage';
import CTAButton from './CTAButton';

const ClientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stories = [
    {
      id: 1,
      name: "Gyan & Ritu",
      location: "Modern Kitchen Design",
      testimonial: "The kitchen design exceeded our expectations! Every inch of space is utilized perfectly with custom cabinets and smart storage solutions. The soft-close drawers and under-cabinet lighting make it feel premium. What we saw in the 3D design is exactly what we got - a kitchen that's both beautiful and functional.",
      image: "/lovable-uploads/testimonialsimages/429A3428 (1).webp"
    },
    {
      id: 2,
      name: "Nishant & Family",
      location: "Modular Kitchen Project",
      testimonial: "Our modular kitchen was delivered exactly on time! The quality of materials used is exceptional - from the premium laminates to the smooth drawer mechanisms. Six months later, everything still works perfectly. The organized sections for utensils, spices, and appliances have transformed our cooking routine.",
      image: "/lovable-uploads/testimonialsimages/429A3431.webp"
    },
    {
      id: 3,
      name: "Manish & Family",
      location: "Family Kitchen Design",
      testimonial: "The family kitchen design is brilliant! Child-safe cabinet locks, easy-to-reach storage for daily items, and a breakfast counter that kids love. The team understood our needs perfectly and delivered without any hassle. Installation was quick and clean - exactly what busy parents need!",
      image: "/lovable-uploads/testimonialsimages/429A3436.webp"
    },
    {
      id: 4,
      name: "Savita Family",
      location: "Compact Kitchen Design",
      testimonial: "The space-saving kitchen design maximizes every corner! The clever storage solutions and pull-out drawers make cooking so efficient. The granite countertop and stylish backsplash look amazing. Even after installation, the team helped us optimize the layout. Such attention to detail is rare!",
      image: "/lovable-uploads/testimonialsimages/reviewer1.eaf0bd71f2cf10471cb7253b0b125df9.webp"
    },
    {
      id: 5,
      name: "Amrita & Shanshank",
      location: "Homeowners in Bangalore",
      testimonial: "The pricing was transparent from start to finish - no hidden costs! Our kitchen's craftsmanship is impeccable with perfect edge banding and smooth finishes. The designer understood our cooking needs perfectly and created a solution that maximizes every corner. Highly recommended!",
      image: "/lovable-uploads/testimonialsimages/reviewer2.46a5814f1ec1bded67d5d2b1ce5f58bb.webp"
    },
    {
      id: 6,
      name: "Anand's Family",
      location: "Premium Kitchen Design",
      testimonial: "Our premium kitchen with automated lighting and soft-close mechanisms was delivered exactly as promised! Single point of contact made the process seamless. The attention to detail - from the spice pull-outs to the built-in appliances - shows true craftsmanship. Delivered on time, which is exceptional!",
      image: "/lovable-uploads/testimonialsimages/reviewer3.9d801a979586ccd7db7ac745e8ffe596.webp"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, stories.length]);

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bangalore Kitchen Stories
          </h2>
          <p className="text-gray-600">
            Our clients share their modern kitchen experiences with Creative Designs
          </p>
        </div>
        
        <div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              <LazyImage
                src={currentStory.image}
                alt={`${currentStory.name} testimonial`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {currentStory.name}
                </h3>
                <p className="text-gray-600 mb-6">{currentStory.location}</p>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{currentStory.testimonial}"
                </p>
              </div>

              {/* Navigation controls */}
              <div className="mt-8 flex items-center justify-between">
                {/* Dot indicators */}
                <div className="flex gap-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-red-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow navigation */}
                <button
                  onClick={handleNextSlide}
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default ClientStories;