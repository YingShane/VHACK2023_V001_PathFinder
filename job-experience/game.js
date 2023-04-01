var image = document.getElementById("startimg");
// document.body.appendChild(image);
var video1 = document.getElementById("video1");
video1.style.display = "none";

var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var learn = 50;
var like = 50;
// Set flag variable to false initially
var hasStarted = false;
var opShow = false;

function toggleOps() {
  if (!opShow) {
    op1.style.display = "none";
    op2.style.display = "none";
  } else {
    op1.style.display = "block";
    op2.style.display = "block";
  }
}
toggleOps();
image.addEventListener("click", () => {
  image.style.display = "none";
  video1.style.display = "block";
  video1.play();
});

var video2 = document.getElementById("video2");
video2.style.display = "none";
video1.addEventListener("ended", () => {
  video1.style.display = "none";
  video2.style.display = "block";
  video2.play();
});

var video3 = document.getElementById("video3");
video3.style.display = "none";
var video4 = document.getElementById("video4");
video4.style.display = "none";
video2.addEventListener("timeupdate", startfunction1);
var clickFunctionRef1 = clickfunction1;
document.addEventListener("click", clickFunctionRef1);

function startfunction1() {
  if (this.currentTime >= 6.2) {
    opShow = true;
    toggleOps();
    // Set flag variable to true
    hasStarted = true;
  }
}

function clickfunction1(e) {
  // Check the value of the flag variable
  if (hasStarted) {
    if (e.pageX < window.innerWidth / 2) {
      opShow = false;
      toggleOps();
      document.removeEventListener("click", clickFunctionRef1);
      video2.style.display = "none";
      video2.pause();
      video3.style.display = "block";
      video3.play();
      learn = learn + 5;
      like = like + 5;
      hasStarted = false;
    } else {
      opShow = false;
      toggleOps();
      document.removeEventListener("click", clickFunctionRef1);
      video2.style.display = "none";
      video2.pause();
      video4.style.display = "block";
      video4.play();
      hasStarted = false;
      learn = learn + 15;
      like = like - 5;
    }
  }
}
video3.addEventListener("play", playvid3);
video3.addEventListener("timeupdate", startfunction3);
function playvid3() {
  opShow = false;
  toggleOps();
}
function startfunction3() {
  if (this.currentTime >= 1) {
    video3.removeEventListener("play", playvid3);
  }
}
video4.addEventListener("play", playvid4);
video4.addEventListener("timeupdate", startfunction4);
function playvid4() {
  opShow = false;
  toggleOps();
}

function startfunction4() {
  if (this.currentTime >= 1) {
    video3.removeEventListener("play", playvid3);
  }
}

var video5 = document.getElementById("video5");
video5.style.display = "none";

function showVideo5() {
  video5.style.display = "block";
  video5.play();
  opShow = false;
  toggleOps();
}

video3.addEventListener("ended", () => {
  video3.style.display = "none";
  video5.style.display = "block";
  video5.play();
  showVideo5();
});
video4.addEventListener("ended", () => {
  video4.style.display = "none";
  video5.style.display = "block";
  video5.play();
  showVideo5();
});

////////////////////////////////////////////////////////////////////////

var video6 = document.getElementById("video6");
video6.style.display = "none";
var video7 = document.getElementById("video7");
video7.style.display = "none";

video5.addEventListener("timeupdate", startfunction5);
var clickFunctionRef2 = clickfunction2;
document.addEventListener("click", clickFunctionRef2);

function startfunction5() {
  if (this.currentTime >= 8.1) {
    opShow = true;
    toggleOps();
    // Set flag variable to true
    hasStarted = true;
  }
}

function clickfunction2(e) {
  // Check the value of the flag variable
  if (hasStarted) {
    if (e.pageX > window.innerWidth / 2) {
      opShow = false;
      toggleOps();
      document.removeEventListener("click", clickFunctionRef2);

      video5.style.display = "none";
      video5.pause();
      video6.style.display = "block";
      video6.play();
      hasStarted = false;
    } else {
      opShow = false;
      toggleOps();
      document.removeEventListener("click", clickFunctionRef2);
      video5.style.display = "none";
      video5.pause();
      video7.style.display = "block";
      video7.play();
      hasStarted = false;
    }
  }
}

video6.addEventListener("play", playvid6);
video6.addEventListener("timeupdate", startfunction6);
function playvid6() {
  opShow = false;
  toggleOps();
}
function startfunction6() {
  if (this.currentTime >= 1) {
    video6.removeEventListener("play", playvid6);
  }
}
video7.addEventListener("play", playvid7);
video7.addEventListener("timeupdate", startfunction7);
function playvid7() {
  opShow = false;
  toggleOps();
}
function startfunction7() {
  if (this.currentTime >= 1) {
    video7.removeEventListener("play", playvid7);
  }
}

