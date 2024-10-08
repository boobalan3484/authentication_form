'use client'
import { useEffect } from "react";
import "@/styles/ParticlesBackground.css"; // Ensure your styles for the particles container are correct

export default function ParticlesBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== "undefined") {
        const particlesJS = await import("particles.js");

        // particlesJS function is attached to window, so use it directly
        window.particlesJS.load("particles-js", "/particles-config.json", function () {
          // console.log("particles.js loaded - callback");
        });
      }
    };

    loadParticles();
  }, []);

  return <div id="particles-js" className="particles-container"></div>;
}
