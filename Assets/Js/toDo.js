// cehck off specific Todos by Clicking
$("ul").on( "click", "li", function(){
    //to Undo the line-through and color 
    // grey color:"rgb(128,128,128)"
    //if color is grey, turn it to black when clicked
    //     if($(this).css("color") === "rgb(128, 128, 128)" ) {
    //         $(this).css({
    //             color: "black",
    //             textDecoration: "none"
    //         });
    // }else {
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     });
    // }
    
    $(this).toggleClass("completed");
   
});

//clicking on X ( delete finction) to do
$("ul").on("click", "span", function(event){
    //removing the li that was intended to remove after clicking on delte
    //fadeout will wait for 500 ms and remove the parent li.
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // to effect only the X(delete button)
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //when the enter is hit
    if( event.which === 13) {
        var item = $(this).val();
        $(this).val("");

        $("ul").append( "<li><span><i class='fa fa-trash'></i></span>" + item + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})