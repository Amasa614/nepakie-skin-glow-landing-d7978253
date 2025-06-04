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
      src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&h=800",
      alt: "NEPAKIE Organic Shower Gel - Lavender",
      title: "Lavender Bliss"
    },
    {
      src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&h=800",
      alt: "NEPAKIE Organic Soap Bar - Chamomile",
      title: "Chamomile Calm"
    },
    {
      src: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&h=800",
      alt: "NEPAKIE Natural Soap Collection",
      title: "Essential Collection"
    },
    {
      src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&h=800",
      alt: "NEPAKIE Handcrafted Soap - Tea Tree",
      title: "Tea Tree Fresh"
    },
    {
      src: "https://images.unsplash.com/photo-1615397587950-3cbb55f2d11d?auto=format&fit=crop&w=800&h=800",
      alt: "NEPAKIE Luxury Soap Set",
      title: "Luxury Gift Set"
    },
    {
      src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&h=800",
      alt: "NEPAKIE Rose Garden Soap",
      title: "Rose Garden"
    },
    {
      src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&h=800",
      alt: "NEPAKIE Mint Fresh Soap",
      title: "Mint Fresh"
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
          <h2 className="text-3xl text-gray-800 mb-4">Our Handcrafted Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium organic soaps, each carefully crafted with natural ingredients for your skin's wellbeing.
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
                  <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-gray-100/80 min-w-[380px] border border-gray-100/50">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-80 h-80 object-cover rounded-xl mb-6 transition-transform duration-500 hover:scale-110 shadow-lg"
                    />
                    <h3 className="text-xl font-medium text-gray-800 text-center transition-colors duration-200">
                      {image.title}
                    </h3>
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

        <div className="text-center mt-12 animate-fade-in px-6">
          <button className="bg-orange-100 text-orange-800 px-8 py-3 rounded-full hover:bg-orange-200 transition-all duration-300 hover:scale-105 hover:shadow-md">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoapCarousel;
