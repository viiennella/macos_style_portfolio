"use client";

import { FinderItem, locations } from "@/constants/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import Image from "next/image";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "@/store/window";
import useLocationStore from "@/store/location";

gsap.registerPlugin(useGSAP, Draggable);

const projects = locations.work?.children ?? [];
/**
 * Render draggable folder icons for each project and handle opening the finder for a selected project.
 *
 * @returns A JSX element containing a list of draggable project folder items that open the finder when clicked.
 */
export default function HomeFolders() {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  function handleOpenProjectFinder(project: FinderItem) {
    setActiveLocation(project);
    openWindow("finder");
  }
  useGSAP(() => {
    const draggables = Draggable.create(".folder");
    return () => {
      draggables.forEach((d) => d.kill());
    };
  }, [projects]);
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            tabIndex={0}
            role="button"
            aria-label={`Open ${project.name} folder`}
            onClick={() => handleOpenProjectFinder(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenProjectFinder(project);
              }
            }}
          >
            <Image
              src={project.icon}
              alt={project.name}
              width={100}
              height={100}
            />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}