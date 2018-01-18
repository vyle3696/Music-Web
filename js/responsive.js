$(document).ready(function (e) {
    var navBar = {
        isOpenNav: false,
        width: "50px"
    }

    $("#left-column > div > h4").css("text-align", "left");
    $("#right-column > div").css({"margin-top": "10px" ,"margin-bottom": "10px"});
    $("#left-column > div").css({"margin-top": "10px" ,"margin-bottom": "20px"});
    $("#left-col-row6 > .uk-grid-small.uk-text-center.uk-grid > div").css("margin-bottom", "10px");
    
   // $(".uk-grid-margin").css("padding-left", "0px");
    setStyleElement();

    function setEqualRow(){
        for(let i = 1; i < 5; i++) {
            $("#right-col-row" + i).css("height", $("#left-col-row" + i).innerHeight());
        }
    }

     function setWidthNav(){
        if(navBar.isOpenNav) {
            $("#btn-close-open").css({"transform":"rotate(0deg)"});
            navBar.isOpenNav = false;
            navBar.width = "50px";

            $(".lp-vertical-nav").css("width", navBar.width);
        }else{
            $("#btn-close-open").css({"transform":"rotate(180deg)"});
            navBar.isOpenNav = true;
            navBar.width = "150px";
            $(".lp-vertical-nav").css("width", navBar.width);
        }
        //setStyleElement();
    }

    $(".lp-vertical-nav .nav-box").hover(
        function() {
            let curImg = $(this).find('img')[0];
            let src = curImg.src.replace("1", "3");
            curImg.src = src;
            $(this).css({
               " border-left": "2px solid #ff3399",
                "box-shadow":" 0 0 2px 0 rgba(76, 76, 76, 0.5)",
                "background-color": "rgba(221, 227, 230, 0.5)",
                "color": "#ff3399"
            })
        }, function() {
            let curImg = $(this).find('img')[0];
            let src = curImg.src.replace("3", "1");
            curImg.src = src;
            $(this).css({
               " border-left": "none",
                "box-shadow":" none",
                "background-color": "transparent",
                "color": "#383838"
            })
        }
    );

    $("#btn-close-open").click(function(){
        setWidthNav();
    })
    $(window).resize(()=>{
        setStyleElement();
    });

    function setStyleElement() {
        if($(window).innerWidth()< 1100){
            if($(window).innerWidth()< 420) {
                setSmallScreenStyle();
            }else{
                setMediumScreenStyle();
            }
        }
        else{
             setBigScreenStyle();
        }
        //setLeftNavPositon();
    }

    function setSmallScreenStyle(){
        $("#home-content").css({"width": "100%"});
        //$("#left-column").css({"width": "100%", "padding": "0px"});
        $("#left-column").css({"width": "100%", "padding": "0px"});
        $("#right-column > #right-col-row1").css("display", "inline-block");
        $("#right-column").css({"width": "100%", "display": "initial"});
        $("#right-column > div").css("width", "100%");
        //$("body").css("font-size", "14px !importan");
        //$("#right-singer-grid").css({"width": "540px", "height":"400px"});
        //$(".lp-vertical-nav").css("width", "5%");
        
    }

    function setMediumScreenStyle() {
        $("#home-content").css({"width": "100%"});
        //$("#left-column").css({"width": "100%", "padding": "0px"});
        $("#left-column").css({"width": "100%", "padding": "0px"});
         $("#right-column > div").css("width", "418px");
        $("#right-column > #right-col-row1").css("display", "none");
        $("#right-column").css({"width": "100%", "display": "initial"});

        //$("body").css("font-size", "14px !importan");
        //$("#right-singer-grid").css({"width": "540px", "height":"400px"});
        //$(".lp-vertical-nav").css("width", "5%");

    }

    function setBigScreenStyle(){
        
        $("#left-column").css({"width": "676px", "padding": "0px"});
        $("#right-column").css({"width": "418px", "display": "inline-block"});
        $("#right-column > div").css("width", "418px");
        $("#right-column > #right-col-row1").css("display", "inline-block");
         $("#home-content").css({"width":"max-content"});
        //$("body").css("font-size", "14px !importan");
        //$("#right-singer-grid").css({"width": "540px", "height":"400px"});
        //$(".lp-vertical-nav").css("width", "5%");
        setEqualRow();
       
       
    }
});