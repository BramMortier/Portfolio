import { Back, Power1, Power2, Power3, gsap } from "gsap";
import { slideFromTop, slideFromLeft, fadeIn, slideFromBottom, slideFromRight, growX, growY } from "./animations";
import {
    headerNavLinks,
    heroActions,
    heroActionsBg,
    heroBgImage,
    heroIntroParagraph,
    heroName,
    heroSlogan,
    sidebar,
    sidebarLogo,
    sidebarSocials,
} from "./constants";

export const initHomepage = () => {
    const initHomepageTl = gsap.timeline();

    initHomepageTl.add(growY(sidebar, { easing: Power1, fade: false, duration: 1.25 }), "+=0.5");
    initHomepageTl.add(fadeIn(sidebarLogo), "-=0.25");
    initHomepageTl.add(slideFromLeft(sidebarSocials, { distance: "100px" }), "-=0.5");
    initHomepageTl.add(fadeIn(heroBgImage, { duration: 1.5, easing: Power1 }), "-=2.5");
    initHomepageTl.add(fadeIn(heroSlogan), "-=1");
    initHomepageTl.add(fadeIn(heroIntroParagraph), "-=0.75");
    initHomepageTl.add(slideFromTop(heroName, { distance: "50px", duration: 1.5 }), "-=1");
    initHomepageTl.add(growY(heroActionsBg, { origin: "bottom", duration: 1, easing: Back.easeOut.config(1.9) }), "-=1.5");
    initHomepageTl.add(fadeIn(heroActions, { staggerInterval: 0.3 }));
    initHomepageTl.add(slideFromTop(headerNavLinks), "-=3");
};

export const openMobileMenu = () => {
    const menuTl = gsap.timeline();
};

export const closeMobileMenu = () => {
    const menuTl = gsap.timeline();
};
