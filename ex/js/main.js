$("#login").on("click", function(){
    $("#layer").css("display", "block");
    $("#container").css("opacity", "0.5");
    $("#login-box").css("display", "block");
});

$("#layer").on("click", function(){
    layerOut();
});
/*글쓰기 버튼 클릭*/


$("#loginBtn").on("click", function(){
    layerOut();
    location.href="index2.html";
    return false;
});

/* 회원가입 ajax */
$("#joinBtn").on("click", function(){
    layerOut();
});

/*nav에 버튼 클릭 했을경우 (portfolio..등등)*/

$("#joinBtn").on("click", function(){
    $("#layer").css("display", "block");
    $("#container").css("opacity", "0.5");
    $(".join-box").css("display", "block");
});

$("#submit_join").on("click", function(e){
    $(".join-box").css("display", "none");
    $("#layer").css("display", "block");
    $("#container").css("opacity", "0.5");
    $(".send-mail").css("display", "block");
    e.preventDefault;
});


/* 공통부분 */
function layerOut(){
    $(".pw-change-box").hide();
    $(".message-contents").hide();
    $("#layer").css("display", "none");
    $("#container").css("opacity", "1");
    $("#login-box").css("display", "none");
    $(".join-box").css("display", "none");
    $(".send-mail").css("display", "none");
}

$("#logout").on("click", function(){
    location.href = 'index.html';
});


$(".arc-box-img").on("click" , function(){
    location.href = "detail.html";
});

/*현섭 작업중*/
var html = "";
function rea() {
    html += '<a href ="#">java.jpg</a>';
    $("#template").append(html);
}



$("#detail-list").on("click" , function(){
    location.href = "index.html";
});

$("#writebtn").on("click" , function(){
    location.href = "write.html";
});



$("#leftMenu").on("click" , function(e){
    $("#left-copy").css("display","block").css("z-index","5005").css("width","200px").css("height","auto").css("padding-bottom", "15px");
    e.stopPropagation();
});
$("#right:not(#leftMenu1)").on("click", function(){
            $("#left-copy").hide(300);
});

$(window).on("resize", function(){
    var width = $(window).width();
    console.log(width);
    if(width < 768){
        $("#left-copy").hide();
        $("#right:not(#leftMenu1)").on("click", function(){
            console.log($(this));
            console.log("띠로리리리리");
            $("#left-copy").hide(300);
        });
    }
});

/*

var html = ''<a href ="#">java.jpg</a>';
function onLoad(){
    
    document.getElementById("template").innerHTML = html;
}
*/






