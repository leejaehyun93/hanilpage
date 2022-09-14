// main.js

$(function(){
    // GNB 호버
    $("#GNB .depth-1 li").hover(
        function(){
            $(this).children().addClass('on');
        },
        function(){
            $(this).children().removeClass('on');
        }
    )

    // 사이트 맵
    // 사이트 맵 켜기
    $("#site-map-btn").click(function(){
        $('.site-map').addClass('on');
    });
    // 사이트 맵 끄기
    $(".site-map-close-btn").click(function(){
        $('.site-map').removeClass('on');
    });

    // 모바일 토글 버튼
    $('#mobile-toggle-btn').click(function(){
        $('#GNB').toggleClass('on');
    })

    $('#GNB .m-gnb-up-btn').click(function(){

        $(this).next().toggleClass('on');
        
        $('.m-gnb-up-btn > img')
        .toggleClass('on');
    })

   
});