var result=0;
var wins=0;
var loss=0;

function reset(){
    $(".ranNum").empty();
    var random = Math.floor(Math.random()*120)+19;
    $(".ranNum").html(' Random Number:' + random);
    // $(".jewel").empty();
    // result.value('');
    // var random = (Math.floor(Math.random()*120)+19);
    // $(".ranNum").html(' Random Number:' + random);
  }







$(document).ready(function(){
var random = Math.floor(Math.random()*120)+19;
$(".ranNum").html(' Random Number:' + random);

console.log(random)


//IMAGES

var images = [
    "assets/images/blue crystal.jpg",
    "assets/images/green crystal.jpg",
    "assets/images/red crystal.jpg",
    "assets/images/yellow crystal.jpg"
]




    for( var i =0; i<4;i++) //loop 4 times
    {
        var crystal = $("<div>"); //created div 
        crystal.attr("class", 'jewel'); //created a class of 'jewel' in the newly created div
        var ranNumCrystal = Math.floor(Math.random()*13) // generate a random number between 0-12
        crystal.attr("data-random", ranNumCrystal);
       
        $(".crysImage").append(crystal) //insert content, '<div class="jewel">' into <section class='crysImage>
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })

    }






   
        $('.jewel').on('click', function(){

                
            var clickedOn = parseInt($(this).attr("data-random"));
            result += clickedOn;
            $('.totalScore').html("Your total score is: " + result)
            
            
            
             


            if( result === random)
            {
                console.log("You Win");
                wins++;
                $("#wins").html("Wins: " + wins);
                result=0;
                
                reset();
               
            }
        
            else if( result > random)
            {
                console.log("You Lose")
                loss++;
                $('#loss').html("Losses: " + loss);
                result=0;
                
               reset();
            }
        
        
        });


});


