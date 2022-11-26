/////////////////////////////////////////////////VARIABLES VARIABLES VARIABLES/////////////////////////////////////////////////
var boardTypeHTML;
var boardValue;

var cardsLeftHTML = document.getElementById('cards_left');
var scoreHTML = document.getElementById('score');
var timeHTML = document.getElementById('time');

var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');

var gameBoard = document.getElementById('game_board');
var winngingText = document.getElementById('winning_text');

var cardOne = '';
var cardTwo = '';

var gameActive = false;
var win = false;;
var addedTimeBoard = false;

var cardOneValue = 0;
var cardTwoValue = 0;
var totalCardsSelected = 0;
var completedCardCount = 0;
var score = 0;

var timer;
var cardsLeftValue;

var gameType = sessionStorage.getItem('gameType');
var gameMode = sessionStorage.getItem('gameMode');

var ones = 0;
var twos = 0;
var threes = 0;
var fours = 0;
var fives = 0;
var sixes = 0;
var sevens = 0;
var eights = 0;
var nines = 0;
var tens = 0;
var elevens = 0;
var twelves = 0;
var thirteens = 0;
var fourteens = 0;
var fifteens = 0;

/////////////////////////////////////////////////VARIABLES VARIABLES VARIABLES/////////////////////////////////////////////////


//function to load game elements
function LoadGame() {

    boardTypeHTML = document.getElementById('boardType');
    boardValue = boardTypeHTML.getAttribute('value');
    cardsLeftValue = cardsLeftHTML.getAttribute('value');
    
    
    //if selected game mode is timed game mode
    if(gameMode == "timed") {
    
        if(boardValue == 12) { //if board value is 12 or board size is 3x4 set time to 1 min
            
            seconds.innerHTML = "00";
            minutes.innerHTML = "01";
            
        } else if(boardValue == 20) { //if board value is 20 or board size is 4x5 set time to 2 min
            
            seconds.innerHTML = "00";
            minutes.innerHTML = "02";
            
        } else { //if board value is 30 or board size is 5x6 set time to 3 min
            
            seconds.innerHTML = "00";
            minutes.innerHTML = "03";
            
        }
        
        
        cardsLeftHTML.innerHTML = "∞"; //set cards left to infinite
        scoreHTML.innerHTML = score; //set score to score
    
    } else if(gameMode == "memory") { //if selected game mode is memory game mode
    
        score = 100; //set score to 100
        
        //set time to infinte
        seconds.innerHTML = "∞";
        minutes.innerHTML = "∞";
        
        cardsLeftHTML.innerHTML = cardsLeftValue; //set cards left to cardsLeftValue
        scoreHTML.innerHTML = score; //set score to score
    
    } else { //if selected game mode is standard game mode
    
        //set time to 0
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";
        
        cardsLeftHTML.innerHTML = cardsLeftValue; //set cards left to cardsLeftValue
        scoreHTML.innerHTML = "∞"; //set score to infinite
    
    }
}


//function to get the selected game mode
function selectGameMode(selectedGameMode) {

    //variables for the game modes
    var timedBoard  = document.getElementById('timed_mode');
    var memoryBoard  = document.getElementById('memory_mode');
    var standardBoard  = document.getElementById('standard_mode');
    
    if(selectedGameMode == timedBoard) { //if selected game mode is timed game mode
        
        sessionStorage.setItem('gameMode', "timed"); //set sessionStorage item 'gameMode' to timed
        
    } else if(selectedGameMode == memoryBoard) { //if selected game mode is memory game mode
        
        sessionStorage.setItem('gameMode', "memory"); //set sessionStorage item 'gameMode' to memory
        
    } else if(selectedGameMode == standardBoard) { //if selected game mode is standard game mode
        
        sessionStorage.setItem('gameMode', "standard"); //set sessionStorage item 'gameMode' to standard
        
    }
    
}


//function to get the selected card image type
function selectGameType(selectedGameType) {

    //variables for the types of cards
    var numbersBoard  = document.getElementById('numbers_radio');
    var picturesBoard  = document.getElementById('pictures_radio');
    var colorsBoard  = document.getElementById('colors_radio');

    if(selectedGameType == numbersBoard) { //if selected card type is numbers
        
        sessionStorage.setItem('gameType', "numbers"); //set sessionStorage item 'gameType' to numbers
        
    } else if(selectedGameType == picturesBoard) { //if selected card type is pictures
        
        sessionStorage.setItem('gameType', "pictures"); //set sessionStorage item 'gameType' to pictures
        
    } else if(selectedGameType == colorsBoard) { //if selected card type is colors
        
        sessionStorage.setItem('gameType', "colors"); //set sessionStorage item 'gameType' to colors
        
    }
    
}


