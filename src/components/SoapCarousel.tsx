import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SoapCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const soapImages = [
    {
      src: "/images/IMG_0271.jpg",
      alt: "NEPAKIE Papaya Brightening Bath Gel - Original"
    },
    {
      src: "/images/IMG_0278.jpg",
      alt: "NEPAKIE Bath Product Collection"
    },
    {
      src: "/images/IMG_0263.jpg",
      alt: "NEPAKIE Product Range"
    },
    {
      src: "/images/IMG_0250.jpg",
      alt: "NEPAKIE Skincare Products"
    },
    {
      src: "/images/IMG_0274.jpg",
      alt: "NEPAKIE Natural Bath Products"
    },
    {
      src: "/images/winnep.png",
      alt: "NEPAKIE Product Showcase"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !carouselRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress more smoothly
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      // Start animation when section enters viewport and continue until it exits
      const startOffset = windowHeight;
      const endOffset = -containerHeight;
      
      let scrollProgress = 0;
      
      if (containerTop <= startOffset && containerTop >= endOffset) {
        scrollProgress = Math.max(0, Math.min(1, 
          (startOffset - containerTop) / (startOffset - endOffset)
        ));
      } else if (containerTop < endOffset) {
        scrollProgress = 1;
      }

      const carousel = carouselRef.current.querySelector('[data-carousel-content]') as HTMLElement;
      if (carousel) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        carousel.scrollLeft = scrollProgress * maxScroll;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-12 sm:py-20 bg-white overflow-hidden">
      {/* Full width container with no horizontal padding */}
      <div className="w-full">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl text-gray-800 mb-4">NEPAKIE Product Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our complete range of papaya-infused skincare products, each formulated with natural ingredients for healthy, glowing skin.
          </p>
        </div>

        <div ref={carouselRef} className="relative w-full px-2 sm:px-4 lg:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent data-carousel-content className="ml-1 sm:ml-2 lg:ml-6 gap-2 sm:gap-4 lg:gap-8 pb-4">
              {soapImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0 basis-auto">
                  {/* Mobile-first responsive container */}
                  <div className="relative bg-gray-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 
                    w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[380px] xl:w-[420px]
                    aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]
                    border border-gray-100/50">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 hover:scale-105"
                    />
                    {/* Optional overlay for better mobile touch experience */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
              {/* Add responsive padding at the end */}
              <CarouselItem className="pl-0 basis-auto">
                <div className="w-2 sm:w-4 lg:w-6"></div>
              </CarouselItem>
            </CarouselContent>
            
            {/* Navigation Arrows - Hidden on very small screens */}
            <CarouselPrevious className="hidden sm:flex left-1 sm:left-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" />
            <CarouselNext className="hidden sm:flex right-1 sm:right-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" />
          </Carousel>
          
          {/* Mobile swipe indicator */}
          <div className="flex sm:hidden justify-center mt-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>←</span>
              <span>Swipe to explore</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoapCarousel;
