const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const projectContent = {
  journey: {
    title: "The Journey",
    text: "Replace this with your best edit. Add a short description of the footage, your role, and the choices you made — pacing, music, sound design, color, or storytelling."
  },
  sound: {
    title: "Motion & Sound",
    text: "A space for an editing experiment that shows your attention to sound design, rhythm and transitions."
  },
  sample: {
    title: "Creator Sample",
    text: "This is where your personalized sample for a creator can live. Keep it short, focused and clearly label it as a concept edit."
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.querySelectorAll(".view-project").forEach(button => {
  button.addEventListener("click", () => {
    const project = projectContent[button.dataset.project];
    modalTitle.textContent = project.title;
    modalText.textContent = project.text;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});
