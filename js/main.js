function initSakanaWidget() {
  new SakanaWidget({ controls: false }).setState({ i: 0.005 }).mount('#sakana-widget');
}

var copyrightYear = new Date().getFullYear();
$("#copyrightText").text("\u00A9" + copyrightYear + " edisonlee55");

var pageUrl_string = window.location.href;
var pageUrl = new URL(pageUrl_string);
var pagePeople = pageUrl.searchParams.get("p");
if (pagePeople == "kafuu") {
  document.title = "香風明謙 Kafuu Edison";
  $("#navName").text("香風明謙 Kafuu Edison");
  $("#titleName").html("香風明謙<br>Kafuu Edison");
} else if (pagePeople == "gabu") {
  document.title = "小加百 Gabu Meow";
  $("#navName").text("小加百 Gabu Meow");
  $("#titleName").html("小加百<br>Gabu Meow");
}

/*
anime.timeline({loop: false})
  .add({
    targets: '#titleName',
    translateY: [-10, 0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 500
  })
  .add({
    targets: '#short-description',
    //translateY: [-10, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500
  })
  .add({
    targets: '#long-description',
    //translateY: [-10, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500
  })
  .add({
    targets: '#social-icon',
    //translateY: [-10, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500
  })
  .add({
    targets: '#mainNav',
    //translateY: [-10, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500
  });
*/
