
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
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Organic Shower Gel - Lavender",
      title: "Lavender Bliss"
    },
    {
      src: "https://images.unsplash.com/photo-1615397587950-3cbb55f2d11d?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Organic Soap Bar - Chamomile",
      title: "Chamomile Calm"
    },
    {
      src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Natural Soap Collection",
      title: "Essential Collection"
    },
    {
      src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Handcrafted Soap - Tea Tree",
      title: "Tea Tree Fresh"
    },
    {
      src: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&h=600",
      alt: "NEPAKIE Luxury Soap Set",
      title: "Luxury Gift Set"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
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
                  <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-lg font-medium text-gray-800 text-center">
                      {image.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-100 text-green-800 px-8 py-3 rounded-full hover:bg-green-200 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoapCarousel;
