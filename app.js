const menuBar = document.getElementById("menuBar");
const header = document.querySelector("header");
const menu = document.querySelector("nav ul");
const aboutBtns = document.querySelectorAll(".about-content__text button");
const contactForm = document.querySelector(".contact-from form");
const inputs = document.querySelectorAll("input[required]");
const projectsContents = document.querySelectorAll(".projects-content");
const closeBtn = document.querySelector(".select-content span");
let isMenuClick = true;

const handleMenuBar = () => {
  if (isMenuClick) {
    header.style.animation = "active .5s linear forwards";
    setTimeout(() => {
      menu.style.display = "flex";
      isMenuClick = !isMenuClick;
    }, 500);
  } else {
    header.style.animation = "inactive .5s linear forwards";
    menu.style.display = "none";
    isMenuClick = !isMenuClick;
  }
};

const handleMouseOverAboutBtn = (event) => {
  const aboutImg = event.currentTarget
    .closest(".about-content")
    .querySelector("img");
  aboutImg.style.filter = " grayscale(0)";
};

const handleMouseLeaveAboutBtn = (event) => {
  const aboutImg = event.currentTarget
    .closest(".about-content")
    .querySelector("img");
  aboutImg.style.filter = " grayscale(1)";
};

for (let aboutBtn of aboutBtns) {
  aboutBtn.addEventListener("mouseover", handleMouseOverAboutBtn);
  aboutBtn.addEventListener("mouseleave", handleMouseLeaveAboutBtn);
}

const handleWindowResize = () => {
  isMenuClick = true; //클릭 초기화
  const media = matchMedia("screen and (max-width:650px)");
  if (media.matches) {
    media.addListener(() => {
      menu.style.display = "flex";
      header.style.animation = "inactive .5s linear forwards";
    });
  } else {
    media.addListener(() => {
      menu.style.display = "none";
      header.style.height = "80px";
    });
  }
};

const hadleprojectsContent = (event) => {
  const select = event.currentTarget
    .closest("#projects")
    .querySelector(".select-content");
  select.style.display = "flex";
  const selectImg = select.querySelector("img");
  selectImg.src = event.target.currentSrc;
};
const handleCloseProjectsContent = (event) => {
  const select = event.currentTarget
    .closest("#projects")
    .querySelector(".select-content");
  select.style.display = "none";
};
for (let projectsContent of projectsContents) {
  projectsContent.addEventListener("click", hadleprojectsContent);
}

menuBar.addEventListener("click", handleMenuBar);
window.addEventListener("resize", handleWindowResize);
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let input of inputs) {
    input.value = ""; //인풋창 초기화
  }
  alert("Thank you for message!");
});
closeBtn.addEventListener("click", handleCloseProjectsContent);
