const bgimgs = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg"

];
const chosenImage = bgimgs[Math.floor(Math.random() * bgimgs.length)];


const bgImage = document.createElement("img");


bgImage.src = `bg_imgs/${chosenImage}`;
bgImage.classList.add("background")
document.body.appendChild(bgImage);