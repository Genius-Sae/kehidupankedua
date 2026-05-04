const planets = document.querySelectorAll(".planet");

planets.forEach((planet, index) => {
    planet.addEventListener("click", () => {
        alert("Ini kenangan ke-" + (index + 1));
    });
});
