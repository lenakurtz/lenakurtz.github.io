function showMoney(){
confetti({
    spread: 360,
    ticks: 200,
    gravity: 1,
    decay: 0.94,
    startVelocity: 30,
    particleCount: 100,
    scalar: 3,
    shapes: ["image"],
    shapeOptions: {
      image: [{
          src: "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f4b8.png",
          width: 32,
          height: 32,
        },
        
      ],
    },
  });

}