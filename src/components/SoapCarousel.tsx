
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SoapCarousel = () => {
  const soapImages = [
    {
      src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Organic Shower Gel - Lavender",
      title: "Lavender Bliss"
    },
    {
      src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Organic Soap Bar - Chamomile",
      title: "Chamomile Calm"
    },
    {
      src: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Natural Soap Collection",
      title: "Essential Collection"
    },
    {
      src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Handcrafted Soap - Tea Tree",
      title: "Tea Tree Fresh"
    },
    {
      src: "https://images.unsplash.com/photo-1615397587950-3cbb55f2d11d?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Luxury Soap Set",
      title: "Luxury Gift Set"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl text-gray-800 mb-4">Our Handcrafted Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium organic soaps, each carefully crafted with natural ingredients for your skin's wellbeing.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {soapImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-xl mb-4 transition-transform duration-300"
                    />
                    <h3 className="text-lg font-medium text-gray-800 text-center transition-colors duration-200">
                      {image.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex transition-all duration-200 hover:scale-110" />
            <CarouselNext className="hidden md:flex transition-all duration-200 hover:scale-110" />
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