var video8 = document.getElementById("video8");
video8.style.display = "none";
var video9 = document.getElementById("video9");
video9.style.display = "none";

function showVideo8() {
  video8.style.display = "block";
  video8.play();
  opShow = false;
  toggleOps();
}

function showVideo9() {
  video9.style.display = "block";
  video9.play();
  opShow = false;
  toggleOps();
}

video6.addEventListener("ended", () => {
  video6.style.display = "none";
  video8.style.display = "block";
  video8.play();
  showVideo8();
});
video7.addEventListener("ended", () => {
  video7.style.display = "none";
  video9.style.display = "block";
  video9.play();
  showVideo9();
});

var video10 = document.getElementById("video10");
video10.style.display = "none";
var video11 = document.getElementById("video11");
video11.style.display = "none";
var video12 = document.getElementById("video12");
video12.style.display = "none";
var video13 = document.getElementById("video13");
video13.style.display = "none";

video8.addEventListener("timeupdate", startfunction8);
var clickFunctionRef3 = clickfunction3;
document.addEventListener("click", clickFunctionRef3);

video9.addEventListener("timeupdate", startfunction9);
var clickFunctionRef4 = clickfunction4;
document.addEventListener("click", clickFunctionRef4);
var teachChoose = true; //true if chose slides
function startfunction8() {
  if (this.currentTime >= 12.4) {
    opShow = true;
    toggleOps();
    // Set flag variable to true
    hasStarted = true;
    teachChoose = true;
  }
}
function startfunction9() {
  if (this.currentTime >= 12.4) {
    opShow = true;
    toggleOps();
    // Set flag variable to true
    hasStarted = true;
    teachChoose = false;
  }
}

function clickfunction3(e) {
  // Check the value of the flag variable
  if (hasStarted) {
    if (teachChoose) {
      if (e.pageX > window.innerWidth / 2) {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef3);

        video8.style.display = "none";
        video8.pause();
        video10.style.display = "block";
        video10.play();
        hasStarted = false;
        learn = learn + 15;
        like = like + 5;
      } else {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef3);
        video8.style.display = "none";
        video8.pause();
        video13.style.display = "block";
        video13.play();
        hasStarted = false;
        like = like + 25;
        learn = learn - 5;
      }
    }
  }
}

function clickfunction4(e) {
  // Check the value of the flag variable
  if (hasStarted) {
    if (!teachChoose) {
      if (e.pageX > window.innerWidth / 2) {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef4);

        video9.style.display = "none";
        video9.pause();
        video11.style.display = "block";
        video11.play();
        hasStarted = false;
        learn = learn + 5;
        like = like - 15;
      } else {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef4);
        video9.style.display = "none";
        video9.pause();
        video12.style.display = "block";
        video12.play();
        hasStarted = false;
        learn = learn + 25;
        like = like - 5;
      }
    }
  }
}

video10.addEventListener("play", playvid10);
video10.addEventListener("timeupdate", startfunction10);
function playvid10() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction10() {
  if (this.currentTime >= 1) {
    video10.removeEventListener("play", playvid10);
  }
}
video11.addEventListener("play", playvid11);
video11.addEventListener("timeupdate", startfunction11);
function playvid11() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction11() {
  if (this.currentTime >= 1) {
    video11.removeEventListener("play", playvid11);
  }
}

video12.addEventListener("play", playvid12);
video12.addEventListener("timeupdate", startfunction12);
function playvid12() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction12() {
  if (this.currentTime >= 1) {
    video12.removeEventListener("play", playvid12);
  }
}
video13.addEventListener("play", playvid13);
video13.addEventListener("timeupdate", startfunction13);
function playvid13() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction13() {
  if (this.currentTime >= 1) {
    video13.removeEventListener("play", playvid13);
  }
}

video10.addEventListener("ended", () => {
  video10.style.display = "none";
  showVideoAfter();
});
video11.addEventListener("ended", () => {
  video11.style.display = "none";
  showVideoAfter();
});
video12.addEventListener("ended", () => {
  video12.style.display = "none";
  showVideoAfter();
});
video13.addEventListener("ended", () => {
  video13.style.display = "none";
  showVideoAfter();
});

var video14 = document.getElementById("video14");
var video15 = document.getElementById("video15");
var video16 = document.getElementById("video16");
var video17 = document.getElementById("video17");
var video18 = document.getElementById("video18");
var video19 = document.getElementById("video19");
video14.style.display = "none";
video15.style.display = "none";
video16.style.display = "none";
video17.style.display = "none";
video18.style.display = "none";
video19.style.display = "none";
var shownafter = true;
function showVideoAfter() {
  if (shownafter) {
    if (learn > 60) {
      video14.style.display = "block";
      video14.play();
      opShow = false;
      toggleOps();
      shownafter = false;
    } else {
      video17.style.display = "block";
      video17.play();
      opShow = false;
      toggleOps();
      shownafter = false;
    }
  }
}

