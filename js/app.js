$(document).ready(function(){
    $(".sidebar__members").click(function(){
        $(".sidebar__members").addClass("selected")
        $(".sidebar__members").css({"border-left":"0","padding-left": "15px"})
        $(this).closest(".selected").css({"border-left": "5px solid #6200EA", "padding-left": "10px"})
    });
    });


      