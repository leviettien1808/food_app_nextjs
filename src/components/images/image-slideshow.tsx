"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import burgerImg from "@/assets/burger.png";
import curryImg from "@/assets/curry.png";
import dumplingsImg from "@/assets/dumplings.png";
import macncheeseImg from "@/assets/macncheese.png";
import pizzaImg from "@/assets/pizza.png";
import schnitzelImg from "@/assets/schnitzel.png";
import tomatoSaladImg from "@/assets/tomato-salad.png";
import classes from "@/components/images/image-slideshow.module.css";

const images = [
  { image: burgerImg, alt: "A burger" },
  { image: curryImg, alt: "A bowl of curry" },
  { image: dumplingsImg, alt: "Plate of dumplings" },
  { image: macncheeseImg, alt: "A bowl of macaroni and cheese" },
  { image: pizzaImg, alt: "A pizza" },
  { image: schnitzelImg, alt: "A schnitzel with lemon garnish" },
  { image: tomatoSaladImg, alt: "Tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={img.alt}
        />
      ))}
    </div>
  );
}
