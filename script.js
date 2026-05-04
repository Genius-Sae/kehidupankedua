const planets = document.querySelectorAll(".planet");

planets.forEach((planet, index) => {
    planet.addEventListener("click", () => {
        const text = document.createElement("div");
        text.innerText = "Kenangan ke-" + (index + 1);

        text.style.position = "absolute";
        text.style.top = "50%";
        text.style.left = "50%";
        text.style.transform = "translate(-50%, -50%)";
        text.style.background = "rgba(0,0,0,0.7)";
        text.style.padding = "15px 25px";
        text.style.borderRadius = "10px";
        text.style.color = "white";

        document.body.appendChild(text);

        setTimeout(() => {
            text.remove();
        }, 2000);
    });
});
