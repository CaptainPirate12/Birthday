const container = document.getElementById("heartContainer");

// Create small hearts
for (let i = 0; i < 120; i++) {

    const heart = document.createElement("div");

    heart.className = "smallHeart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = Math.random() * window.innerHeight + "px";

    heart.style.animationDelay = (Math.random() * 2) + "s";

    container.appendChild(heart);

}

// Show big heart
setTimeout(() => {

    document.getElementById("bigHeart").classList.add("grow");

}, 4500);

// Pop the heart
setTimeout(() => {

    const heart = document.getElementById("bigHeart");

    heart.classList.remove("grow");

    heart.classList.add("pop");

}, 7000);

// Show birthday message
setTimeout(() => {

    document.getElementById("message").style.display = "block";

}, 7700);

// Floating hearts forever
function floatingHearts() {

    const heart = document.createElement("div");

    heart.className = "floating";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(floatingHearts, 300);
