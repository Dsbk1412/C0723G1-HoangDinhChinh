window.onload = function () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let mp = 25; //max particles
    let particles = [];
    for (let i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: Math.random() * 4 + 1, //radius
            d: Math.random() * mp, //density
        });
    }
    function draw() {
        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for (let i = 0; i < mp; i++) {
            let p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }
    let angle = 0;

    function update() {
        angle += 0.01;
        for (let i = 0; i < mp; i++) {
            let p = particles[i];
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                if (i % 3 > 0) {
                    particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
                } else {
                    if (Math.sin(angle) > 0) {
                        particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
                    } else {
                        particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
                    }
                }
            }
        }
    }

    //animation loop
    setInterval(draw, 33);
};

function yesClick() {
    alert("Tối nay, đi xem phim nhé!");
}

function noHover() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
}