$(document).ready(function(){
var random = Math.floor(Math.random()*120)+19;
$(".ranNum").html(' Random Number:      ' + random);
console.log(random)

for( var i =0; i<4;i++) //loop 4 times
    {
        var crystal = $("<div>"); //created div 
        crystal.attr("class", 'jewel'); //created a class of 'jewel' in the newly created div
        var ranNumCrystal = Math.floor(Math.random()*13) // generate a random number between 0-12
        crystal.attr("data-random", ranNumCrystal);
        $(".crysImage").append(crystal) //insert content, '<div class="jewel">' into <section class='crysImage>
    }

        $('.jewel').on('click', function(){

            var clickedOn = parseInt($(this).attr("data-random"));
            var result = clickedOn;
            console.log(result)
        });


});