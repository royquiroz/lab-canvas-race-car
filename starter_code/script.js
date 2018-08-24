window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    function racetrack() {
      ctx.fillStyle = "#008900";
      ctx.fillRect(0, 0, 70, 750);
      ctx.fillStyle = "#808080";
      ctx.fillRect(70, 0, 10, 750);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(80, 0, 10, 750);
      ctx.fillStyle = "#808080";
      ctx.fillRect(90, 0, 220, 750);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(310, 0, 10, 750);
      ctx.fillStyle = "#808080";
      ctx.fillRect(320, 0, 220, 750);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(540, 0, 10, 750);
      ctx.fillStyle = "#808080";
      ctx.fillRect(550, 0, 10, 750);
      ctx.fillStyle = "#008900";
      ctx.fillRect(560, 0, 70, 750);
    }

    class Car {
      constructor() {
        this.x = 275;
        this.y = 600;
        this.width = 80;
        this.height = 100;
        this.image = new Image();
        this.image.src = "./images/car.png";
      }

      draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }

    class Obstacle {
      constructor() {
        this.x = 70;
        this.y = 0;
        this.width = 200;
        this.height = 30;
      }

      draw() {
        if (frames % 100) this.y += 10;
        ctx.fillStyle = "#940000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }

    var car = new Car();
    var obstacle = new Obstacle();

    var frames = 0;
    setInterval(function() {
      frames++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      racetrack();
      car.draw();
      generateEnemySize();
      drawObstacle();
    }, 1000 / 60);

    addEventListener("keydown", function(event) {
      if (event.keyCode === 37) {
        car.x -= 50;
      }
      if (event.keyCode === 39) {
        car.x += 50;
      }
    });

    var obstacles = [];
    function generateEnemySize() {
      console.log(frames);
      if (frames % 100 === 0 || frames % 70 === 0 || frames % 170 === 0) {
        let width = Math.floor(Math.random() * (350 - 200)) + 200;
        let x = Math.floor(Math.random() * (450 - 70)) + 70;
        let obstacle = new Obstacle();
        obstacle.x = x;
        obstacle.width = width;
        obstacles.push(obstacle);
      }
    }

    function drawObstacle() {
      obstacles.forEach(function(obstacle) {
        obstacle.draw();
      });
    }
  }
};
