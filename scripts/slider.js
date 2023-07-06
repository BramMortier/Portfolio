import { Power2, gsap } from "gsap";
import { projectsSlider } from "./constants";

export const handleOnDown = (e) => (projectsSlider.dataset.mouseDownAt = e.clientX);

export const handleOnUp = (e) => {
    projectsSlider.dataset.mouseDownAt = "0";
    projectsSlider.dataset.prevPercentage = projectsSlider.dataset.percentage;
};

export const handleOnMove = (e) => {
    if (projectsSlider.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(projectsSlider.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(projectsSlider.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    projectsSlider.dataset.percentage = nextPercentage;

    gsap.to(projectsSlider, {
        xPercent: nextPercentage,
        duration: 1.2,
        ease: Power2,
    });

    const images = gsap.utils.toArray(projectsSlider.querySelectorAll(".projects__project-thumbnail img"));

    images.forEach((image) => {
        gsap.to(image, {
            objectPosition: `${100 + nextPercentage}% center`,
            duration: 1.2,
            ease: Power2,
        });
    });
};
