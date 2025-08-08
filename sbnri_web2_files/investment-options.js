var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const INVESTMENT_DATA = {
  tabs: ["Equity", "Debt"],
  equity: {
    options: [
      {
        title: "Mutual Fund",
        description:
          "Only platform for NRIs/OCIs to invest digitally & easily in Mutual Funds. Get FREE expert advice to build your mutual fund portfolio from scratch.",
        icon: "sbnri_web2_files/01-23-2025-11-19-23_Briefcase.svg",
        image:
          "sbnri_web2_files/01-23-2025-11-26-07_Group_1000005504.png",
      },
      {
        title: "Micro VC Funds",
        description:
          "Become a part of Indian start-up growth story by investing in funds which have proven track record. 1-100x return possible.",
        icon: "sbnri_web2_files/01-23-2025-11-18-17_Frame_10607.svg",
        image:
          "sbnri_web2_files/01-23-2025-11-26-07_Group_1000005504.png",
      },
      {
        title: "Portfolio Management",
        description:
          "Invest in professionally managed Indian stock market portfolios with a past return of 20%+ in the last 4 years. Investments start at Rs. 50 Lacs.",
        icon: "sbnri_web2_files/01-23-2025-11-21-49_Briefcase_(1).svg",
        image:
          "sbnri_web2_files/01-23-2025-11-26-07_Group_1000005504.png",
      },
    ],
  },
  debt: {
    options: [
      {
        title: "Fixed Deposits",
        description:
          "Book fixed deposits digitally and earn up to 8.5% interest p.a.We have partnered with India's largest corporates to offer best-in-class deposits.",
        icon: "sbnri_web2_files/01-23-2025-11-09-03_Frame_41186.svg",
        image:
          "sbnri_web2_files/01-23-2025-11-26-07_Group_1000005504.png",
      },
      {
        title: "Commercial Real Estate",
        description:
          "Invest in A-Grade commercial properties like warehouses, office spaces, etc. Earn monthly rental (8-9% p.a.) and capital appreciation. Start with a Min. investment of Rs. 10 Lacs.",
        icon: "sbnri_web2_files/01-23-2025-11-20-09_Frame_12334.svg",
        image:
          "sbnri_web2_files/01-23-2025-11-26-07_Group_1000005504.png",
      },
      {
        title: "Bonds",
        description:
          "Invest in high-yield corporate & Govt. Bonds and earn safe & fixed returns.",
        icon: "sbnri_web2_files/01-23-2025-11-20-38_Group_39048.svg",
        image:
          "sbnri_web2_files/01-23-2025-11-26-07_Group_1000005504.png",
      },
    ],
  },
};

function createInvestmentUI() {
  // Clear existing content first
  const tabsContainer = document.getElementById("investmentTabs");
  const contentContainer = document.getElementById("investmentContent");
  
  // Clear tabs container
  tabsContainer.innerHTML = "";
  
  // Clear content container but keep the download app link
  const downloadAppLink = contentContainer.querySelector(".download-app");
  const appPreview = contentContainer.querySelector(".app-preview");
  contentContainer.innerHTML = "";
  
  // Re-add the download app link and app preview
  if (downloadAppLink) {
    contentContainer.appendChild(downloadAppLink);
  }
  if (appPreview) {
    contentContainer.appendChild(appPreview);
  }
  
  // Create Tabs
  INVESTMENT_DATA.tabs.forEach((tab, index) => {
    const button = document.createElement("button");
    button.className = `investment-tab ${index === 0 ? "active" : ""}`;
    button.dataset.type = tab.toLowerCase();
    button.textContent = tab;
    tabsContainer.appendChild(button);
  });

  // Create Options Container
  INVESTMENT_DATA.tabs.forEach((tab, index) => {
    const type = tab.toLowerCase();
    const optionsContainer = document.createElement("div");
    optionsContainer.className = `investment-options-list ${
      index === 0 ? "active" : ""
    }`;
    optionsContainer.id = `${type}Options`;

    // Create Options
    INVESTMENT_DATA[type].options.forEach((option, optIndex) => {
      optionsContainer.appendChild(createOptionElement(option, optIndex === 0));
    });

    contentContainer.appendChild(optionsContainer);
  });
  // Ensure first option's description is visible
  const firstOptions = document.querySelectorAll(
    ".investment-options-list .investment-option:first-child"
  );
  firstOptions.forEach((option) => {
    option.classList.add("active");
    const description = option.querySelector(".option-content p");
    if (description) {
      description.style.height = "auto";
      description.style.opacity = "1";
    }
  });

  // Add Event Listeners
  addEventListeners();
}

