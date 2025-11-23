"use client";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHTS = {
  subtitle: {
    min: 100,
    max: 400,
    default: 100,
  },
  title: {
    min: 400,
    max: 900,
    default: 400,
  },
};

function renderText(text: string, className: string, baseWeight: number = 400) {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

function setupTextHover(container: HTMLElement, type: "subtitle" | "title") {
  if (!container) return;

  const letters = container.querySelectorAll("span");

  const { min, max, default: base } = FONT_WEIGHTS[type];

  function animateLetter(
    letter: HTMLElement,
    weight: number,
    duration: number = 0.25
  ) {
    return gsap.to(letter, {
      fontVariationSettings: `'wght' ${weight}`,
      duration,
      ease: "power2.out",
    });
  }

  function handleMouseMove(e: MouseEvent) {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);
      const newWeight = min + (max - min) * intensity;

      animateLetter(letter, newWeight);
    });
  }

  function handleMouseLeave() {
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  }

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
}

export function Welcome() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const cleanupSubtitle =
      subtitleRef.current && setupTextHover(subtitleRef.current, "subtitle");
    const cleanupTitle =
      titleRef.current && setupTextHover(titleRef.current, "title");

    return () => {
      cleanupSubtitle && cleanupSubtitle();
      cleanupTitle && cleanupTitle();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText("Hey, I'm your mom. Welcome to my", "text-3xl", 100)}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic")}
      </h1>
      <div className="small-screen">
        <p>This Portfolio is designed for Desktop/Tablet devices only.</p>
      </div>
    </section>
  );
}
