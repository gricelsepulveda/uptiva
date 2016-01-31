$(document).ready(function(){
    /*ACTIVAR DROP*/
    $(".btn_menu").click(function(){
        if($(".menu").css("height")=='0px')
            {
                $(".menu").css({"height":'300px'});
                $(".menu").css({"z-index":'3'});
                $(".overlay").css({"z-index":'1'});
                $(".overlay_social").css({"z-index":'1'});
            }
        else{
                $(".menu").css({"height":'0px'});
                $(".overlay").css({"z-index":'2'});
                $(".overlay_social").css({"z-index":'2'});
            }
    });
/*BANNER 1*/
    var status = 2;

    setInterval(function()
    {
        Slider(status);
        if(status == 3) status = 1;
        else status+= 1;
    }, 5000);

    function Slider(status)
    {
        if(status==1)
        {
            $("#slide_3").fadeOut("fast");
            $("#slide_2").fadeOut("fast");
            $("#slide_1").fadeIn("fast");
        }

        if(status==2)
        {
            $("#slide_1").fadeOut("fast");
            $("#slide_3").fadeOut("fast");
            $("#slide_2").fadeIn("fast");
        }

        if(status==3)
        {
            $("#slide_2").fadeOut("fast");
            $("#slide_1").fadeOut("fast");
            $("#slide_3").fadeIn("fast");
        }
    }
/*NAVEGAR SECCIONES*/
     $("#btn_inicio").click(function(){
        $(".row_fluida").animate({"left":'0%'});
        $(".overlay").fadeIn("slow");
        $(".overlay_social").fadeIn("slow");
        $("#seccion_1").css({"marginRight":'15px'});
    });
     $("#btn_nosotros").click(function(){
        $(".row_fluida").animate({"left":'-100%'});
        $(".overlay").fadeOut("fast");
        $(".overlay_social").fadeOut("fast");
        $("#seccion_1").css({"marginRight":'0px'});
    });
    $("#btn_servicios").click(function(){
        $(".row_fluida").animate({"left":'-200%'});
        $(".overlay").fadeOut("fast");
        $(".overlay_social").fadeOut("fast");
        $("#seccion_1").css({"marginRight":'0px'});
    });
    $("#btn_portafolio").click(function(){
        $(".row_fluida").animate({"left":'-300%'});
        $(".overlay").fadeOut("fast");
        $(".overlay_social").fadeOut("fast");
        $("#seccion_1").css({"marginRight":'0px'});
    });
    $("#btn_eventos").click(function(){
        $(".row_fluida").animate({"left":'-400%'});
        $(".overlay").fadeOut("fast");
        $(".overlay_social").fadeOut("fast");
        $("#seccion_1").css({"marginRight":'0px'});
    });
    $("#btn_contacto").click(function(){
        $(".row_fluida").animate({"left":'-500%'});
        $(".overlay").fadeOut("fast");
        $(".overlay_social").fadeOut("fast");
        $("#seccion_1").css({"marginRight":'0px'});
    });
//ANIMACIONES BOTONES
    //FACEBOOK
    $("#facebook").hover(function(){
        $("#facebook").css({"backgroundColor":'#3b5998'});
        $("#facebook > i").animate
            ({
            "backgroundColor":'#3b5998',
            "marginTop": '-30px',
            "marginBottom": '0px',
            });
    });
    $("#facebook").mouseleave(function(){
        $("#facebook").css({"backgroundColor":'#545454'});
        $("#facebook > i").animate
            ({
                "marginTop": '7px',
                "marginBottom": '20px',
            });
    });
    //TWITTER
    $("#twitter").hover(function(){
        $("#twitter").css({"backgroundColor":'#55acee'});
        $("#twitter > i").animate
            ({
            "backgroundColor":'#3b5998',
            "marginTop": '-30px',
            "marginBottom": '0px',
            });
    });
    $("#twitter").mouseleave(function(){
        $("#twitter").css({"backgroundColor":'#545454'});
        $("#twitter > i").animate
            ({
                "marginTop": '7px',
                "marginBottom": '20px',
            });
    });
    //INSTAGRAM
    $("#instagram").hover(function(){
        $("#instagram").css({"backgroundColor":'#3f729b'});
        $("#instagram > i").animate
            ({
            "backgroundColor":'#3b5998',
            "marginTop": '-30px',
            "marginBottom": '0px',
            });
    });
    $("#instagram").mouseleave(function(){
        $("#instagram").css({"backgroundColor":'#545454'});
        $("#instagram > i").animate
            ({
                "marginTop": '7px',
                "marginBottom": '20px',
            });
    });
    //LINKEDIN
    $("#linkedin").hover(function(){
        $("#linkedin").css({"backgroundColor":'#0077b5'});
        $("#linkedin > i").animate
            ({
            "backgroundColor":'#3b5998',
            "marginTop": '-30px',
            "marginBottom": '0px',
            });
    });
    $("#linkedin").mouseleave(function(){
        $("#linkedin").css({"backgroundColor":'#545454'});
        $("#linkedin > i").animate
            ({
                "marginTop": '7px',
                "marginBottom": '20px',
            });
    });
});


