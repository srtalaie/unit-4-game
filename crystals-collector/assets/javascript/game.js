
    //Declare variables to be used in game
    let crystal1 = 0;
    let crystal2 = 0;
    let crystal3 = 0;
    let crystal4 = 0;
    let userScore = 0;
    let wins = 0;
    let losses = 0;
    let targetNum = 0;


    //function that sets the target number into a random number from 60 to 120 and crystals random from 1 to 20
    function makeRandomTarget(){
        targetNum = Math.floor(Math.random() * 101) + 19;
        return targetNum;
    }
    function makeRandomGemNum(){
        let x =0;
        x = Math.floor(Math.random() * 11) + 1;
        return x;
    }

    //Create new game state
    function renderGame(){
        //Set target number and crystal values
        targetNum = makeRandomTarget();
        crystal1 = makeRandomGemNum();
        crystal2 = makeRandomGemNum();
        crystal3 = makeRandomGemNum();
        crystal4 = makeRandomGemNum();
        userScore = 0;

        //Set html values to newly created values
        $('#target-number').html(targetNum);
        $('#crystal1').attr('value', crystal1);
        $('#crystal2').attr('value', crystal2);
        $('#crystal3').attr('value', crystal3);
        $('#crystal4').attr('value', crystal4);
        $('#score').html(userScore);

        //Set wins and losses to what they are
        $('#wins').html('Wins: ' + wins);
        $('#losses').html('Losses: ' + losses);
    }

    //When user clicks on crystal it adds a value to their score
   $('#crystal1').on('click', function(){
        userScore += crystal1;
        $('#score').html(userScore);
        scoreChecker(userScore, targetNum);
    });
    $('#crystal2').on('click', function(){
        userScore += crystal2;
        $('#score').html(userScore);
        scoreChecker(userScore, targetNum);
    });
    $('#crystal3').on('click', function(){
        userScore += crystal3;
        $('#score').html(userScore);
        scoreChecker(userScore, targetNum);
    });
    $('#crystal4').on('click', function(){
        userScore += crystal4;
        $('#score').html(userScore);
        scoreChecker(userScore, targetNum);
    });

    renderGame();

//Check to see if the score is higher than the target number if not then when a user clicks on a crystal that crystal's value is added and updated to the user's score
function scoreChecker(usersScore, targetNumber){
    if (userScore > targetNumber){
        losses++
        renderGame();
    } else if (userScore === targetNumber){
        wins++;
        renderGame();
    }
}