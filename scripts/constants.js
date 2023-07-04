export const openMobileMenuBtn = document.getElementById("open-mobile-menu-btn");
export const closeMobileMenuBtn = document.getElementById("close-mobile-menu-btn");

export const mobileMenu = document.getElementById("mobile-menu");
export const mobileMenuDecoLetters = document.querySelectorAll(".mobile-menu__background-deco svg");
export const mobileMenuNavLinks = document.querySelectorAll(".mobile-menu__nav-link-label");
export const mobileMenuNavLinkTags = document.querySelectorAll(".mobile-menu__nav-link-tag");
export const mobileMenuSocialBtns = document.querySelectorAll(".mobile-menu__social-btn");
export const mobileMenuHeader = document.getElementById("mobile-menu-header");

export const sidebar = document.getElementById("sidebar");
export const sidebarLogo = document.getElementById("sidebar-logo");
export const sidebarSocials = document.querySelectorAll(".page__sidebar-social-icon svg");

export const headerNavLinks = document.querySelectorAll(".header__nav-link");
export const headerSearchBtn = document.getElementById("search-btn");

export const heroName = document.getElementById("hero-name");
export const heroSlogan = document.getElementById("hero-slogan");
export const heroIntroParagraph = document.getElementById("hero-intro-paragraph");
export const heroBgImage = document.getElementById("hero-bg-img");
export const heroActionsBg = document.getElementById("hero-actions");
export const heroActions = document.querySelectorAll(".hero__action");

export const experienceInfo = document.getElementById("experience-info");
export const experienceTabList = document.getElementById("experience-company-list");

export const searchTerms = [
    {
        term: "Home",
        type: "Navigation",
        description: "",
    },
    {
        term: "About me",
        type: "Navigation",
        description: "",
    },
    {
        term: "Projects",
        type: "Navigation",
        description: "",
    },
    {
        term: "Experience",
        type: "Navigation",
        description: "",
    },
    {
        term: "Contact",
        type: "Navigation",
        description: "",
    },
    {
        term: "Time management app",
        type: "Projects",
        description: "",
    },
    {
        term: "Westsite training platform",
        type: "Projects",
        description: "",
    },
];

export const experienceList = [
    {
        company: "Mafoulit",
        jobTitle: "WordPress Developer & Designer",
        timeline: "2020 - TODAY",
        summary: [
            "I worked on developing a versatile design system and made a user friendly interface from scratch.",
            "Build and maintained a WordPress website using the designs I made. I learned a lot about managing large amounts of image assets and videos.",
            "Used Adobe Photoshop & Illustrator to create digital content.",
        ],
    },
    {
        company: "Devmo",
        jobTitle: "Freelance Developer",
        timeline: "2020 - TODAY",
        summary: [
            "I focus on developing custom apps and website tailored to my clients needs",
            "After meeting the client I Design a modern and user friendly layout using my knowledge of UX/UI rules",
            "Transform the design into a working product using a modern tech stack and deploying my browser efficient code to the internet",
            "Maintain and update the codebase when needed",
        ],
    },
];
