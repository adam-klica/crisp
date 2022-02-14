let scrollPosition = 0;

document.addEventListener("scroll", function (e) {
  scrollPosition = window.scrollY;
  if (scrollPosition > 262) {
    document.getElementById("menuButton").style.opacity = "0.4";
  }
  if (scrollPosition < 262) {
    document.getElementById("menuButton").style.opacity = "1";
  }
});

// drop down menu
function openDDMenu() {
  document.getElementById("drop1").style.display = "block";
}
function closeDDMenu() {
  document.getElementById("drop1").style.display = "none";
}

function openDDMenu2() {
  document.getElementById("drop2").style.display = "block";
}
function closeDDMenu2() {
  document.getElementById("drop2").style.display = "none";
}

// checkbox favorites
function favorite1() {
  if (
    document.getElementById("favorite1").getAttribute("src") ==
    "assets/favorite.png"
  ) {
    document.getElementById("favorite1").src = "assets/favoritechecked.png";
  } else document.getElementById("favorite1").src = "assets/favorite.png";
}
function favorite2() {
  if (
    document.getElementById("favorite2").getAttribute("src") ==
    "assets/favorite.png"
  ) {
    document.getElementById("favorite2").src = "assets/favoritechecked.png";
  } else document.getElementById("favorite2").src = "assets/favorite.png";
}
function favorite3() {
  if (
    document.getElementById("favorite3").getAttribute("src") ==
    "assets/favorite.png"
  ) {
    document.getElementById("favorite3").src = "assets/favoritechecked.png";
  } else document.getElementById("favorite3").src = "assets/favorite.png";
}
function favorite4() {
  if (
    document.getElementById("favorite4").getAttribute("src") ==
    "assets/favorite.png"
  ) {
    document.getElementById("favorite4").src = "assets/favoritechecked.png";
  } else document.getElementById("favorite4").src = "assets/favorite.png";
}

function openMenu() {
  document.getElementById("headerMenu").classList.toggle("open-nav");
  document.body.classList.toggle("lock-scroll");
  document.getElementById("menuButton").style.opacity = "1";
}

// items animations
function item1On() {
  document.getElementById("item1").style.transform = "rotate(10deg)";
  document.getElementById("item2container").style.opacity = "0.5";
  document.getElementById("item3container").style.opacity = "0.5";
  document.getElementById("item4container").style.opacity = "0.5";
}
function item1Off() {
  document.getElementById("item1").style.transform = "rotate(0)";
  document.getElementById("item2container").style.opacity = "1";
  document.getElementById("item3container").style.opacity = "1";
  document.getElementById("item4container").style.opacity = "1";
  document.getElementById("item1shop").style.fontSize = "1.1rem";
}

function item11On() {
  document.getElementById("item11").style.transform = "rotate(10deg)";
  document.getElementById("item22container").style.opacity = "0.5";
  document.getElementById("item33container").style.opacity = "0.5";
  document.getElementById("item44container").style.opacity = "0.5";
}
function item11Off() {
  document.getElementById("item11").style.transform = "rotate(0)";
  document.getElementById("item22container").style.opacity = "1";
  document.getElementById("item33container").style.opacity = "1";
  document.getElementById("item44container").style.opacity = "1";
  document.getElementById("item11shop").style.fontSize = "1.1rem";
}

function item2On() {
  document.getElementById("item2").style.transform = "rotate(10deg)";
  document.getElementById("item1container").style.opacity = "0.5";
  document.getElementById("item3container").style.opacity = "0.5";
  document.getElementById("item4container").style.opacity = "0.5";
}
function item2Off() {
  document.getElementById("item2").style.transform = "rotate(0)";
  document.getElementById("item1container").style.opacity = "1";
  document.getElementById("item3container").style.opacity = "1";
  document.getElementById("item4container").style.opacity = "1";
}

function item22On() {
  document.getElementById("item22").style.transform = "rotate(10deg)";
  document.getElementById("item11container").style.opacity = "0.5";
  document.getElementById("item33container").style.opacity = "0.5";
  document.getElementById("item44container").style.opacity = "0.5";
}
function item22Off() {
  document.getElementById("item22").style.transform = "rotate(0)";
  document.getElementById("item11container").style.opacity = "1";
  document.getElementById("item33container").style.opacity = "1";
  document.getElementById("item44container").style.opacity = "1";
}

function item3On() {
  document.getElementById("item3").style.transform = "rotate(10deg)";
  document.getElementById("item1container").style.opacity = "0.5";
  document.getElementById("item2container").style.opacity = "0.5";
  document.getElementById("item4container").style.opacity = "0.5";
}
function item3Off() {
  document.getElementById("item3").style.transform = "rotate(0)";
  document.getElementById("item1container").style.opacity = "1";
  document.getElementById("item2container").style.opacity = "1";
  document.getElementById("item4container").style.opacity = "1";
}

function item33On() {
  document.getElementById("item33").style.transform = "rotate(10deg)";
  document.getElementById("item11container").style.opacity = "0.5";
  document.getElementById("item22container").style.opacity = "0.5";
  document.getElementById("item44container").style.opacity = "0.5";
}
function item33Off() {
  document.getElementById("item33").style.transform = "rotate(0)";
  document.getElementById("item11container").style.opacity = "1";
  document.getElementById("item22container").style.opacity = "1";
  document.getElementById("item44container").style.opacity = "1";
}

function item4On() {
  document.getElementById("item4").style.transform = "rotate(10deg)";
  document.getElementById("item1container").style.opacity = "0.5";
  document.getElementById("item3container").style.opacity = "0.5";
  document.getElementById("item2container").style.opacity = "0.5";
}
function item4Off() {
  document.getElementById("item4").style.transform = "rotate(0)";
  document.getElementById("item1container").style.opacity = "1";
  document.getElementById("item3container").style.opacity = "1";
  document.getElementById("item2container").style.opacity = "1";
}

function item44On() {
  document.getElementById("item44").style.transform = "rotate(10deg)";
  document.getElementById("item11container").style.opacity = "0.5";
  document.getElementById("item33container").style.opacity = "0.5";
  document.getElementById("item22container").style.opacity = "0.5";
}
function item44Off() {
  document.getElementById("item44").style.transform = "rotate(0)";
  document.getElementById("item11container").style.opacity = "1";
  document.getElementById("item33container").style.opacity = "1";
  document.getElementById("item22container").style.opacity = "1";
}

// category animations
function category1on() {
  document.getElementById("category1text").classList.add("text2active");
  document.getElementById("category1heading").classList.add("btn-shine");
}
function category1off() {
  document.getElementById("category1text").classList.remove("text2active");
  document.getElementById("category1heading").classList.remove("btn-shine");
}

function category2on() {
  document.getElementById("category2text").classList.add("text2active");
}
function category2off() {
  document.getElementById("category2text").classList.remove("text2active");
}

function category3on() {
  document.getElementById("category3text").classList.add("text2active");
}
function category3off() {
  document.getElementById("category3text").classList.remove("text2active");
}

function category4on() {
  document.getElementById("category4text").classList.add("text2active");
}
function category4off() {
  document.getElementById("category4text").classList.remove("text2active");
}

function category5on() {
  document.getElementById("category5text").classList.add("text2active");
}
function category5off() {
  document.getElementById("category5text").classList.remove("text2active");
}

function category6on() {
  document.getElementById("category6text").classList.add("text2active");
}
function category6off() {
  document.getElementById("category6text").classList.remove("text2active");
}
