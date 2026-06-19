// =========================
// TYPEWRITER EFFECT
// =========================

const text =
"Out of all the websites on the internet, this one was made for exactly one person.";

const typewriter =
document.getElementById("typewriter");

let i = 0;

function typing() {

    if (i < text.length) {

        typewriter.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 40);
    }
}

typing();


// =========================
// FLOATING HEARTS
// =========================

const heartsContainer =
document.querySelector(".hearts");

function createHeart() {

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

    heart.style.animation =
    `float ${Math.random() * 5 + 5}s linear`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);


// =========================
// BUTTON
// =========================

const btn =
document.getElementById("startBtn");

btn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "page2.html";

    }, 2000);

});
