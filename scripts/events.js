import { openMobileMenuBtn, closeMobileMenuBtn, projectsContainer } from "./constants";
import { handleOnDown, handleOnMove, handleOnUp } from "./slider";
import { initTabs } from "./tabs";
import { initHomepage } from "./timelines";

const setMobileMenu = (state) => {
    if (state === "open") openMobileMenu();
    if (state === "close") closeMobileMenu();
};

openMobileMenuBtn.addEventListener("click", () => setMobileMenu("open"));
closeMobileMenuBtn.addEventListener("click", () => setMobileMenu("close"));

projectsContainer.addEventListener("mousedown", (e) => handleOnDown(e));
projectsContainer.addEventListener("mousemove", (e) => handleOnMove(e));
projectsContainer.addEventListener("mouseup", (e) => handleOnUp(e));

projectsContainer.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
projectsContainer.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
projectsContainer.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));

window.addEventListener("DOMContentLoaded", () => {
    initHomepage();
    initTabs();
});
