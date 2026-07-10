const container = document.getElementById("heartContainer");

for (let i = 0; i < 120; i++) {

    let h = document.createElement("div");

    h.className = "smallHeart";

    h.innerHTML = "❤";

    h.style.left = Math.random() * window.innerWidth + "px";

    h.style.top = Math.random() * window.innerHeight + "px";

    h.style.animationDelay = (Math.random() * 2) + "s";

    container.appendChild(h);

}

setTimeout(() => {

    document.getElementById("bigHeart").classList.add("grow");

}, 4500);

setTimeout(() => {

    const heart = document.getElementById("bigHeart");

    heart.classList.remove("grow");

    heart.classList.add("pop");

}, 7000);

setTimeout(() => {

    document.getElementById("message").style.display = "block";

}, 7700);

function floatingHearts() {

    let h = document.createElement("div");

    h.className = "floating";

    h.innerHTML = "❤";

    h.style.left = Math.random() * 100 + "vw";

    h.style.fontSize = (15 + Math.random() * 25) + "px";

    h.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(h);

    setTimeout(() => {

        h.remove();

    }, 10000);

}

setInterval(floatingHearts, 300);
