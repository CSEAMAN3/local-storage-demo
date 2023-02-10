//function to set theme of our website

function setTheme() {
  const body = document.querySelector("body");
  const theme = localStorage.getItem("theme");
  if (theme === "light" || theme === null) {
    localStorage.setItem("theme", "dark");
    body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    body.classList.remove("dark");
  }
}

document.getElementById("theme-btn").addEventListener("click", setTheme);

function getTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}

getTheme();