video14.addEventListener("timeupdate", startfunction14);
var clickFunctionRef5 = clickfunction5;
document.addEventListener("click", clickFunctionRef5);

video17.addEventListener("timeupdate", startfunction17);
var clickFunctionRef6 = clickfunction6;
document.addEventListener("click", clickFunctionRef6);

function startfunction14() {
  if (this.currentTime >= 6.1) {
    opShow = true;
    toggleOps();
    // Set flag variable to true
    hasStarted = true;
  }
}

function startfunction17() {
  if (this.currentTime >= 10.8) {
    opShow = true;
    toggleOps();
    // Set flag variable to true
    hasStarted = true;
  }
}

function clickfunction5(e) {
  // Check the value of the flag variable
  if (hasStarted) {
    if (learn > 60) {
      if (e.pageX > window.innerWidth / 2) {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef5);
        video14.style.display = "none";
        video14.pause();
        video15.style.display = "block";
        video15.play();
        hasStarted = false;
        learn = learn + 5;
        like = like + 15;
      } else {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef5);
        video14.style.display = "none";
        video14.pause();
        video16.style.display = "block";
        video16.play();
        hasStarted = false;
        learn = learn + 15;
        like = like + 5;
      }
    }
  }
}

function clickfunction6(e) {
  // Check the value of the flag variable
  if (hasStarted) {
    if (learn <= 60) {
      if (e.pageX < window.innerWidth / 2) {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef6);
        video17.style.display = "none";
        video17.pause();
        video18.style.display = "block";
        video18.play();
        hasStarted = false;
        like = like - 10;
        learn = learn + 10;
      } else {
        opShow = false;
        toggleOps();
        document.removeEventListener("click", clickFunctionRef6);
        video17.style.display = "none";
        video17.pause();
        video19.style.display = "block";
        video19.play();
        hasStarted = false;
        learn = learn + 5;
        like = like + 15;
      }
    }
  }
}

video15.addEventListener("play", playvid15);
video15.addEventListener("timeupdate", startfunction15);
function playvid15() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction15() {
  if (this.currentTime >= 1) {
    video15.removeEventListener("play", playvid15);
  }
}
video16.addEventListener("play", playvid16);
video16.addEventListener("timeupdate", startfunction16);
function playvid16() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction16() {
  if (this.currentTime >= 1) {
    video16.removeEventListener("play", playvid16);
  }
}

video18.addEventListener("play", playvid18);
video18.addEventListener("timeupdate", startfunction18);
function playvid18() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction18() {
  if (this.currentTime >= 1) {
    video18.removeEventListener("play", playvid18);
  }
}
video19.addEventListener("play", playvid19);
video19.addEventListener("timeupdate", startfunction19);
function playvid19() {
  hasStarted = false;
  opShow = false;
  toggleOps();
}
function startfunction19() {
  if (this.currentTime >= 1) {
    video19.removeEventListener("play", playvid19);
  }
}

var video20 = document.getElementById("video20");
var video21 = document.getElementById("video21");
video20.style.display = "none";
video21.style.display = "none";
var video22 = document.getElementById("video22");
var video23 = document.getElementById("video23");
var video24 = document.getElementById("video24");
var video25 = document.getElementById("video25");
video22.style.display = "none";
video23.style.display = "none";
video24.style.display = "none";
video25.style.display = "none";
var final = false;
function finalVid() {
  if (learn >= 70 && like >= 70) {
    video22.style.display = "block";
    video22.play();
  } else if (learn < 70 && like >= 70) {
    video23.style.display = "block";
    video23.play();
  } else if (learn >= 70 && like < 70) {
    video24.style.display = "block";
    video24.play();
  } else {
    video25.style.display = "block";
    video25.play();
  }
}
video15.addEventListener("ended", () => {
  video15.style.display = "none";
  final = true;
  finalVid();
});
video16.addEventListener("ended", () => {
  video16.style.display = "none";
  final = true;
  finalVid();
});
video18.addEventListener("ended", () => {
  video18.style.display = "none";
  video20.style.display = "block";
  video20.play();
});
video19.addEventListener("ended", () => {
  video19.style.display = "none";
  video21.style.display = "block";
  video21.play();
});
video20.addEventListener("ended", () => {
  video20.style.display = "none";
  final = true;
  finalVid();
});
video21.addEventListener("ended", () => {
  video21.style.display = "none";
  final = true;
  finalVid();
});
