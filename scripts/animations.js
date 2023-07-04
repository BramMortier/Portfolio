import { gsap, Power2 } from "gsap";
import SplitType from "split-type";

export const slideFromTop = (element, { distance = "100%", staggerInterval = 0.1, duration = 1, easing = Power2.easeOut, fade = true } = {}) => {
    return gsap.from(element, {
        y: `-${distance}`,
        stagger: staggerInterval,
        duration: duration,
        ease: easing,
        opacity: fade ? 0 : 1,
    });
};

export const slideFromBottom = (element, { distance = "100%", staggerInterval = 0.1, duration = 1, easing = Power2.easeOut, fade = true } = {}) => {
    return gsap.from(element, {
        y: `${distance}`,
        stagger: staggerInterval,
        duration: duration,
        ease: easing,
        opacity: fade ? 0 : 1,
    });
};

export const slideFromLeft = (element, { distance = "100%", staggerInterval = 0.1, duration = 1, easing = Power2.easeOut, fade = true } = {}) => {
    return gsap.from(element, {
        x: `-${distance}`,
        stagger: staggerInterval,
        duration: duration,
        ease: easing,
        opacity: fade ? 0 : 1,
    });
};

export const slideFromRight = (element, { distance = "100%", staggerInterval = 0.1, duration = 1, easing = Power2.easeOut, fade = true } = {}) => {
    return gsap.from(element, {
        x: `${distance}`,
        stagger: staggerInterval,
        duration: duration,
        ease: easing,
        opacity: fade ? 0 : 1,
    });
};

export const fadeIn = (element, { staggerInterval = 0.1, duration = 1 } = {}) => {
    return gsap.from(element, {
        opacity: 0,
        duration: duration,
        stagger: staggerInterval,
    });
};

export const growX = (element, { origin = "right", easing = Power2.easeOut, duration = 1 } = {}) => {
    return gsap.from(element, {
        scaleX: 0,
        transformOrigin: origin,
        duration: duration,
        ease: easing,
    });
};

export const growY = (element, { origin = "top", easing = Power2.easeOut, duration = 1 } = {}) => {
    return gsap.from(element, {
        scaleY: 0,
        transformOrigin: origin,
        duration: duration,
        ease: easing,
    });
};
