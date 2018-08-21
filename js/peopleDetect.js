let pageUrl_string = window.location.href;
let pageUrl = new URL(pageUrl_string);
let pagePeople = pageUrl.searchParams.get("p");
if (pagePeople == "kafuu") {
    document.title = "香風明謙 Edison Kafuu";
    $("#navName").text("香風明謙 Edison Kafuu");
    $("#titleName").html("香風明謙<br>Edison Kafuu");
} else if (pagePeople == "et") {
    document.title = "艾塔莉雅 edisonlee55";
    $("#navName").text("艾塔莉雅 edisonlee55");
    $("#titleName").html("艾塔莉雅<br>edisonlee55");
}