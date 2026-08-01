console.log("JS loaded");


const techBox = document.createElement("div");

techBox.className = "tech-box";

techBox.innerHTML = "TEST";

document.body.appendChild(techBox);


const images = document.querySelectorAll(".img");


console.log("Images found:", images.length);


images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        console.log("Hover detected");

        techBox.innerHTML = image.dataset.tech.replaceAll(",", "<br>");

        techBox.style.display = "block";

    });


    image.addEventListener("mousemove", (event) => {

        techBox.style.left = event.pageX + 20 + "px";
        techBox.style.top = event.pageY + 20 + "px";

    });


    image.addEventListener("mouseleave", () => {

        techBox.style.display = "none";

    });

});


