function createOptionElement(option, isActive) {
  const div = document.createElement("div");
  div.className = `investment-option ${isActive ? "active" : ""}`;
  div.innerHTML = `
            <div class="option-icon">
                <img src="${option.icon}" alt="${option.title}">
            </div>
            <div class="option-content">
                <h3>${option.title}</h3>
                <p>${option.description}</p>
            </div>
            <div class="option-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"/>
                </svg>
            </div>
        `;
  return div;
}

function addEventListeners() {
  const tabs = document.querySelectorAll(".investment-tab");
  const options = document.querySelectorAll(".investment-option");
  const previewImage = document.getElementById("previewImage");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () =>
      handleTabClick(tab, tabs, options, previewImage)
    );
  });

  options.forEach((option) => {
    option.addEventListener("click", () =>
      handleOptionClick(option, options, previewImage)
    );
  });
}

function handleTabClick(tab, tabs, options, previewImage) {
  const type = tab.dataset.type;

  tabs.forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");

  document.querySelectorAll(".investment-options-list").forEach((list) => {
    list.classList.remove("active");
  });
  document.getElementById(`${type}Options`).classList.add("active");

  // Reset all options and hide descriptions
  options.forEach((opt) => {
    opt.classList.remove("active");
    const description = opt.querySelector(".option-content p");
    if (description) {
      description.style.height = "0";
      description.style.opacity = "0";
    }
  });

  // Activate first option of the selected tab and show its description
  const firstOption = document.querySelector(
    `#${type}Options .investment-option:first-child`
  );
  if (firstOption) {
    firstOption.classList.add("active");
    const description = firstOption.querySelector(".option-content p");
    if (description) {
      description.style.height = "auto";
      description.style.opacity = "1";
    }
  }

  updatePreviewImage(type, 0);
}

function handleOptionClick(option, options, previewImage) {
  const type = document.querySelector(".investment-tab.active").dataset.type;
  // Get only the options from the current active tab
  const currentTabOptions = document
    .querySelector(`#${type}Options`)
    .querySelectorAll(".investment-option");
  const index = Array.from(currentTabOptions).indexOf(option);

  // Remove active class from all options
  options.forEach((opt) => {
    opt.classList.remove("active");
    // Hide all descriptions except the clicked one
    const description = opt.querySelector(".option-content p");
    if (description) {
      description.style.height = "0";
      description.style.opacity = "0";
    }
  });

  // Add active class to clicked option
  option.classList.add("active");

  // Show description of clicked option
  const description = option.querySelector(".option-content p");
  if (description) {
    description.style.height = "auto";
    description.style.opacity = "1";
  }

  updatePreviewImage(type, index);
}

function updatePreviewImage(type, index) {
  const previewImage = document.getElementById("previewImage");
  const imageUrl = INVESTMENT_DATA[type].options[index].image;
  previewImage.src = imageUrl;
  previewImage.alt = `${INVESTMENT_DATA[type].options[index].title} Preview`;
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", createInvestmentUI);


}
/*
     FILE ARCHIVED ON 21:47:33 Jul 16, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:41:37 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.22
  exclusion.robots: 0.047
  exclusion.robots.policy: 0.031
  esindex: 0.014
  cdx.remote: 171.234
  LoadShardBlock: 212.929 (3)
  PetaboxLoader3.datanode: 266.0 (4)
  load_resource: 73.019
*/