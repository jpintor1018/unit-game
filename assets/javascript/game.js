var result = 0;
var wins = 0;
var loss = 0;
var random;



$(document).ready(function () {
    var result = 0;
    var wins = 0;
    var loss = 0;
    var random = Math.floor(Math.random() * 120 - 19) + 19;

    var images = [
        "assets/images/blue crystal.jpg",
        "assets/images/green crystal.jpg",
        "assets/images/red crystal.jpg",
        "assets/images/yellow crystal.jpg"
    ]

    $(".ranNum").html(' Random Number:' + random);
    console.log(random)


    
    for (var i = 0; i < 4; i++) //loop 4 times
        {
            var crystal = $("<div>"); //created div 
            var ranNumCrystal = Math.floor(Math.random() * 13)+1 // generate a random number between 0-12
            crystal.attr("class", 'jewel'); //created a class of 'jewel' in the newly created div
            crystal.attr("data-random", ranNumCrystal);
            crystal.attr("id", i)
            console.log("crystal "+ i + ": " + ranNumCrystal)
            $(".crysImage").append(crystal) //insert content, '<div class="jewel">' into <section class='crysImage>
            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size": "cover"
            })

        }

    $('.jewel').on('click', function () {
        console.log("INSIDE JEWEL CLICK");
        var clickedOn = parseInt($(this).attr("data-random"));
        result += clickedOn;

        console.log("result: " + result);

        $('.totalScore').html("Your total score is: " + result);

        if (result === random) {
            console.log("You Win");
            wins++;
            $("#wins").html("Wins: " + wins);
            result = 0;
            reset();

        }

        else if (result > random) {
            console.log("You Lose")
            loss++;
            $('#loss').html("Losses: " + loss);
            result = 0;
            reset();
        }


    });

    function reset() {
        console.log("RUNNING RESET");
        var divInd;
        random = Math.floor(Math.random() * 120 - 19) + 19;

        for(let i = 0; i < images.length; i++){
            divInd = "#" + i;
            var ranNumCrystal = Math.floor(Math.random() * 13)+1
            console.log("crystal "+ i + ": " + ranNumCrystal)
            $(divInd).attr("data-random", ranNumCrystal );

        }


        $(".ranNum").html(' Random Number:' + random);
        $('.totalScore').html("Your total score is: " + result)
        // loop();
        // result.value('');
        // var random = (Math.floor(Math.random()*120)+19);
        // $(".ranNum").html(' Random Number:' + random);
    }

});


