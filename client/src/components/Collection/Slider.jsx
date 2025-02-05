import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Ring1 from "../../assets/CollectionImg/ring1.png";

function Slider() {
    const sliderRefs = useRef([]);

    const collections = [
        {
            title: "Pendants and Pendant Sets",
            slides: [
                { title: "Special Pendants", image: Ring1 },
                { title: "Causal Pendant sets", image: Ring1 },
                { title: "Designer Pendants", image: Ring1 }
            ]
        },
        {
            title: "Rings Collection",
            slides: [
                { title: "Diamond Rings", image: Ring1 },
                { title: "Gold Rings", image: Ring1 },
                { title: "Statement Rings", image: Ring1 }
            ]
        },
        {
            title: "Earrings Selection",
            slides: [
                { title: "Stud Earrings", image: Ring1 },
                { title: "Hoop Earrings", image: Ring1 },
                { title: "Drop Earrings", image: Ring1 }
            ]
        },
        {
            title: "Bracelets & Bangles",
            slides: [
                { title: "Chain Bracelets", image: Ring1 },
                { title: "Charm Bracelets", image: Ring1 },
                { title: "Designer Bangles", image: Ring1 }
            ]
        },
        {
            title: "Necklaces",
            slides: [
                { title: "Statement Necklaces", image: Ring1 },
                { title: "Chain Necklaces", image: Ring1 },
                { title: "Chokers", image: Ring1 }
            ]
        },
        {
            title: "Wedding Collection",
            slides: [
                { title: "Bridal Sets", image: Ring1 },
                { title: "Wedding Bands", image: Ring1 },
                { title: "Engagement Rings", image: Ring1 }
            ]
        }
    ];

    const scrollSlider = (index, direction) => {
        if (sliderRefs.current[index]) {
            const scrollAmount = direction === 'left' 
                ? -sliderRefs.current[index].offsetWidth 
                : sliderRefs.current[index].offsetWidth;
            
            sliderRefs.current[index].scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="space-y-16">
            {collections.map((collection, idx) => (
                <div key={idx} className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl mb-8 font-light">
                        {collection.title}
                    </h1>
          
                    <div className="relative">
                        <motion.div 
                            ref={el => sliderRefs.current[idx] = el}
                            className="flex overflow-x-hidden"
                            style={{ 
                                scrollSnapType: 'x mandatory',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {collection.slides.map((slide, index) => (
                                <motion.div
                                    key={index}
                                    className="min-w-[300px] md:min-w-[400px] p-2 scroll-snap-align-start flex-shrink-0"
                                >
                                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                                        <img 
                                            src={slide.image} 
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                                            <h2 className="absolute bottom-6 left-6 text-white text-2xl font-light">
                                                {slide.title}
                                            </h2>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <button 
                            onClick={() => scrollSlider(idx, 'left')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => scrollSlider(idx, 'right')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Slider;