//function to set the rules of the selected game mode
function SetRules() {

    //variables for the list of rules
    var list_item_1 = document.getElementById("list_item_1");
    var list_item_2 = document.getElementById("list_item_2");
    var list_item_3 = document.getElementById("list_item_3");
    var list_item_4 = document.getElementById("list_item_4");
    var list_item_5 = document.getElementById("list_item_5");
    var list_item_6 = document.getElementById("list_item_6");
    var list_item_7 = document.getElementById("list_item_7");

    if(gameMode == "timed") { //if game mode is timed game mode set rules to timed game mode rules

        list_item_1.innerHTML = "This is the Timed Game Mode.";
        list_item_2.innerHTML = "You get a certain amount of time to get as much score as possible.";
        list_item_3.innerHTML = "Keep trying to get a higher score.";
        list_item_4.innerHTML = "There are 3 board sizes to pick from.";
        list_item_5.innerHTML = "Board sizes give different amounts of time, the sizes are 12, 20, or 30 total cards.";
        list_item_6.innerHTML = "You can pick whether you want the cards to be numbers, emoji's, or colors.";
        list_item_7.innerHTML = "Please Have Fun!!";

    } else if(gameMode == "memory") { //if game mode is memory game mode set rules to memory game mode rules

        list_item_1.innerHTML = "This is the Memory Game Mode.";
        list_item_2.innerHTML = "When game starts the board flips you get 3 seconds to memorize the cards.";
        list_item_3.innerHTML = "Every incorrect pair chosen the score decreases by 10.";
        list_item_4.innerHTML = "There are 3 board sizes to pick from.";
        list_item_5.innerHTML = "All board sizes start with a score of 100, the sizes are 12, 20, or 30 total cards.";
        list_item_6.innerHTML = "You can pick whether you want the cards to be numbers, emoji's, or colors.";
        list_item_7.innerHTML = "Please Have Fun!!";

    } else { //if game mode is standard game mode set rules to standard game mode rules

        list_item_1.innerHTML = "This is the Standard Game Mode.";
        list_item_2.innerHTML = "You can take as long and get as much incorrect pairs as you want.";
        list_item_3.innerHTML = "There is no way to lose so this is the simples game mode.";
        list_item_4.innerHTML = "There are 3 board sizes to pick from.";
        list_item_5.innerHTML = "The sizes are 12, 20, or 30 total cards.";
        list_item_6.innerHTML = "You can pick whether you want the cards to be numbers, emoji's, or colors.";
        list_item_7.innerHTML = "Please Have Fun!!";

    }

}


//function to generate random number
function generateRandomNumber() {

    var ranNum = Math.floor(Math.random() * (boardValue/2)) + 1; //create random number based off board size
    return ranNum; //return random number created

}


