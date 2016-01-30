$(document).ready(function(){
    /*ACTIVAR DROP*/
    $(".btn_menu").click(function(){
        if($(".menu").css("height")=='0px')
            {
                $(".menu").css({"height":'300px'});
            }
        else{
                $(".menu").css({"height":'0px'});
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
        $("#seccion_1").fadeIn("fast");
        $(".row_fluida").animate({"left":'0%'});
    });
     $("#btn_nosotros").click(function(){
        $(".row_fluida").animate({"left":'-100%'}, 
            function(){
                $("#seccion_1").css({"display": 'none'});
                $(".row_fluida").css({"left":'0%'});
        });
    });
    $("#btn_servicios").click(function(){
        $("#seccion_1").fadeOut("fast");
        $(".row_fluida").animate({"left":'-100%'});
    });
    $("#btn_portafolio").click(function(){
        $("#seccion_1").fadeOut("fast");
        $(".row_fluida").animate({"left":'-200%'});
    });
    $("#btn_eventos").click(function(){
        $("#seccion_1").fadeOut("fast");
        $(".row_fluida").animate({"left":'-300%'});
    });
    $("#btn_contacto").click(function(){
        $("#seccion_1").fadeOut("fast");
        $(".row_fluida").animate({"left":'-400%'});
    });
});


