"use client";

import { Tooltip } from "react-tooltip";
import { dockApps } from "@/constants/constants";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    function animateIcons(mouseX: number) {
      if (!dock) return;
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width: iconWidth } =
          icon.getBoundingClientRect();
        const center = iconLeft - left + iconWidth / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          y: intensity * -15,
          scale: 1 + 0.25 * intensity,
          duration: 0.25,
          ease: "power1.out",
          overwrite: "auto",
        });
      });
    }

    function handleMouseMove(e: MouseEvent) {
      if (!dock) return;
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;
      animateIcons(mouseX);
    }

    function handleMouseLeave() {
      icons.forEach((icon) => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
          overwrite: "auto",
        });
      });
    }

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = (app: { id: string; canOpen: boolean }) => {};

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center ">
            <button
              className="dock-icon"
              type="button"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              data-tooltip-delay-hide={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                fill
                loading="lazy"
                className={canOpen ? "" : "opacity-80"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
}
