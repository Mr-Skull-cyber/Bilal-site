const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
const characters = ["0", "1", "A", "E", "F", "7", "x"];
let width = 0;
let height = 0;
let drops = [];

function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    drops = Array.from({ length: Math.ceil(width / 24) }, () => Math.random() * height / 20);
}

function renderMatrix() {
    ctx.fillStyle = "rgba(242, 245, 244, .18)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#7e9e0b";
    ctx.font = "11px 'DM Mono', monospace";
    drops.forEach((drop, index) => {
        ctx.fillText(characters[Math.floor(Math.random() * characters.length)], index * 24, drop * 20);
        if (drop * 20 > height && Math.random() > .975) drops[index] = 0;
        drops[index] += .32;
    });
    requestAnimationFrame(renderMatrix);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
renderMatrix();