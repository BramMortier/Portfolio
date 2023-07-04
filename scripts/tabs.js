import { experienceInfo, experienceList, experienceTabList } from "./constants";

export const initTabs = () => {
    experienceList.forEach((experience, index) => {
        const tabElement = document.createElement("li");

        tabElement.classList.add("experience__company");
        if (index === 0) tabElement.classList.add("experience__company--active");

        tabElement.innerText = experience.company;
        tabElement.addEventListener("click", (e) => changeTab(e.target));

        experienceTabList.appendChild(tabElement);
    });
};

export const changeTab = (selectedTab) => {
    const info = experienceList.filter((experience) => experience.company === selectedTab.innerText)[0];

    document.querySelectorAll(".experience__company").forEach((tab) => {
        tab.classList.remove("experience__company--active");
        if (tab.innerText === selectedTab.innerText) tab.classList.add("experience__company--active");
    });

    experienceInfo.innerHTML = `
        <h4>${info.jobTitle} <span class="experience__company-name">@${info.company}</span></h4>
        <p class="experience__timeline">${info.timeline}</p>
        <ul id="experience-summary" class="experience__summary"></ul>
    `;

    info.summary.forEach((bullet) => {
        const bulletElement = document.createElement("li");
        bulletElement.classList.add("experience__summary-bullet");
        bulletElement.innerHTML = `<p>${bullet}</p>`;
        document.getElementById("experience-summary").appendChild(bulletElement);
    });
};