//function to generate board contents
function GenerateBoard() {

    if(gameActive != false) return; //if gameActive is not false just return and do nothing else

    ShowBoard(); //calling the show board function

    for(let i = 1; i <= boardValue; i++) { //for loop to generate the board

        //variables to make IDs
        var ID = "c" + i;
        var backID = "c" + i + "b";

        //variables that use previous IDs to get a card via ID from HTML
        var cardID = document.getElementById(ID);
        var backCardID = document.getElementById(backID);

        let randomNumber = generateRandomNumber(); //variable to call on the generateRandomNumber() function

        //if random number has already been used twice
        if( randomNumber == 1 && ones == 2 || randomNumber == 2 && twos == 2 || randomNumber == 3 && threes == 2 || randomNumber == 4 && fours == 2 || 
            randomNumber == 5 && fives == 2 || randomNumber == 6 && sixes == 2 || randomNumber == 7 && sevens == 2 || randomNumber == 8 && eights == 2 || 
            randomNumber == 9 && nines == 2 || randomNumber == 10 && tens == 2 ||randomNumber == 11 && elevens == 2 || randomNumber == 12 && twelves == 2 || 
            randomNumber == 13 && thirteens == 2 || randomNumber == 14 && fourteens == 2 || randomNumber == 15 && fifteens == 2) {
            
                i--; //minus i to generate new number for the same selected card

        }  else { //else if the random number has not been used twice

            if(randomNumber == 1) { //if random number = 1
                
                cardID.setAttribute('value', 1); //set card's value attribute to 1
                ones++; //increase ones value 

                if(gameType == "colors") { //if game type is colors
                    backCardID.style.background = "#4d29fe"; //set back of the card background to blue
                } else if(gameType == "pictures") { //else if game type is pictures
                    backCardID.style.backgroundImage = "url('Emoji Pngs/angry.png')" //set back of the card background to angry emoji
                } else { //else if game type is numbers
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                }
    
            } else if(randomNumber == 2) { //if random number = 2
                
                cardID.setAttribute('value', 2); //set card's value attribute to 2
                twos++; //increase twos value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#00e400"; //set back of the card background to green
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/blushing.png')" //set back of the card background to blushing emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 3) { //if random number = 3
                
                cardID.setAttribute('value', 3); //set card's value attribute to 3
                threes++; //increase threes value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#ff2a28"; //set back of the card background to red
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/crying_laughing.png')" //set back of the card background to crying laughing emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 4) { //if random number = 4
                
                cardID.setAttribute('value', 4); //set card's value attribute to 4
                fours++; //increase fours value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#c300ff"; //set back of the card background to purple
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/crying.png')" //set back of the card background to crying emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 5) { //if random number = 5
                
                cardID.setAttribute('value', 5); //set card's value attribute to 5
                fives++; //increase fives value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#ebff14"; //set back of the card background to yellow
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/curious.png')" //set back of the card background to curious emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 6) { //if random number = 6
                
                cardID.setAttribute('value', 6); //set card's value attribute to 6
                sixes++; //increase sixes value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#fbb311"; //set back of the card background to orange
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/halo.png')" //set back of the card background to halo emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 7) { //if random number = 7
                
                cardID.setAttribute('value', 7); //set card's value attribute to 7
                sevens++; //increase sevens value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#ff1486"; //set back of the card background to pink
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/heart_eyes.png')" //set back of the card background to heart eyes emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 8) { //if random number = 8
                
                cardID.setAttribute('value', 8); //set card's value attribute to 8
                eights++; //increase eights value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#73aeff"; //set back of the card background to lightblue
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/kissing.png')" //set back of the card background to kissing emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 9) { //if random number = 9
                
                cardID.setAttribute('value', 9); //set card's value attribute to 9
                nines++; //increase nines value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#90ffac"; //set back of the card background to lightgreen
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/shocked.png')" //set back of the card background to shocked emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 10) { //if random number = 10
                
                cardID.setAttribute('value', 10); //set card's value attribute to 10
                tens++; //increase tens value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "white"; //set back of the card background to white
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/silly.png')"; //set back of the card background to silly emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 11) { //if random number = 11
                
                cardID.setAttribute('value', 11); //set card's value attribute to 11
                elevens++; //increase elevens value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#008000"; //set back of the card background to darkgreen
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/sun_glasses.png')"; //set back of the card background to sun glasses emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 12) { //if random number = 12
                
                cardID.setAttribute('value', 12); //set card's value attribute to 12
                twelves++; //increase twelves value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#20009d"; //set back of the card background to darkblue
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/teasing.png')"; //set back of the card background to teasing emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 13) { //if random number = 13
                
                cardID.setAttribute('value', 13); //set card's value attribute to 13
                thirteens++; //increase thirteens value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "#b90006"; //set back of the card background to darkred
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/uninterested.png')"; //set back of the card background to uninterested emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 14) { //if random number = 14
                
                cardID.setAttribute('value', 14); //set card's value attribute to 14
                fourteens++; //increase fourteens value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "gray"; //set back of the card background to gray
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/wink.png')"; //set back of the card background to wink emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            } else if(randomNumber == 15) { //if random number = 15
                
                cardID.setAttribute('value', 15); //set card's value attribute to 15
                fifteens++; //increase fifteens value 
                
                if(gameType == "colors") { //if game type is colors
                    
                    backCardID.style.background = "black"; //set back of the card background to black
                    
                } else if(gameType == "pictures") { //else if game type is pictures
                    
                    backCardID.style.backgroundImage = "url('Emoji Pngs/worried.png')"; //set back of the card background to worried emoji
                    
                } else { //else if game type is numbers
                    
                    backCardID.innerHTML = randomNumber; //set back of the card background to the generated random number
                    
                }
    
            }

        }

    }

    gameActive = true; //set gameActive to true

    if(gameMode == "memory") { //if game mode is memory game mode
        
        for(let i = 1; i <= boardValue; i++) { //for loop to iterate through evry card

            //getting the card from the HTML
            var ID = "c" + i;
            var cardID = document.getElementById(ID);

            FlipCard(cardID); //flipping every card face up
        }

        setTimeout(function() { //time out function
            
            for(let i = 1; i <= boardValue; i++) { //for loop to iterate through evry card

                //getting the card from the HTML
                var ID = "c" + i;
                var cardID = document.getElementById(ID);
    
                FlipCard(cardID); //flipping every card face down
            }
            
        }, 5000); //setting the timeout time to 5 seconds
        
    }

}



