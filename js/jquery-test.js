console.log("jquery=test.jsを読み込みました");

// セレクタ
let test_p_1 = $("#test-p-1").text();
console.log(test_p_1);

let test_p_2 = $(".test-p-2").text();
console.log(test_p_2);

let p_123 = $("p").text();
console.log(p_123);




$("#test-p-1").hide();
// メソッド
// toggle
function toggle(){
    // $("#test-p-1").hide();
    // $("#test-p-1").show();
    $("#test-p-1").toggle();
}

function slide(){
    // $("#test-p-1").slideDown(); //スライドダウン
    // $("#test-p-1").slideUp(); //スライドアップ

    $("#test-p-1").slideToggle(); //アップ＆ダウン
}

function fade(){
    // $("#test-p-1").fadeIn(); //フェードイン
    // $("#test-p-1").fadeOut(); //フェードアウト

    $("#test-p-1").fadeToggle(); //イン＆アウト
}

function color(){
    $("#test-p-1").css("color", "red"); //テキストの色変更
    $("#test-p-1").css("fontSize", "64px"); //テキストの大きさ変更
}

function customAnimate(){
    $("#test-p-1").animate({
        "fontSize": "64px",
    }).animate({
        "fontSize": "16px",
    });
}



//イベントハンドラ
// focusイベントを取得する
$("#input-1").on("focus", function(){
    console.log("インプットタグがフォーカスされました");
});

// clickイベント
$("h3").on("click", function(){
    console.log("h3タグがフォーカスされました");
    $(this).next().slideToggle();
})
