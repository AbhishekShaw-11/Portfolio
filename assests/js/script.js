$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio |   Abhishek Kumar Shaw";
   
  } else {
    document.title = "Come Back To Portfolio";
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Front End Developer", "JavaScript Front-End Development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
        <div class="bar">
              <div class="info skills-card">
                <img class="skills-card-img" src=${skill.icon} alt="skill" />
                <span class="skills-card-name">${skill.name}</span>
              </div>
            </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

fetchData().then((data) => {
  showSkills(data);
});

/* SCROLL HOME */
srtop.reveal(".homes .content h3", { delay: 200 });
srtop.reveal(".homes .content p", { delay: 200 });
srtop.reveal(".homes .content .btn", { delay: 200 });

srtop.reveal(".homes .image", { delay: 400 });
srtop.reveal(".homes .linkedin", { interval: 600 });
srtop.reveal(".homes .github", { interval: 800 });
srtop.reveal(".homes .twitter", { interval: 1000 });
srtop.reveal(".homes .telegram", { interval: 600 });
srtop.reveal(".homes .instagram", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 300 });
srtop.reveal(".about .content .tag", { delay: 400 });
srtop.reveal(".about .content p", { delay: 300 });
srtop.reveal(".about .content .box-container", { delay: 300 });
srtop.reveal(".about .content .resumebtn", { delay: 300 });