//function for when a card is clicked on
function CardOnClick(selectedCard) {

    if(selectedCard.getAttribute('aria-disabled') != true && gameActive == true) { //if card is disabled and game is active

        if(totalCardsSelected == 0) { //if total cards that have already been clicked is 0

            cardOne = selectedCard; //set card one to the card clicked on
            cardOneValue = selectedCard.getAttribute('value'); //set cardOneValue to the card clicked on's value
            totalCardsSelected++; //increase total cards selected

            FlipCard(selectedCard); //flip the clicked on card face up
            
        } else if(totalCardsSelected == 1 &&  selectedCard != cardOne) { //if total cards that have already been clicked is 1
    
            cardTwo = selectedCard; //set card two to the card clicked on
            cardTwoValue = selectedCard.getAttribute('value'); //set cardTwoValue to the card clicked on's value
            totalCardsSelected++; //increase total cards selected

            FlipCard(selectedCard); //flip the clicked on card face up
            
        }
    
        if(totalCardsSelected == 2) { //if total cards that have already been clicked is 2
    
            if(AreCardsTheSame(cardOneValue, cardTwoValue)) { //if statement that calls on the AreCardsTheSame() function
    
                setTimeout(function() { RemoveCards(cardOne, cardTwo); }, 1500); //setTimeout function to call on the RemoveCards() function set on 1.5 seconds
        
            } else { //if the cards are not the same

                setTimeout(function() { //setTimeout function to flip card two cards selected face down
                    
                    FlipCard(cardOne);
                    FlipCard(cardTwo);
                    
                }, 1500); //set time to 1.5 seconds

                if(gameMode == "memory") { //game mode is memory game mode
                    
                    score = score - 10; //minus score by 10
                    setTimeout(function() { scoreHTML.innerHTML = score;}, 1000); //set timeout function to display score after 1 second
                    
                }

                if(gameMode == "memory" && score == 0) { //if game mode is  memory and score is 0

                    setTimeout(function() { //setTimeout function to

                        FlipGame(); //flip the game board
                        clearInterval(timer); //clearInterval on timer variable

                        win = true; //set win to true
                        gameActive == false; //set gameActive to false

                        winngingText.innerHTML = "You Lose"; //set winning text to "You Lose"

                    }, 1000); //time set 1 second

                }

                setTimeout(function() { ResetCards(); }, 1500); //setTimeout function to call ResetCards() function after 1.5 seconds
                
            }
    
        }

    } 
    
}



//function to show the cards on the board
function ShowBoard() {
    
    for(let i = 1; i <= boardValue; i++) { //for loop to iterate through all cards

        var ID = "c" + i;
        var cardID = document.getElementById(ID);
        cardID.style.opacity = 1; //setting cards opacity to 1 to show the card

    }

    
    if(gameActive == false) { //if gameActive is false
        
        if(gameMode == "timed") { //if gameMode is timed

            if(addedTimeBoard == false) { //if addedTimeBoard is false

                if(boardValue == 12) { //if boardValue is 12
                    
                    var sec = 60; //set sec to 60
                    
                } else if(boardValue == 20) { //if boardValue is 20
                    
                    var sec = 120; //set sec to 120
                    
                } else { //if boardValue is 30
                    
                    var sec = 180; //set sec to 180
                    
                }
                
        
                timer = setInterval( function() { //set variable timer to setInterval() function to count down
                    
                    seconds.innerHTML=setTime(--sec%60); //set seconds to specified time
                    minutes.innerHTML=setTime(parseInt(sec/60,10)); //set minues to specified time
        
                    if(sec == 0) { //if sec is 0
                        
                        setTimeout(function() { FlipGame() }, 1500);  //setTimout() function to call FlipGame() function to 1.5 seconds
                        clearInterval(timer); //clearInterval on timer variable
                        win = true; //set win to true
                        winngingText.innerHTML = "Time's Up"; //set winning text to "Time's Up"
                        
                    }
        
                }, 1000); //set time to 1 second
            }
        
        } else if(gameMode == "standard") { //else if game mode is standard game mode
            
            var sec = 0; //set sec variable to 0
    
            timer = setInterval( function() { //set variable timer to setInterval() function  to count up
                
                seconds.innerHTML=setTime(++sec%60); //set seconds to specified time
                minutes.innerHTML=setTime(parseInt(sec/60,10)); //set minues to specified time
                
            }, 1000); //set time to 1 second

        } 

    }

}



