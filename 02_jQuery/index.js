// HERE IT EXECUTE JQUERY THINGS
// If we put the script on the head sections it's necesary write $(document).ready....

$(document).ready(function(){

    var button = $("button");

    button.addClass("big-title");
    button.click(function(){
        $("h1").css("color","purple");
        $("h1").html("asd") ;
    });
    
    $(document).keypress(function(event){
        $("h1").text(event.key);
        
    });

});


