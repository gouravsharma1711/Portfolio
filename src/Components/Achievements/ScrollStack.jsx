import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 80, // reduced for tighter layout
  itemScale = 0.04,
  itemStackDistance = 30,
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
}) => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const nativeScrollAttachedRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const container = containerRef.current;
    if (!container || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerTop = container.offsetTop;
    const midpoint = window.innerHeight / 2;

    const endElement = container.querySelector(".scroll-stack-end");
    const endElementTop = endElement ? endElement.offsetTop : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = card.offsetTop;

      const triggerStart = containerTop + cardTop - window.innerHeight;
      const triggerEnd = containerTop + cardTop - midpoint;
      const pinStart = containerTop + cardTop - midpoint + itemStackDistance * i;
      const pinEnd = containerTop + endElementTop - midpoint;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY =
          scrollTop - (containerTop + cardTop) + midpoint - itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY =
          pinEnd - (containerTop + cardTop) + midpoint - itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        lastTransformsRef.current.set(i, newTransform);
      }
    });

    isUpdatingRef.current = false;
  }, [itemScale, itemStackDistance, baseScale, calculateProgress]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
    }

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      if (!nativeScrollAttachedRef.current) {
        window.addEventListener("scroll", handleScroll, { passive: true });
        nativeScrollAttachedRef.current = true;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 0.7, // faster response
      easing: (t) => t, // linear for smooth feel
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1,
      lerp: 0.08,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (nativeScrollAttachedRef.current) {
        window.removeEventListener("scroll", handleScroll);
        nativeScrollAttachedRef.current = false;
      }
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, setupLenis, updateCardTransforms]);

  return (
    <div
      className={`scroll-stack-container relative  ${className}`.trim()}
      ref={containerRef}
    >
      <div className="scroll-stack-inner ">{children}<div className="scroll-stack-end" /></div>
    </div>
  );
};

export default ScrollStack;
