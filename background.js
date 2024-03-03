const images = [
    "0.jpeg", 
    "1.jpeg",
    "2.jpeg"
]

const imgtag = document.querySelector("#bg-img");

const chosenImage = images[Math.floor(Math.random() * images.length)];


//imgtag.setAttribute("src", `img/${chosenImage}`);
document.body.style.backgroundImage = `url(img/${chosenImage})`;
