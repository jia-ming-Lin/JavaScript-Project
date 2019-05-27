
$("li").click(function(){
   $(this).toggleClass("completed")
});

$("span").click(function(event){
    $(this).parent().fadeOut(5000, function(){
        $(this).remove();
    });
    event.stopPropagation();
   
 });
 
 $("input[type='text']").keypress(function(event){
     if(event.which ===13){
        var todoText = $(this).val();
        $("ul").append("<li><span>X</span>" + todoText +"</li>");
     }
 
    });
