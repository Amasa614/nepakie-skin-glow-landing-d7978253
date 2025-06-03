
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !carouselRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 
        (window.innerHeight - containerRect.top) / (window.innerHeight + containerRect.height)
      ));

      const carousel = carouselRef.current.querySelector('[data-carousel-content]') as HTMLElement;
      if (carousel) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        carousel.scrollLeft = scrollProgress * maxScroll;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="w-full px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl text-gray-800 mb-4">Our Handcrafted Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium organic soaps, each carefully crafted with natural ingredients for your skin's wellbeing.
          </p>
        </div>

        <div ref={carouselRef} className="relative w-full">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent data-carousel-content className="ml-0 gap-8">
              {soapImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0 basis-auto">
                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 min-w-[400px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-96 h-96 object-cover rounded-xl mb-6 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-medium text-gray-800 text-center transition-colors duration-200">
                      {image.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <button className="bg-green-100 text-green-800 px-8 py-3 rounded-full hover:bg-green-200 transition-all duration-300 hover:scale-105 hover:shadow-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoapCarousel;
