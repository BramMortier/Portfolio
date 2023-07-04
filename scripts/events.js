import { openMobileMenuBtn, closeMobileMenuBtn } from "./constants";
import { initTabs } from "./tabs";
import { initHomepage } from "./timelines";

const setMobileMenu = (state) => {
    if (state === "open") openMobileMenu();
    if (state === "close") closeMobileMenu();
};

openMobileMenuBtn.addEventListener("click", () => setMobileMenu("open"));
closeMobileMenuBtn.addEventListener("click", () => setMobileMenu("close"));

window.addEventListener("DOMContentLoaded", () => {
    initHomepage();
    initTabs();
});
