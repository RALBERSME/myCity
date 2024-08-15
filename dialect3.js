const knob = document.getElementById("knob");
const Film1 = document.getElementById("Film1");
const Film2 = document.getElementById("Film2");

knob.addEventListener("mouseover", () => {
  knob.style.animation = "openCamera 5s 0s ease forwards";
  Film1.style.animation = "getIntoSight 3s 4s linear forwards";
  Film2.style.animation = "getIntoSight2 3s 4s linear forwards";
});
