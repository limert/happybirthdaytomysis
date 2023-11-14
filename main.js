// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "#F8E8EE",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "#EF9595",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#F2BED1",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * window.devicePixelRatio;
canvas.height = window.innerHeight * window.devicePixelRatio;
canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;

ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

const colors = [
  { r: 255, g: 197, b: 197 },
  { r: 255, g: 147, b: 148 },
  { r: 255, g: 209, b: 209 },
  { r: 255, g: 227, b: 255 },
  { r: 255, g: 185, b: 185 },
  { r: 255, g: 172, b: 199 },
];

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.counter = 0;
    this.sparks = [];
    this.trail = [];
  }
  draw() {
    this.counter++;

    // Draw the rocket
    if (this.counter < 80) {
      ctx.beginPath();
      ctx.arc(
        this.x,
        canvas.height / window.devicePixelRatio - this.counter * 2,
        0,
        0,
        2
      );
      ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
      ctx.fill();

      this.trail.push({
        x: this.x,
        y: canvas.height / window.devicePixelRatio - this.counter * 5,
      });

      // Draw the trail
      ctx.beginPath();
      ctx.moveTo(this.trail[0].x, this.trail[0].y);
      for (let i = 1; i < this.trail.length; i++) {
        ctx.lineTo(this.trail[i].x, this.trail[i].y);
        ctx.strokeStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Remove older parts of the trail
      if (this.trail.length > 8) {
        this.trail.shift();
      }
    }

    // Explode the firework
    else if (this.sparks.length === 0) {
      for (let i = 0; i < 70; i++) {
        // increase the number of sparks
        this.sparks.push(
          new Spark(
            this.x,
            canvas.height / window.devicePixelRatio - this.counter * 5,
            this.color
          )
        );
      }
    }

    // Draw the explosion
    else {
      for (let i = 0; i < this.sparks.length; i++) {
        let spark = this.sparks[i];
        spark.draw();
        spark.update();
        if (spark.opacity <= 0) {
          this.sparks.splice(i, 1);
          i--;
        }
      }
    }
  }
}

class Spark {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.speed = Math.random() * 5 + 1;
    this.angle = Math.random() * Math.PI * 2;
    this.color = color;
    this.opacity = 1;
    this.lightRadius = 1;
    this.lightOpacity = 1;
  }

  draw() {
    // Draw the light effect
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.lightRadius, 0.03, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
    ctx.fill();
    this.lightRadius += 0.09;
    this.lightOpacity *= 2;

    // Update the opacity for flickering effect
    this.opacity =
      this.opacity <= 0.8 ? Math.random() * 0.8 : this.opacity - 0.5;

    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, 0.2, 0.2);
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.opacity -= 0.008;
  }
}

let fireworks = [];

function animate() {
  ctx.clearRect(
    0,
    0,
    canvas.width / window.devicePixelRatio,
    canvas.height / window.devicePixelRatio
  );

  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].draw();
  }

  requestAnimationFrame(animate);

  //Add text in the middle of screen
  let fontSize = 30;
  ctx.font = `bold ${fontSize}px Open Sans`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(
    ".",
    canvas.width / 2 / window.devicePixelRatio,
    canvas.height / 2 / window.devicePixelRatio
  );
}

animate();

setInterval(function () {
  let x = (Math.random() * canvas.width) / window.devicePixelRatio;
  let color = colors[Math.floor(Math.random() * colors.length)];
  fireworks.push(
    new Firework(x, canvas.height / window.devicePixelRatio, color)
  );
}, 1000);
