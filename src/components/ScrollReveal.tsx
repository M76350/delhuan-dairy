import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Global AOS manager.
 *
 * Rules (applied automatically on every route change):
 * - Any element with data-layout="left-text"  → fade-right
 * - Any element with data-layout="right-text" → fade-left
 * - All <img> elements in sections           → fade-up
 * - Animations run once per element
 */
const ScrollReveal = () => {
  const location = useLocation();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: true,
        offset: 80,
      });
      initializedRef.current = true;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section")
    );

    sections.forEach((section) => {
      const leftText = section.querySelector<HTMLElement>(
        "[data-layout='left-text']"
      );
      const rightText = section.querySelector<HTMLElement>(
        "[data-layout='right-text']"
      );

      if (leftText && !leftText.dataset.aos) {
        leftText.dataset.aos = "fade-right";
        leftText.dataset.aosOnce = "true";
      }

      if (rightText && !rightText.dataset.aos) {
        rightText.dataset.aos = "fade-left";
        rightText.dataset.aosOnce = "true";
      }

      const images = Array.from(
        section.querySelectorAll<HTMLImageElement>("img")
      );

      images.forEach((img) => {
        if (!img.dataset.aos) {
          img.dataset.aos = "fade-up";
          img.dataset.aosOnce = "true";
        }
      });
    });

    AOS.refreshHard();
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;


