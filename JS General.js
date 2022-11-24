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


function LoadGame() {

    boardTypeHTML = document.getElementById('boardType');
    boardValue = boardTypeHTML.getAttribute('value');
    cardsLeftValue = cardsLeftHTML.getAttribute('value');

    if(gameMode == "memory") {
        score = 100;
    }
    
    
    if(gameMode == "timed") {
    
        if(boardValue == 12) {
            seconds.innerHTML = "00";
            minutes.innerHTML = "01";
        } else if(boardValue == 20) {
            seconds.innerHTML = "00";
            minutes.innerHTML = "02";
        } else {
            seconds.innerHTML = "00";
            minutes.innerHTML = "03";
        }
        
        cardsLeftHTML.innerHTML = "∞";
        scoreHTML.innerHTML = score;
    
    } else if(gameMode == "memory") {
    
        seconds.innerHTML = "∞";
        minutes.innerHTML = "∞";
        cardsLeftHTML.innerHTML = cardsLeftValue;
        scoreHTML.innerHTML = score;
    
    } else {
    
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";
        cardsLeftHTML.innerHTML = cardsLeftValue;
        scoreHTML.innerHTML = "∞";
    
    }
}


function selectGameMode(selectedGameMode) {

    var timedBoard  = document.getElementById('timed_mode');
    var memoryBoard  = document.getElementById('memory_mode');
    var standardBoard  = document.getElementById('standard_mode');

    if(selectedGameMode == timedBoard) {
        sessionStorage.setItem('gameMode', "timed");
    } else if(selectedGameMode == memoryBoard) {
        sessionStorage.setItem('gameMode', "memory");
    } else if(selectedGameMode == standardBoard) {
        sessionStorage.setItem('gameMode', "standard");
    }
    
}


function selectGameType(selectedGameType) {

    var numbersBoard  = document.getElementById('numbers_radio');
    var picturesBoard  = document.getElementById('pictures_radio');
    var colorsBoard  = document.getElementById('colors_radio');

    if(selectedGameType == numbersBoard) {
        sessionStorage.setItem('gameType', "numbers");
    } else if(selectedGameType == picturesBoard) {
        sessionStorage.setItem('gameType', "pictures");
    } else if(selectedGameType == colorsBoard) {
        sessionStorage.setItem('gameType', "colors");
    }
    
}


function SetRules() {

    var list_item_1 = document.getElementById("list_item_1");
    var list_item_2 = document.getElementById("list_item_2");
    var list_item_3 = document.getElementById("list_item_3");
    var list_item_4 = document.getElementById("list_item_4");
    var list_item_5 = document.getElementById("list_item_5");
    var list_item_6 = document.getElementById("list_item_6");
    var list_item_7 = document.getElementById("list_item_7");

    if(gameMode == "timed") {

        list_item_1.innerHTML = "This is the Timed Game Mode.";
        list_item_2.innerHTML = "You get a certain amount of time to get as much score as possible.";
        list_item_3.innerHTML = "Keep trying to get a higher score.";
        list_item_4.innerHTML = "There are 3 board sizes to pick from.";
        list_item_5.innerHTML = "Board sizes give different amounts of time, the sizes are 12, 20, or 30 total cards.";
        list_item_6.innerHTML = "You can pick whether you want the cards to be numbers, emoji's, or colors.";
        list_item_7.innerHTML = "Please Have Fun!!";

    } else if(gameMode == "memory") {

        list_item_1.innerHTML = "This is the Memory Game Mode.";
        list_item_2.innerHTML = "When game starts the board flips you get 3 seconds to memorize the cards.";
        list_item_3.innerHTML = "Every incorrect pair chosen the score decreases by 10.";
        list_item_4.innerHTML = "There are 3 board sizes to pick from.";
        list_item_5.innerHTML = "All board sizes start with a score of 100, the sizes are 12, 20, or 30 total cards.";
        list_item_6.innerHTML = "You can pick whether you want the cards to be numbers, emoji's, or colors.";
        list_item_7.innerHTML = "Please Have Fun!!";

    } else {

        list_item_1.innerHTML = "This is the Standard Game Mode.";
        list_item_2.innerHTML = "You can take as long and get as much incorrect pairs as you want.";
        list_item_3.innerHTML = "There is no way to lose so this is the simples game mode.";
        list_item_4.innerHTML = "There are 3 board sizes to pick from.";
        list_item_5.innerHTML = "The sizes are 12, 20, or 30 total cards.";
        list_item_6.innerHTML = "You can pick whether you want the cards to be numbers, emoji's, or colors.";
        list_item_7.innerHTML = "Please Have Fun!!";

    }

}


