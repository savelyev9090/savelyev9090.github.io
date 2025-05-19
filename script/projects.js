const projectData = [
  {
    title: "YouTube Trands Analyser",
    img: "images/project1.png",
    description: `Telegram-бот, который анализирует комментарии под видео на YouTube и определяет общий эмоциональный настрой аудитории.`,
    stack: [
      "Python (Aiogram, Google-Api-Python-Client)",
      "SciPy",
      "SQLite",
      "Docker",
    ],
  },
  {
    title: "RemindMeBot",
    img: "images/project2.png",
    description: `Telegram-бот-напоминалка с функцией планирования задач и гибким расписанием.`,
    stack: ["Python (Aiogram)", "PostgreSQL", "APScheduler", "Google-API"],
  },
  {
    title: "BugBlaster",
    img: "images/project3.png",
    description: `CLI-утилита для поиска и логирования багов в коде.`,
    stack: ["Python (Click, Pytest)", "Loguru", "GitHub Actions", "JSON"],
  },
];

const popup = document.getElementById("popup");
const openPopupBtn = document.getElementById("open-projects-popup");
const closeBtn = document.querySelector(".popup-close");
const prevBtn = document.querySelector(".popup-prev");
const nextBtn = document.querySelector(".popup-next");
const popupImg = document.querySelector(".popup-img");
const popupTitle = document.querySelector(".popup-title");
const popupDesc = document.querySelector(".popup-description");
const popupStack = document.querySelector(".popup-stack");

let currentIndex = 0;

function renderProject(index) {
  const data = projectData[index];
  popupImg.src = data.img;
  popupTitle.textContent = data.title;
  popupDesc.textContent = data.description;
  popupStack.innerHTML = data.stack.map((tech) => `<li>${tech}</li>`).join("");

  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === projectData.length - 1 ? "none" : "block";
}

openPopupBtn.addEventListener("click", () => {
  currentIndex = 0;
  renderProject(currentIndex);
  popup.classList.remove("hidden");
  document.body.classList.add("noScroll");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden")
  document.body.classList.remove("noScroll");
});
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) renderProject(--currentIndex);
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < projectData.length - 1) renderProject(++currentIndex);
});

document.addEventListener("keydown", (e) => {
  if (!popup.classList.contains("hidden")) {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "Escape") closeBtn.click();
  }
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
    document.body.classList.remove("noScroll");
  }
});