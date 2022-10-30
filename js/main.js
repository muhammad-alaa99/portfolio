const sideBare = document.querySelectorAll(".side .list li a");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const portofolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");


window.addEventListener("load", (e) => {
  home.classList.add("hidden");
  about.classList.add("hidden");
  services.classList.add("hidden");
  portofolio.classList.add("hidden");
  contact.classList.add("hidden");


  sideBare.forEach((link) => {
    if (link.classList.contains("active")) {
      // console.log(link.dataset.class);
      // console.log(document.querySelector(link.dataset.class));
      document.querySelector(link.dataset.class).classList.remove("hidden");
    }

  });

});

sideBare.forEach((list) => {
  list.addEventListener("click", (e) => {
    // console.log(e.target.dataset.class); 

    if (e.target.dataset.class == ".home") {
      home.classList.remove("hidden");
      about.classList.add("hidden");
      services.classList.add("hidden");
      portofolio.classList.add("hidden");
      contact.classList.add("hidden");
    } else if (e.target.dataset.class == ".about") {
      about.classList.remove("hidden");
      home.classList.add("hidden");
      services.classList.add("hidden");
      portofolio.classList.add("hidden");
      contact.classList.add("hidden");
    } else if (e.target.dataset.class == ".services") {
      home.classList.add("hidden");
      about.classList.add("hidden");
      services.classList.remove("hidden");
      portofolio.classList.add("hidden");
      contact.classList.add("hidden");
    } else if (e.target.dataset.class == ".portfolio") {
      home.classList.add("hidden");
      about.classList.add("hidden");
      services.classList.add("hidden");
      portofolio.classList.remove("hidden");
      contact.classList.add("hidden");
    } else if (e.target.dataset.class == ".contact") {
      home.classList.add("hidden");
      about.classList.add("hidden");
      services.classList.add("hidden");
      portofolio.classList.add("hidden");
      contact.classList.remove("hidden");
    }



    // ermove class active
    sideBare.forEach((li) => {
      li.classList.remove("active");
    });
    // add class active
    e.target.classList.add("active");
  });
});


// show side par
const btn = document.querySelector(".nav-toggler");
const side = document.querySelector(".side");
btn.addEventListener("click", (e) => {
  document.querySelector(".side").classList.toggle("open")

});

// ===========================================
var typeing=new Typed(".typing",{
  strings:["","web Designer","web developer","graphic designer"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
});