function game() {

// Number of players
    var players = prompt("How many players?");
    var playernames = [];
    var playerid = ["player1", "player2", "player3", "player4"];
    for (var i = 0; i < players; i++) {
        playernames[i] = prompt("Enter players name.");
    }
// End of Players

// Loop the game
    var cont = true;
    while (cont) {

// Dealer number
        var dealer = Math.floor(Math.random() * 11);

        if (dealer === 0) {
            dealer++;
        }
// End dealer number

// Player numbers
        var playernum = [];
        for (var i = 0; i < playernames.length; i++) {
            playernum[i] = prompt("What is the number for " + playernames[i]);
        }
// End player numbers

// Display Player Names
        document.getElementById("dealer").innerHTML = "Dealer: " + dealer + "<br>";
        for (var i = 0; i < playernames.length; i++) {
            document.getElementById(playerid[i]).innerHTML = playernames[i] + ": " + playernum[i];
        }
// End player names


// Determines winner
        var win = 0;
        for (var k = 0; k < playernames.length; k++) {
            if (playernum[k] == dealer) {
                document.getElementById("winner").innerHTML = playernames[k] + " won!";
                win = 1;
            }
        }
        if (win === 0) {
            document.getElementById("winner").innerHTML = "The dealer wins!";
        }
// End winner

// If to end game loop
        var noInput = true;
        while(noInput){
            var continueGame = prompt("Would you like to quit playing? yes or no.");
            var continueGame2 = continueGame.toUpperCase();
        
            if (continueGame2 === "YES" || continueGame2 === "NO") {
                if (continueGame2 === "YES") {
                    noInput = false;
                    cont = true;
                    //noInput = false;
                } else {
                    noInput = true;
                    cont = false;
                    //noInput = true;
                }
            } else {
                alert("Not a valid answer.");
                noInput = false;
            }
        }

    }
// End game loop
}