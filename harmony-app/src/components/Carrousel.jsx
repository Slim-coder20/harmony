import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export default function Carrousel() {
  return (
    <div className="bg-white">
      <Carousel className="w-full max-w-7xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <img
              src="/img1.jpg"
              alt="Promo 1"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/img2.jpg"
              alt="Promo 2"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </CarouselItem>
          {/* Ajoute d'autres images ici */}
        </CarouselContent>
        <CarouselPrevious size="icon" className="w-12 h-12" />
        <CarouselNext size="icon" className="w-12 h-12">
          <ArrowRight size={40} />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
