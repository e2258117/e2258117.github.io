console.log("jquery.jsを読み込みました");

let gnav = $(".gnav").text();
console.log(gnav);

let photo = $(".photo").attr("src");
console.log(photo);


function slide() {
    $(".gnav").slideToggle();
}



let isExpanded = true; // 最初は縮小状態
function color() {
    if (isExpanded) {
        // 縮小
        $(".photo").css({
            width: "120px",
            height: "auto"
        });
        isExpanded = false;
    } else {
        // 拡大
        $(".photo").css({
            width: "280px",
            height: "auto"
        });
        isExpanded = true;
    }
}

