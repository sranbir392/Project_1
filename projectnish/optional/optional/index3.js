

    //   const startit = () => {
    //     setTimeout(function () {
    //       console.log("start");
    //       confetti.start();
    //     }, 1000);
    //   };

    //   const stopit = () => {
    //     setTimeout(function () {
    //       console.log("stop");
    //       confetti.stop();
    //     }, 6000);
    //   };

    //   startit();
    //   stopit();
    var confettiElement = document.getElementById('my-canvas');
    var confettiSettings = { target: confettiElement };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();