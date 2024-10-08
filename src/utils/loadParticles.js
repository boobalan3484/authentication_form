import particlesJS from "particles.js";

// Load the particles effect using the correct function from particles.js
export const loadParticles = () => {
  if (typeof window !== "undefined" && particlesJS) {
    particlesJS.load("particles-js", "/particles-config.json", function () {
      console.log("particles.js loaded - callback");
    });
  }
};