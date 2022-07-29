const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 600);
  }
}

document.addEventListener("keydown", function (event) {
  jump();
});

let isAlive = setInterval(function () {
  //dino Y position
  let dinoYPosition = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );

  //cactux X position
  let cactusXPosition = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  //detect collision
  if (cactusXPosition < 50 && cactusXPosition > 0 && dinoYPosition >= 140) {
    //colision
    alert("Game Over !");
  }
}, 10);
