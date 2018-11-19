
    if(window.outerWidth > 768){
    $('.lyric').slimScroll({
        height: '350px'
    });
    }
    else{
        $('.lyric').slimScroll({
        height: '200px'
    });
    }
    window.addEventListener("resize", function (event) {
            if(window.outerWidth > 768){
    $('.lyric').slimScroll({
        height: '350px'
    });
    }
    else{
        $('.lyric').slimScroll({
        height: '200px'
    });
    }
    })
