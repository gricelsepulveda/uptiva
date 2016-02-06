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
    /*ACTIVAR LINK*/
    $("nav.menu > ul > li").click(function(){
        $("nav.menu > ul > li").removeClass("activo");
        $(this).addClass("activo");
    });
    /*GALERIA*/
});