const picsArray = [
  "Images/mouth-1580749_640.png",
  "Images/mouth-1419642_640.png",
  "Images/lips-6664771_640.png",
  "Images/mouth-312558_640.png",
  "Images/mouth-6219426_640.png",
  "Images/red-6710662_640.png",
  "Images/lips-7132749_640.png",
  "Images/lips-2024681_640.png",
  "Images/lips-6783116_640.png",
  "Images/lipstick-3709565_640.png",
  "Images/female-160546_640.png",
];

let index = 0;
let interval = setInterval(function () {
  document.getElementById("mouth").setAttribute("src", picsArray[index]);
  index++;
  if (index === picsArray.length) {
    index = 0;
  }
}, 1000);

function continueDialect() {
  clearInterval(interval);
  window.location.href = "dialect2.html";
}
