import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Ring1 from "../../assets/CollectionImg/ring1.png";
import ring2 from "../../assets/CollectionImg/ring2.jpg";
import ring3 from "../../assets/CollectionImg/ring3.jpg";
import pendant1 from "../../assets/CollectionImg/pendant1.jpg";
import pendant2 from "../../assets/CollectionImg/pendant2.jpg";
import bracelet1 from "../../assets/CollectionImg/bracelet1.jpg";
import bracelet2 from "../../assets/CollectionImg/bracelet2.jpg";
import necklese1 from "../../assets/CollectionImg/nacklese1.jpg";
import necklese2 from "../../assets/CollectionImg/nacklese2.jpg";
import earring1 from "../../assets/CollectionImg/earring1.jpg";
import earring2 from "../../assets/CollectionImg/earring2.jpg";
import bali1 from "../../assets/CollectionImg/bali1.jpg";
import bali2 from "../../assets/CollectionImg/bali2.jpg";
import bangle1 from "../../assets/CollectionImg/bangle1.jpg";
import bangle2 from "../../assets/CollectionImg/bangle2.jpg";






function Slider() {
    const sliderRefs = useRef([]);

    const collections = [
        {
            title: "Rings",
            slides: [
                { title: "WEDDING RING", image: Ring1 },
                { title: "Causal Ring", image: ring2 },
                { title: "Statement Rings", image: ring3 }
            ]
        },
        {
            title: "Pendants and Pendant Sets",
            slides: [
                { title: "Special Pendants", image: pendant1 },
                { title: "Causal Pendant sets", image: pendant2 },
                { title: "Statement Rings", image: Ring1 }
            ]
        },
        {
            title: "Bracelets",
            slides: [
                { title: "Special Bracelets", image: bracelet1 },
                { title: "Causal Bracelets", image: bracelet2 },
                { title: "Designer Bracelets", image: Ring1 }
            ]
        },
        {
            title: "Necklace Sets",
            slides: [
                { title: "Special Necklace", image: necklese1 },
                { title: "Causal Necklace Set", image: necklese2 },
                { title: "Necklace Set", image: Ring1 }
            ]
        },
        {
            title: "Earrings",
            slides: [
                { title: "Special Earrings", image: earring1 },
                { title: "Causal Earring", image: earring2 },
                { title: "Drop Earrings", image: Ring1 }
            ]
        },
        {
            title: "Bali",
            slides: [
                { title: "Special Bali", image: bali1 },
                { title: "Causal Bali", image: bali2 },
                { title: "Engagement Bali", image: Ring1 }
            ]
        },
        {
            title: "Bangles",
            slides: [
                { title: "Special Bangles", image: bangle1 },
                { title: "Causal Bangles", image: bangle2 },
                { title: "Engagement Bangles", image: Ring1 }
            ]
        },
        {
            title: "Tops",
            slides: [
                { title: "Special Tops", image: bangle1 },
                { title: "Causal Tops", image: bangle2 },
                { title: "Engagement Tops", image: Ring1 }
            ]
        }
    ];

    const scrollSlider = (index, direction) => {
        if (sliderRefs.current[index]) {
            // Find the width of the first child (image) to set scroll amount
            const slideWidth = sliderRefs.current[index].firstChild.offsetWidth;
    
            const scrollAmount = direction === 'left' ? -slideWidth : slideWidth;
    
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
                    <h1 className="text-4xl md:text-5xl font-serif mb-8 font-normal">
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
                                    <div className="relative h-[290px] md:h-[400px] w-[290px] md:w-[450px] rounded-lg overflow-hidden">
                                        <img 
                                            src={slide.image} 
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                        {/* Centered Text */}
                                        <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2">
                                            <h2 className="text-white text-lg md:text-3xl font-serif font-medium text-center">
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