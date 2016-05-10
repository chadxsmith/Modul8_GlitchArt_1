 $( document ).ready(function() {





     
 

function clicker(){

    $("#example1 .source").glitch(function(canvas){
        $("#example1 .target").html(canvas);
        effect: "fade"
        
    });

 }



function myTimer(){
    i++
    if(i === 5){
        $(".source").css('background-image','url(/images/play.png)');

 
    }

    else if(i === 7){
        // console.log("let's goooooo")
        counter = 0;
        var a = setInterval(function(){
      
            $("button").trigger("click")
            clicker()



        }, 1500); 


        picNumber = 12;

        setInterval(function () {
              
              // console.log(picNumber)

             $(".source").css('background-image','url(/images/giphy_' + picNumber + '.gif)')
              

             var counter = Math.random();
             var timesCounter = Math.random() * 1000
            
             $('.source').css("width", ""+ timesCounter + "px")
             $('.target').css("width", ""+ timesCounter + "px")
             $('.outer-container').css("width", ""+ timesCounter + "px")
             $('canvas').css("width", ""+ timesCounter + "px")
             $('canvas').css("height", ""+ timesCounter + "px")
             $('canvas').css("border-radius", ""+ timesCounter + "px")

              

             picNumber++

             if (picNumber === 83){
                picNumber = 12
             }else{

             }



        }, 2000);
    }

    else{
        
         
    }
}


var i = setInterval(function(){myTimer() }, 1000);




  
        


});