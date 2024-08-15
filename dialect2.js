const contentArray = [
  `<a href="https://mr-dialect.com/deutscher-dialekt-uebersetzer/deutsch-koelsch/"
    target="_blank"
  >
    drawer1<span class="hideText">Translator Cologne dialect to German</span>
  </a>`,
];

// const content1 = document.getElementById("content1");
// const dot1 = document.getElementById("dot1");
// const link1 = document.getElementById("link1");
// content1.addEventListener("mouseover", () => {
//   content1.style.width = "100%";
//   dot1.classList.add("hidden");
//   link1.classList.remove("hidden");
// });
// content1.addEventListener("mouseleave", () => {
//   content1.style.width = "300px";
//   dot1.classList.remove("hidden");
//   link1.classList.add("hidden");
// });

//solution for all drawers

const contentElements = document.querySelectorAll("li");
const contentElementsArray = Array.from(contentElements);

const dots = document.querySelectorAll(".dot");
const dotsArray = Array.from(dots);

const links = document.querySelectorAll(".link");
const linksArray = Array.from(links);

contentElementsArray.map((item, index) => {
  item.addEventListener("mouseover", () => {
    item.style.width = "100%";
    dots[index].classList.add("hidden");

    linksArray[index].classList.remove("hidden");
  });
  item.addEventListener("mouseleave", () => {
    item.style.width = "300px";
    dotsArray[index].classList.remove("hidden");
    linksArray[index].classList.add("hidden");
  });
});