//function to check if two cards are the same
function AreCardsTheSame(c1, c2) {

    if(c1 == c2) { return true; } //if two cards are equal return true

    return false; //else return false
}



//function to remove cards
function RemoveCards() {

    fadeCardOut(cardOne); //call fadeCardout() function on cardOne
    fadeCardOut(cardTwo); //call fadeCardout() function on cardTwo

    ResetCards(); //call ResetCards() function

    if(gameMode == "timed") { //if game mode is timed game mode

        score = score + 10; //increase score by 10
        scoreHTML.innerHTML = score; //set score to score

    } else { //else if game mode is memory or standard game mode
        
        cardsLeftValue = cardsLeftValue - 2; //decrease cardsLeftValue by 2
        cardsLeftHTML.innerHTML = cardsLeftValue; //set cardsLeftHTML to cardsLeftValue
        
    }

    completedCardCount = completedCardCount + 2; //increase completedCardCount by 2

    if(completedCardCount == boardValue) { //if completedCardCount is boardValue
            
        if(gameMode == "timed") { //if game mode is timed game mode

            setTimeout(function() { resetBoard(); }, 500); //setTimout() function to call resetBoard() function after 0.5 seconds

        } else { //else if game mode is memory or standard game mode
        
            setTimeout(function() { FlipGame() }, 1500); //setTimout() function to call FlipGame() function after 1.5 seconds
            clearInterval(timer); //clearInterval on timer variable
            win = true; //set win to true
            winngingText.innerHTML = "You Win"; //set winningText to "You Win"

        }

    }

}



//function to create new game
function NewGame() { 

    if(win == true) { //if win is true

        FlipGame(); //call FlipGame() function

        setTimeout(function() { //setTimeout() function
        
            if(boardValue == 12) { //if boardValue is 12
    
                location.href = 'HTML 3x4Game.html'; //redirect to 'HTML 3x4Game.html'
        
            } else if(boardValue == 20) { //if boardValue is 20
        
                location.href = 'HTML 4x5Game.html'; //redirect to 'HTML 4x5Game.html'
        
            } else if(boardValue == 30) { //if boardValue is 30
        
                location.href = 'HTML 5x6Game.html'; //redirect to 'HTML 5x6Game.html'
        
            }
    
        }, 2200); //set time to 2.2 seconds

    } else { //if win is not true

        if(boardValue == 12) { //if boardValue is 12
    
            location.href = 'HTML 3x4Game.html'; //redirect to 'HTML 3x4Game.html'
    
        } else if(boardValue == 20) { //if boardValue is 20
    
            location.href = 'HTML 4x5Game.html'; //redirect to 'HTML 4x5Game.html'
    
        } else if(boardValue == 30) { //if boardValue is 30
    
            location.href = 'HTML 5x6Game.html'; //redirect to 'HTML 5x6Game.html'
    
        }

    }

}



//function to fade a card out ot make it disappear by setting the opacity to 0
function fadeCardOut(selectedCard) { selectedCard.style.opacity = 0; }



//function to reset the board
function resetBoard() {

    addedTimeBoard = true; //set addedTimeBoard to true, (this means a board has been completed once in the timed game mode)
    gameActive = false; //set game active to false
    completedCardCount = 0; //set completed card count to 0
    
    //set 'amount of random number' variables all to 0
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0;
    fives = 0;
    sixes = 0;
    sevens = 0;
    eights = 0;
    nines = 0;
    tens = 0;
    elevens = 0;
    twelves = 0;
    thirteens = 0;
    fourteens = 0;
    fifteens = 0;

    GenerateBoard(); //calling GenerateBoard() function

    for(let i = 1; i <= boardValue; i++) { //for loop to iterate through all cards

        var ID = "c" + i;
        var cardID = document.getElementById(ID);

        FlipCard(cardID); //call FlipCard() function on every card
        
    }

}



//function to reset the cards
function ResetCards() {
    
   //set cardOne and CardTwo to ''
    cardOne = '';
    cardTwo = '';
    
    //set cardOneValue and cardTwoValue to 0
    cardOneValue = 0;
    cardTwoValue = 0;
    
    totalCardsSelected = 0; //set totalCardsSelected to 0
}


//function to flip a selected card
function FlipCard(selectedCard) { selectedCard.classList.toggle("FlipCard"); }


//function used to set timer
function setTime(number) { return number > 9 ? number : "0" + number; }


//function to flip the game board
function FlipGame() { gameBoard.classList.toggle("FlipGame"); }


//function to redirect back to the rules
function BackToRules() { location.href = 'HTML Rules.html'; }