function generateRandomNumber() {

    var ranNum = Math.floor(Math.random() * (boardValue/2)) + 1;
    return ranNum;

}


function GenerateBoard() {

    if(gameActive != false) return;

    ShowBoard();

    for(let i = 1; i <= boardValue; i++) {

        var ID = "c" + i;
        var backID = "c" + i + "b";

        var cardID = document.getElementById(ID);
        var backCardID = document.getElementById(backID);

        let randomNumber = generateRandomNumber();

        if( randomNumber == 1 && ones == 2 || randomNumber == 2 && twos == 2 || randomNumber == 3 && threes == 2 || randomNumber == 4 && fours == 2 || 
            randomNumber == 5 && fives == 2 || randomNumber == 6 && sixes == 2 || randomNumber == 7 && sevens == 2 || randomNumber == 8 && eights == 2 || 
            randomNumber == 9 && nines == 2 || randomNumber == 10 && tens == 2 ||randomNumber == 11 && elevens == 2 || randomNumber == 12 && twelves == 2 || 
            randomNumber == 13 && thirteens == 2 || randomNumber == 14 && fourteens == 2 || randomNumber == 15 && fifteens == 2) {
            
                i--;

        }  else {

            if(randomNumber == 1) {
                cardID.setAttribute('value', 1);
                ones++;;

                if(gameType == "colors") {
                    backCardID.style.background = "#4d29fe"; //blue
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/angry.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 2) {
                cardID.setAttribute('value', 2);
                twos++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#00e400"; //green
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/blushing.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 3) {
                cardID.setAttribute('value', 3);
                threes++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#ff2a28"; //red
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/crying_laughing.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 4) {
                cardID.setAttribute('value', 4);
                fours++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#c300ff"; //purple
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/crying.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 5) {
                cardID.setAttribute('value', 5);
                fives++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#ebff14"; //yellow
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/curious.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 6) {
                cardID.setAttribute('value', 6);
                sixes++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#fbb311"; //orange
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/halo.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 7) {
                cardID.setAttribute('value', 7);
                sevens++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#ff1486"; //pink
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/heart_eyes.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 8) {
                cardID.setAttribute('value', 8);
                eights++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#73aeff"; //lightblue
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/kissing.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 9) {
                cardID.setAttribute('value', 9);
                nines++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#90ffac"; //lightgreen
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/shocked.png')"
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 10) {
                cardID.setAttribute('value', 10);
                tens++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "white"; //white
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/silly.png')";
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 11) {
                cardID.setAttribute('value', 11);
                elevens++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#008000"; //darkgreen
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/sun_glasses.png')";
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 12) {
                cardID.setAttribute('value', 12);
                twelves++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#20009d"; //darkblue
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/teasing.png')";
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 13) {
                cardID.setAttribute('value', 13);
                thirteens++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "#b90006"; //darkred
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/uninterested.png')";
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 14) {
                cardID.setAttribute('value', 14);
                fourteens++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "gray"; //gray
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/wink.png')";
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            } else if(randomNumber == 15) {
                cardID.setAttribute('value', 15);
                fifteens++;
                
                if(gameType == "colors") {
                    backCardID.style.background = "black"; //black
                } else if(gameType == "pictures") {
                    backCardID.style.backgroundImage = "url('Emoji Pngs/worried.png')";
                } else {
                    backCardID.innerHTML = randomNumber;
                }
    
            }

        }

    }

    gameActive = true;

    if(gameMode == "memory") {
        
        for(let i = 1; i <= boardValue; i++) {

            var ID = "c" + i;
            var cardID = document.getElementById(ID);

            FlipCard(cardID);
        }

        setTimeout(function() {
            for(let i = 1; i <= boardValue; i++) {

                var ID = "c" + i;
                var cardID = document.getElementById(ID);
    
                FlipCard(cardID);
            }
        }, 5000);
        
    }

}



function CardOnClick(selectedCard) {

    if(selectedCard.getAttribute('aria-disabled') != true && gameActive == true) {

        if(totalCardsSelected == 0) {

            cardOne = selectedCard;
            cardOneValue = selectedCard.getAttribute('value');
            totalCardsSelected++;

            selectedCard.addEventListener("click", FlipCard(selectedCard));
            
        } else if(totalCardsSelected == 1 &&  selectedCard != cardOne) {
    
            cardTwo = selectedCard;
            cardTwoValue = selectedCard.getAttribute('value');
            totalCardsSelected++;

            selectedCard.addEventListener("click", FlipCard(selectedCard)); 
            
        }
    
        if(totalCardsSelected == 2) {
    
            if(AreCardsTheSame(cardOneValue, cardTwoValue)) {
    
                setTimeout(function() { RemoveCards(cardOne, cardTwo); }, 1500);
        
            } else {

                setTimeout(function() { 
                    FlipCard(cardOne);
                    FlipCard(cardTwo);
                }, 1500);

                if(gameMode == "memory") {
                    score = score - 10;
                    setTimeout(function() { scoreHTML.innerHTML = score;}, 1000);
                }

                if(gameMode == "memory" && score == 0) {

                    setTimeout(function() { 

                        FlipGame();
                        clearInterval(timer);

                        win = true;
                        gameActive == false;

                        winngingText.innerHTML = "You Lose";

                    }, 1000);

                }

                setTimeout(function() { ResetCards(); }, 1500);
                
            }
    
        }

    } 
    
}



function ShowBoard() {
    
    for(let i = 1; i <= boardValue; i++) {

        var ID = "c" + i;
        var cardID = document.getElementById(ID);
        cardID.style.opacity = 1; 

    }

    
    if(gameActive == false) {
        
        if(gameMode == "timed") {

            if(addedTimeBoard == false) {

                if(boardValue == 12) {
                    var sec = 60;
                } else if(boardValue == 20) {
                    var sec = 120;
                } else {
                    var sec = 180;
                }
                
        
                timer = setInterval( function() {
                    seconds.innerHTML=setTime(--sec%60);
                    minutes.innerHTML=setTime(parseInt(sec/60,10));
        
                    if(sec == 0) {
                        setTimeout(function() { FlipGame() }, 1500); 
                        clearInterval(timer);
                        win = true;
                        winngingText.innerHTML = "Time's Up";
                    }
        
                }, 1000);
            }
        
        } else if(gameMode == "standard") {
            var sec = 0;
    
            timer = setInterval( function() {
                seconds.innerHTML=setTime(++sec%60);
                minutes.innerHTML=setTime(parseInt(sec/60,10));
            }, 1000);

        } 

    }

}



function AreCardsTheSame(c1, c2) {

    if(c1 == c2) { 
        return true; 
    }

    return false;
}



function RemoveCards() {

    fadeCardOut(cardOne);
    fadeCardOut(cardTwo);

    ResetCards()

    if(gameMode == "timed") {

        score = score + 10;
        scoreHTML.innerHTML = score;

    } else {
        cardsLeftValue = cardsLeftValue - 2;
        cardsLeftHTML.innerHTML = cardsLeftValue;
    }

    completedCardCount = completedCardCount + 2;

    if(completedCardCount == boardValue) { 
            
        if(gameMode == "timed") {

            setTimeout(function() { resetBoard(); }, 500);

        } else {
        
            setTimeout(function() { FlipGame() }, 1500); 
            clearInterval(timer);
            win = true;
            winngingText.innerHTML = "You Win";

        }

    }

}



function NewGame() { 

    if(win == true) {

        FlipGame();

        setTimeout(function() {
        
            if(boardValue == 12) {
    
                location.href = 'HTML 3x4Game.html';
        
            } else if(boardValue == 20) {
        
                location.href = 'HTML 4x5Game.html';
        
            } else if(boardValue == 30) {
        
                location.href = 'HTML 5x6Game.html';
        
            }
    
        }, 2200);

    } else {

        if(boardValue == 12) {
    
            location.href = 'HTML 3x4Game.html';
    
        } else if(boardValue == 20) {
    
            location.href = 'HTML 4x5Game.html';
    
        } else if(boardValue == 30) {
    
            location.href = 'HTML 5x6Game.html';
    
        }

    }

}



function fadeCardOut(selectedCard) {
    selectedCard.style.opacity = 0;
}



function resetBoard() {

    addedTimeBoard = true;
    gameActive = false;
    completedCardCount = 0;
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

    GenerateBoard();

    for(let i = 1; i <= boardValue; i++) {

        var ID = "c" + i;
        var cardID = document.getElementById(ID);

        FlipCard(cardID);
    }

}



function ResetCards() {
    cardOne = '';
    cardTwo = '';
    cardOneValue = 0;
    cardTwoValue = 0;
    totalCardsSelected = 0;
}



function FlipCard(selectedCard) { 
    selectedCard.classList.toggle("FlipCard"); 
}



function setTime(number) { 
    return number > 9 ? number : "0" + number; 
}



function FlipGame() {
    gameBoard.classList.toggle("FlipGame"); 
}


function BackToRules() {
    location.href = 'HTML Rules.html';
}