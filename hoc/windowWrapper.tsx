"use client";
import useWindowStore, { WindowKey } from "@/store/window";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

import type { ComponentType } from "react";

gsap.registerPlugin(Draggable);

export default function WindowWrapper<P extends object = Record<string, never>>(
  Component: ComponentType<P>,
  windowKey: WindowKey
) {
  function Wrapped(props: P) {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return;

      if (isOpen) {
        element.style.display = "block";

        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 40,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.2,
            ease: "power3.out",
            overwrite: "auto",
          }
        );
      } else {
        gsap.to(element, {
          opacity: 0,
          scale: 0.8,
          duration: 0.15,
          ease: "power3.in",
          onComplete: () => {
            element.style.display = "none";
          },
        });
      }
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return;

      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowKey),
      });

      return () => {
        instance.kill();
      };
    });

    useLayoutEffect(() => {
      if (ref.current) {
        ref.current.style.display = isOpen ? "block" : "none";
      }
    }, []);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  }

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
}
