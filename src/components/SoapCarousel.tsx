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
      src: "/images/nepakie_catlog_1.png",
      alt: "NEPAKIE Papaya Brightening Bath Gel - Original",
      title: "Papaya Brightening Gel"
    },
    {
      src: "/images/nepakie_catalog_2.png",
      alt: "NEPAKIE Bath Product Collection",
      title: "Bath Collection"
    },
    {
      src: "/images/neapakie_catalog_2.png",
      alt: "NEPAKIE Product Range",
      title: "Product Range"
    },
    {
      src: "/images/nepakie_catalog_3.png",
      alt: "NEPAKIE Skincare Products",
      title: "Skincare Essentials"
    },
    {
      src: "/images/nepakie_catalog_5.png",
      alt: "NEPAKIE Natural Bath Products",
      title: "Natural Bath Line"
    },
    {
      src: "/images/nepakie_catalog_6.png",
      alt: "NEPAKIE Complete Product Set",
      title: "Complete Set"
    },
    {
      src: "/images/nepakie_section_2.png",
      alt: "NEPAKIE Product Showcase",
      title: "Product Showcase"
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
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      {/* Full width container with no horizontal padding */}
      <div className="w-full">
        <div className="text-center mb-16 animate-fade-in px-6">
          <h2 className="text-3xl text-gray-800 mb-4">NEPAKIE Product Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of papaya-infused skincare products, each formulated with natural ingredients for healthy, glowing skin.
          </p>
        </div>

        <div ref={carouselRef} className="relative w-full px-12">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent data-carousel-content className="ml-6 gap-8 pb-4">
              {soapImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0 basis-auto">
                  <div className="relative bg-gray-50/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 min-w-[380px] h-[400px] border border-gray-100/50">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                      <h3 className="text-xl font-medium text-white text-center transition-colors duration-200">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
              {/* Add some padding at the end */}
              <CarouselItem className="pl-0 basis-auto">
                <div className="w-6"></div>
              </CarouselItem>
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="left-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" />
            <CarouselNext className="right-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SoapCarousel;
