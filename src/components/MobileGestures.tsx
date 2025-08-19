"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

interface MobileGesturesProps {
  children: React.ReactNode;
}

const MobileGestures = ({ children }: MobileGesturesProps) => {
  useEffect(() => {
    let startY = 0;
    let startX = 0;
    let isScrolling = false;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      isScrolling = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startY || !startX) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const diffY = startY - currentY;
      const diffX = startX - currentX;

      // Check if it's a vertical scroll
      if (Math.abs(diffY) > Math.abs(diffX)) {
        isScrolling = true;
      }

      // Add haptic feedback for iOS devices
      if ("vibrate" in navigator && Math.abs(diffY) > 50 && !isScrolling) {
        navigator.vibrate(10);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startY || !startX) return;

      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const diffY = startY - endY;
      const diffX = startX - endX;

      // Swipe detection
      const minSwipeDistance = 50;

      if (
        Math.abs(diffX) > Math.abs(diffY) &&
        Math.abs(diffX) > minSwipeDistance
      ) {
        if (diffX > 0) {
          // Swipe left - could navigate to next section
          handleSwipeLeft();
        } else {
          // Swipe right - could navigate to previous section
          handleSwipeRight();
        }
      }

      // Reset
      startY = 0;
      startX = 0;
      isScrolling = false;
    };

    const handleSwipeLeft = () => {
      // Find current section and navigate to next
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        const nextElement = document.getElementById(sections[nextIndex]);
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const handleSwipeRight = () => {
      // Find current section and navigate to previous
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const currentIndex = sections.indexOf(currentSection);
        const prevIndex =
          currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
        const prevElement = document.getElementById(sections[prevIndex]);
        if (prevElement) {
          prevElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add touch event listeners
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <motion.div
      className="touch-pan-y"
      style={{
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {children}
    </motion.div>
  );
};

export default MobileGestures;
