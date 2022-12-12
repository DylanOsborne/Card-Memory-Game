/////////////////////////////////////////////////VARIABLES VARIABLES VARIABLES/////////////////////////////////////////////////
var boardTypeHTML;
var boardValue;
var generalButton;
var scoresHeader;

var bottomTabDisplay = document.getElementById('bottom_tab_display');
var bottomTab = document.getElementById('bottom_tab');

var gameBoard = document.getElementById('game_board');
var winngingText = document.getElementById('winning_text');

var cardOne = '';
var cardTwo = '';

var gameActive = false;
var win = false;
var addedTimeBoard = false;

var cardOneValue = 0;
var cardTwoValue = 0;
var totalCardsSelected = 0;
var completedCardCount = 0;
var score = 0;
var mismatches = 0;
var cardsCleared = 0;

var timer;
var cardsLeft;
var seconds;
var minutes;
var sec

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



var score1Timed3x4 = sessionStorage.getItem('score1Timed3x4');
var score2Timed3x4 = sessionStorage.getItem('score2Timed3x4');
var score3Timed3x4 = sessionStorage.getItem('score3Timed3x4');
var score4Timed3x4 = sessionStorage.getItem('score4Timed3x4');
var score5Timed3x4 = sessionStorage.getItem('score5Timed3x4');
var score6Timed3x4 = sessionStorage.getItem('score6Timed3x4');

var score1Timed4x5 = sessionStorage.getItem('score1Timed4x5');
var score2Timed4x5 = sessionStorage.getItem('score2Timed4x5');
var score3Timed4x5 = sessionStorage.getItem('score3Timed4x5');
var score4Timed4x5 = sessionStorage.getItem('score4Timed4x5');
var score5Timed4x5 = sessionStorage.getItem('score5Timed4x5');
var score6Timed4x5 = sessionStorage.getItem('score6Timed4x5');

var score1Timed5x6 = sessionStorage.getItem('score1Timed5x6');
var score2Timed5x6 = sessionStorage.getItem('score2Timed5x6');
var score3Timed5x6 = sessionStorage.getItem('score3Timed5x6');
var score4Timed5x6 = sessionStorage.getItem('score4Timed5x6');
var score5Timed5x6 = sessionStorage.getItem('score5Timed5x6');
var score6Timed5x6 = sessionStorage.getItem('score6Timed5x6');



var score1Memory3x4 = sessionStorage.getItem('score1Memory3x4');
var score2Memory3x4 = sessionStorage.getItem('score2Memory3x4');
var score3Memory3x4 = sessionStorage.getItem('score3Memory3x4');
var score4Memory3x4 = sessionStorage.getItem('score4Memory3x4');
var score5Memory3x4 = sessionStorage.getItem('score5Memory3x4');
var score6Memory3x4 = sessionStorage.getItem('score6Memory3x4');

var score1Memory4x5 = sessionStorage.getItem('score1Memory4x5');
var score2Memory4x5 = sessionStorage.getItem('score2Memory4x5');
var score3Memory4x5 = sessionStorage.getItem('score3Memory4x5');
var score4Memory4x5 = sessionStorage.getItem('score4Memory4x5');
var score5Memory4x5 = sessionStorage.getItem('score5Memory4x5');
var score6Memory4x5 = sessionStorage.getItem('score6Memory4x5');

var score1Memory5x6 = sessionStorage.getItem('score1Memory5x6');
var score2Memory5x6 = sessionStorage.getItem('score2Memory5x6');
var score3Memory5x6 = sessionStorage.getItem('score3Memory5x6');
var score4Memory5x6 = sessionStorage.getItem('score4Memory5x6');
var score5Memory5x6 = sessionStorage.getItem('score5Memory5x6');
var score6Memory5x6 = sessionStorage.getItem('score6Memory5x6');



var score1HTML;
var score2HTML;
var score3HTML;
var score4HTML;
var score5HTML;
var score6HTML;
var winAmountHTML;

var winAmountMemory3x4 = sessionStorage.getItem('winAmountMemory3x4');
var winAmountMemory4x5 = sessionStorage.getItem('winAmountMemory4x5');
var winAmountMemory5x6 = sessionStorage.getItem('winAmountMemory5x6');

var winAmountTimed3x4 = sessionStorage.getItem('winAmountTimed3x4');
var winAmountTimed4x5 = sessionStorage.getItem('winAmountTimed4x5');
var winAmountTimed5x6 = sessionStorage.getItem('winAmountTimed5x6');

var winAmountStandard3x4 = sessionStorage.getItem('winAmountStandard3x4');
var winAmountStandard4x5 = sessionStorage.getItem('winAmountStandard4x5');
var winAmountStandard5x6 = sessionStorage.getItem('winAmountStandard5x6');

var winAmount = sessionStorage.getItem('winAmount');
/////////////////////////////////////////////////VARIABLES VARIABLES VARIABLES/////////////////////////////////////////////////


//function to load game elements
function LoadGame() {

    boardTypeHTML = document.getElementById('boardType');
    boardValue = boardTypeHTML.getAttribute('value');
    scoresHeader = document.getElementById('scores_heading_text');
    scoreGameSizeHeader = document.getElementById('scores_game_size_text');

    score1HTML = document.getElementById('score1HTML');
    score2HTML = document.getElementById('score2HTML');
    score3HTML = document.getElementById('score3HTML');
    score4HTML = document.getElementById('score4HTML');
    score5HTML = document.getElementById('score5HTML');
    score6HTML = document.getElementById('score6HTML');

    winAmountHTML = document.getElementById('win_amount_HTML');

    if(boardValue == 12) {
                    
        sec = 60;
        
    } else if(boardValue == 20) { 
        
        sec = 120; 
        
    } else { 
        
        sec = 180;
        
    }
    
    //setting cardsLeft amount
    if(boardValue == 12) {

        cardsLeft = 12;
        scoreGameSizeHeader.innerHTML = "3x4"

        //if selected game mode is timed game mode
        if(gameMode == "timed") {

            if(boardValue == 12) { //if board value is 12 or board size is 3x4 set time to 1 min
                
                seconds = "00";
                minutes = "01";
                
            } else if(boardValue == 20) { //if board value is 20 or board size is 4x5 set time to 2 min
                
                seconds = "00";
                minutes = "02";
                
            } else { //if board value is 30 or board size is 5x6 set time to 3 min
                
                seconds = "00";
                minutes = "03";
                
            }

            bottomTabDisplay.innerHTML = "Time Left: " + minutes + ":" + seconds //set bottom display to "TimeLeft"
            scoresHeader.innerHTML = "Timed Mode" //set score header to "Timed Mode"

            if(score1Timed3x4 == null) { //if score1Timed3x4 is null
                score1HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score1HTML.innerHTML = score1Timed3x4 + " Cards Cleared"; //set score1 to score1Timed3x4
            }
            

            if(score2Timed3x4 == null) { //if score2Timed3x4 is null
                score2HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score2HTML.innerHTML = score2Timed3x4 + " Cards Cleared"; //set score2 to score2Timed3x4
            }
            

            if(score3Timed3x4 == null) { //if score3Timed3x4 is null
                score3HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score3HTML.innerHTML = score3Timed3x4 + " Cards Cleared"; //set score3 to score3Timed3x4
            }
            
            
            if(score4Timed3x4 == null) { //if score4Timed3x4 is null
                score4HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score4HTML.innerHTML = score4Timed3x4 + " Cards Cleared"; //set score4 to score4Timed3x4
            } 


            if(score5Timed3x4 == null) { //if score5Timed3x4 is null
                score5HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score5HTML.innerHTML = score5Timed3x4 + " Cards Cleared"; //set score5 to score5Timed3x4
            } 


            if(score6Timed3x4 == null) { //if score6Timed3x4 is null
                score6HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score6HTML.innerHTML = score6Timed3x4 + " Cards Cleared"; //set score6 to score6Timed3x4
            } 


            winAmountTimed3x4 = sessionStorage.getItem('winAmountTimed3x4');

            if(winAmountTimed3x4 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountTimed3x4;
            }

        
        } else if(gameMode == "memory") { //if selected game mode is memory game mode
            
            bottomTabDisplay.innerHTML = "Mismatches Made: " + mismatches
            scoresHeader.innerHTML = "Memory Mode" //set score header to "Memory Mode"


            if(score1Memory3x4 == null) { //if score1Memory3x4 is null
                score1HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score1Memory3x4 == 1) {
                    score1HTML.innerHTML = score1Memory3x4 + " Mismatch";
                } else {
                    score1HTML.innerHTML = score1Memory3x4 + " Mismatches";
                }
            }
            

            if(score2Memory3x4 == null) { //if score2Memory3x4 is null
                score2HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score2Memory3x4 == 1) {
                    score2HTML.innerHTML = score2Memory3x4 + " Mismatch";
                } else {
                    score2HTML.innerHTML = score2Memory3x4 + " Mismatches";
                }
            }
            

            if(score3Memory3x4 == null) { //if score3Memory3x4 is null
                score3HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score3Memory3x4 == 1) {
                    score3HTML.innerHTML = score3Memory3x4 + " Mismatch";
                } else {
                    score3HTML.innerHTML = score3Memory3x4 + " Mismatches";
                }
            }
            
            
            if(score4Memory3x4 == null) { //if score4Memory3x4 is null
                score4HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score4Memory3x4 == 1) {
                    score4HTML.innerHTML = score4Memory3x4 + " Mismatch";
                } else {
                    score4HTML.innerHTML = score4Memory3x4 + " Mismatches";
                }
            } 


            if(score5Memory3x4 == null) { //if score5Memory3x4 is null
                score5HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score5Memory3x4 == 1) {
                    score5HTML.innerHTML = score5Memory3x4 + " Mismatch";
                } else {
                    score5HTML.innerHTML = score5Memory3x4 + " Mismatches";
                }
            } 


            if(score6Memory3x4 == null) { //if score6Memory3x4 is null
                score6HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score6Memory3x4 == 1) {
                    score6HTML.innerHTML = score6Memory3x4 + " Mismatch";
                } else {
                    score6HTML.innerHTML = score6Memory3x4 + " Mismatches";
                }
            } 
        
            winAmountMemory3x4 = sessionStorage.getItem('winAmountMemory3x4');

            if(winAmountMemory3x4 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountMemory3x4;
            }

        }


    } else if(boardValue == 20) {

        cardsLeft = 20;
        scoreGameSizeHeader.innerHTML = "4x5"

        //if selected game mode is timed game mode
        if(gameMode == "timed") {

            if(boardValue == 12) { //if board value is 12 or board size is 3x4 set time to 1 min
                
                seconds = "00";
                minutes = "01";
                
            } else if(boardValue == 20) { //if board value is 20 or board size is 4x5 set time to 2 min
                
                seconds = "00";
                minutes = "02";
                
            } else { //if board value is 30 or board size is 5x6 set time to 3 min
                
                seconds = "00";
                minutes = "03";
                
            }

            bottomTabDisplay.innerHTML = "Time Left: " + minutes + ":" + seconds //set bottom display to "TimeLeft"
            scoresHeader.innerHTML = "Timed Mode" //set score header to "Timed Mode"

            if(score1Timed4x5 == null) { //if score1Timed4x5 is null
                score1HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score1HTML.innerHTML = score1Timed4x5 + " Cards Cleared"; //set score1 to score1Timed4x5
            }
            

            if(score2Timed4x5 == null) { //if score2Timed4x5 is null
                score2HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score2HTML.innerHTML = score2Timed4x5 + " Cards Cleared"; //set score2 to score2Timed4x5
            }
            

            if(score3Timed4x5 == null) { //if score3Timed4x5 is null
                score3HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score3HTML.innerHTML = score3Timed4x5 + " Cards Cleared"; //set score3 to score3Timed4x5
            }
            
            
            if(score4Timed4x5 == null) { //if score4Timed4x5 is null
                score4HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score4HTML.innerHTML = score4Timed4x5 + " Cards Cleared"; //set score4 to score4Timed4x5
            } 


            if(score5Timed4x5 == null) { //if score5Timed4x5 is null
                score5HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score5HTML.innerHTML = score5Timed4x5 + " Cards Cleared"; //set score5 to score5Timed4x5
            } 


            if(score6Timed4x5 == null) { //if score6Timed4x5 is null
                score6HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score6HTML.innerHTML = score6Timed4x5 + " Cards Cleared"; //set score6 to score6Timed4x5
            } 


            winAmountTimed4x5 = sessionStorage.getItem('winAmountTimed4x5');

            if(winAmountTimed4x5 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountTimed4x5;
            }

        
        } else if(gameMode == "memory") { //if selected game mode is memory game mode
            
            bottomTabDisplay.innerHTML = "Mismatches Made: " + mismatches
            scoresHeader.innerHTML = "Memory Mode" //set score header to "Memory Mode"


            if(score1Memory4x5 == null) { //if score1Memory4x5 is null
                score1HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score1Memory4x5 == 1) {
                    score1HTML.innerHTML = score1Memory4x5 + " Mismatch";
                } else {
                    score1HTML.innerHTML = score1Memory4x5 + " Mismatches";
                }
            }
            

            if(score2Memory4x5 == null) { //if score2Memory4x5 is null
                score2HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score2Memory4x5 == 1) {
                    score2HTML.innerHTML = score2Memory4x5 + " Mismatch";
                } else {
                    score2HTML.innerHTML = score2Memory4x5 + " Mismatches";
                }
            }
            

            if(score3Memory4x5 == null) { //if score3Memory4x5 is null
                score3HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score3Memory4x5 == 1) {
                    score3HTML.innerHTML = score3Memory4x5 + " Mismatch";
                } else {
                    score3HTML.innerHTML = score3Memory4x5 + " Mismatches";
                }
            }
            
            
            if(score4Memory4x5 == null) { //if score4Memory4x5 is null
                score4HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score4Memory4x5 == 1) {
                    score4HTML.innerHTML = score4Memory4x5 + " Mismatch";
                } else {
                    score4HTML.innerHTML = score4Memory4x5 + " Mismatches";
                }
            } 


            if(score5Memory4x5 == null) { //if score5Memory4x5 is null
                score5HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score5Memory4x5 == 1) {
                    score5HTML.innerHTML = score5Memory4x5 + " Mismatch";
                } else {
                    score5HTML.innerHTML = score5Memory4x5 + " Mismatches";
                }
            } 


            if(score6Memory4x5 == null) { //if score6Memory4x5 is null
                score6HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score6Memory4x5 == 1) {
                    score6HTML.innerHTML = score6Memory4x5 + " Mismatch";
                } else {
                    score6HTML.innerHTML = score6Memory4x5 + " Mismatches";
                }
            } 
        

            winAmountMemory4x5 = sessionStorage.getItem('winAmountMemory4x5');

            if(winAmountMemory4x5 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountMemory4x5;
            }


        }


    } else if(boardValue == 30) {

        cardsLeft = 30;
        scoreGameSizeHeader.innerHTML = "5x6"

        //if selected game mode is timed game mode
        if(gameMode == "timed") {

            if(boardValue == 12) { //if board value is 12 or board size is 3x4 set time to 1 min
                
                seconds = "00";
                minutes = "01";
                
            } else if(boardValue == 20) { //if board value is 20 or board size is 4x5 set time to 2 min
                
                seconds = "00";
                minutes = "02";
                
            } else { //if board value is 30 or board size is 5x6 set time to 3 min
                
                seconds = "00";
                minutes = "03";
                
            }

            bottomTabDisplay.innerHTML = "Time Left: " + minutes + ":" + seconds //set bottom display to "TimeLeft"
            scoresHeader.innerHTML = "Timed Mode" //set score header to "Timed Mode"

            if(score1Timed5x6 == null) { //if score1Timed5x6 is null
                score1HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score1HTML.innerHTML = score1Timed5x6 + " Cards Cleared"; //set score1 to score1Timed5x6
            }
            

            if(score2Timed5x6 == null) { //if score2Timed5x6 is null
                score2HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score2HTML.innerHTML = score2Timed5x6 + " Cards Cleared"; //set score2 to score2Timed5x6
            }
            

            if(score3Timed5x6 == null) { //if score3Timed5x6 is null
                score3HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score3HTML.innerHTML = score3Timed5x6 + " Cards Cleared"; //set score3 to score3Timed5x6
            }
            
            
            if(score4Timed5x6 == null) { //if score4Timed5x6 is null
                score4HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score4HTML.innerHTML = score4Timed5x6 + " Cards Cleared"; //set score4 to score4Timed5x6
            } 


            if(score5Timed5x6 == null) { //if score5Timed5x6 is null
                score5HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score5HTML.innerHTML = score5Timed5x6 + " Cards Cleared"; //set score5 to score5Timed5x6
            } 


            if(score6Timed5x6 == null) { //if score6Timed5x6 is null
                score6HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                score6HTML.innerHTML = score6Timed5x6 + " Cards Cleared"; //set score6 to score6Timed5x6
            } 


            winAmountTimed5x6 = sessionStorage.getItem('winAmountTimed5x6');

            if(winAmountTimed5x6 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountTimed5x6;
            }

        
        } else if(gameMode == "memory") { //if selected game mode is memory game mode
            
            bottomTabDisplay.innerHTML = "Mismatches Made: " + mismatches
            scoresHeader.innerHTML = "Memory Mode" //set score header to "Memory Mode"


            if(score1Memory5x6 == null) { //if score1Memory5x6 is null
                score1HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score1Memory5x6 == 1) {
                    score1HTML.innerHTML = score1Memory5x6 + " Mismatch";
                } else {
                    score1HTML.innerHTML = score1Memory5x6 + " Mismatches";
                }
            }
            

            if(score2Memory5x6 == null) { //if score2Memory5x6 is null
                score2HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score2Memory5x6 == 1) {
                    score2HTML.innerHTML = score2Memory5x6 + " Mismatch";
                } else {
                    score2HTML.innerHTML = score2Memory5x6 + " Mismatches";
                }
            }
            

            if(score3Memory5x6 == null) { //if score3Memory5x6 is null
                score3HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score3Memory5x6 == 1) {
                    score3HTML.innerHTML = score3Memory5x6 + " Mismatch";
                } else {
                    score3HTML.innerHTML = score3Memory5x6 + " Mismatches";
                }
            }
            
            
            if(score4Memory5x6 == null) { //if score4Memory5x6 is null
                score4HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score4Memory5x6 == 1) {
                    score4HTML.innerHTML = score4Memory5x6 + " Mismatch";
                } else {
                    score4HTML.innerHTML = score4Memory5x6 + " Mismatches";
                }
            } 


            if(score5Memory5x6 == null) { //if score5Memory5x6 is null
                score5HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score5Memory5x6 == 1) {
                    score5HTML.innerHTML = score5Memory5x6 + " Mismatch";
                } else {
                    score5HTML.innerHTML = score5Memory5x6 + " Mismatches";
                }
            } 


            if(score6Memory5x6 == null) { //if score6Memory5x6 is null
                score6HTML.innerHTML = "----"; //set innerHTML to "----"
            } else { //else
                if(score6Memory5x6 == 1) {
                    score6HTML.innerHTML = score6Memory5x6 + " Mismatch";
                } else {
                    score6HTML.innerHTML = score6Memory5x6 + " Mismatches";
                }
            } 
        

            winAmountMemory5x6 = sessionStorage.getItem('winAmountMemory5x6');

            if(winAmountMemory5x6 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountMemory5x6;
            }


        }

    }

    if(gameMode == "standard") { //if selected game mode is standard game mode
    
        bottomTabDisplay.innerHTML = "Cards Left: " + cardsLeft;
        scoresHeader.innerHTML = "Standard Mode" //set score header to "Standard Mode"

        score1HTML.innerHTML = "";
        score2HTML.innerHTML = "No Scores In Standard Mode";
        score3HTML.innerHTML = "";
        score4HTML.innerHTML = "";
        score5HTML.innerHTML = "";
        score6HTML.innerHTML = "";

        if(boardValue == 12) {

            winAmountStandard3x4 = sessionStorage.getItem('winAmountStandard3x4');

            if(winAmountStandard3x4 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountStandard3x4;
            }

        } else if(boardValue == 20) {

            winAmountStandard4x5 = sessionStorage.getItem('winAmountStandard4x5');

            if(winAmountStandard4x5 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountStandard4x5;
            }

        } else {

            winAmountStandard5x6 = sessionStorage.getItem('winAmountStandard5x6');

            if(winAmountStandard5x6 == null) {
                winAmountHTML.innerHTML = "Games Completed: 0";
            } else {
                winAmountHTML.innerHTML = "Games Completed: " + winAmountStandard5x6;
            }

        }
    
    }

    generalButton = document.getElementById('game_button'); //set generalButton to HTML button
    generalButton.innerHTML = "Start Game"; //set generalButton text to start game

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

    //variable for the rules header in HTML
    var rulesheader = document.getElementById('game_mode_rules_header');

    //variables for the list of rules
    var list_item_1 = document.getElementById("list_item_1");
    var list_item_2 = document.getElementById("list_item_2");
    var list_item_3 = document.getElementById("list_item_3");
    var list_item_4 = document.getElementById("list_item_4");

    if(gameMode == "timed") { //if game mode is timed game mode set rules to timed game mode rules

        rulesheader.innerHTML = "Timed Game"

        list_item_1.innerHTML = "Clear as many cards as possible before the time runs out";
        list_item_2.innerHTML = "Every time you clear a board you get extra time";
        list_item_3.innerHTML = "3 board sizes, each with different time limits";
        list_item_4.innerHTML = "Please Have FUN!!";

    } else if(gameMode == "memory") { //if game mode is memory game mode set rules to memory game mode rules

        rulesheader.innerHTML = "Memory Game"

        list_item_1.innerHTML = "Remember as much as possible in 5 seconds";
        list_item_2.innerHTML = "Make as little mismatches as possible";
        list_item_3.innerHTML = "3 board sizes, the bigger the board the harder to remember";
        list_item_4.innerHTML = "Please Have FUN!!";

    } else { //if game mode is standard game mode set rules to standard game mode rules

        rulesheader.innerHTML = "Standard Game"

        list_item_1.innerHTML = "No time limit";
        list_item_2.innerHTML = "No mismatch count";
        list_item_3.innerHTML = "Just play until board is empty";
        list_item_4.innerHTML = "Please Have FUN!!";

    }


    //variables for the types of cards
    var numbersBoard  = document.getElementById('numbers_radio');
    var picturesBoard  = document.getElementById('pictures_radio');
    var colorsBoard  = document.getElementById('colors_radio');

    if(gameType == "numbers") {
        numbersBoard.checked = true;
    } else if(gameType == "pictures") {
        picturesBoard.checked = true;
    } else if(gameType == "colors") {
        colorsBoard.checked = true;
    }

}


//function to select which function to call
function GameButton() {

    if(gameActive == false) { //if gameActive is false

        GenerateBoard(); //call GenerateBoard() function
        generalButton.innerHTML = "New Game"; //set generalButton text to new game

    } else { //if gameActive is true

        NewGame(); //call NewGame() function

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

    ShowBoard(); //calling the show board function

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
    
    setTimeout(function() { //time out function
            
        gameActive = true; //set gameActive to true
        
    }, 6000); //setting the timeout time to 5 seconds

}



//function for when a card is clicked on
function CardOnClick(selectedCard) {

    if(gameActive == true && totalCardsSelected != 2 && win != true) { //if game is active and total cards selected is not 2 and win is not true

        if(selectedCard.getAttribute("value") != -1) { //if card is disabled 

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
    
                gameActive == false;
        
                if(AreCardsTheSame(cardOneValue, cardTwoValue)) { //if statement that calls on the AreCardsTheSame() function
        
                    if(gameMode == "timed") {
                        setTimeout(function() { RemoveCards(cardOne, cardTwo); }, 900); //setTimeout function to call on the RemoveCards() function set on 0.9 seconds
                    } else {
                        setTimeout(function() { RemoveCards(cardOne, cardTwo); }, 1200); //setTimeout function to call on the RemoveCards() function set on 1.2 seconds
                    }

                    
            
                } else { //if the cards are not the same

                    if(gameMode == "memory") { //game mode is memory game mode
                        
                        mismatches++ //increase mismatches by 1
                        bottomTabDisplay.innerHTML = "Mismatches Made: " + mismatches; //set bottomTabDisplay to display mismatches made
                        
                    }

                    if(gameMode == "timed") {

                        setTimeout(function() { //setTimeout function to flip card two cards selected face down
                        
                            FlipCard(cardOne);
                            FlipCard(cardTwo);
                            
                        }, 900); //set time to 0.9 seconds
        
                        setTimeout(function() { ResetCards(); }, 950); //setTimeout function to call ResetCards() function after 0.95 seconds

                    } else {

                        setTimeout(function() { //setTimeout function to flip card two cards selected face down
                        
                            FlipCard(cardOne);
                            FlipCard(cardTwo);
                            
                        }, 1200); //set time to 1.2 seconds
        
                        setTimeout(function() { ResetCards(); }, 1250); //setTimeout function to call ResetCards() function after 1.25 seconds

                    }

                }
        
            }
    
        } 

    }
    
}



//function to show the cards on the board
function ShowBoard() {
    
    for(let i = 1; i <= boardValue; i++) { //for loop to iterate through all cards

        var ID = "c" + i;
        var cardID = document.getElementById(ID); //getting card ID 
        cardID.style.opacity = 1; //setting cards opacity to 1 to show the card

        var bID = "c" + i + "b";
        var cardBackID = document.getElementById(bID); //getting card back ID 
        cardBackID.style.cursor = "pointer"; //setting cursor to pointer

        var fID = "c" + i + "f";
        var cardFrontID = document.getElementById(fID); //getting card front ID 
        cardFrontID.style.cursor = "pointer"; //setting cursor to pointer

    }

    
    if(gameActive == false) { //if gameActive is false
        
        if(gameMode == "timed") { //if gameMode is timed

            if(addedTimeBoard == false) { //if addedTimeBoard is false
        
                timer = setInterval( function() { //set variable timer to setInterval() function to count down
                    
                    seconds = setTime(--sec%60); //set seconds to specified time
                    minutes = setTime(parseInt(sec/60,10)); //set minues to specified time

                    bottomTabDisplay.innerHTML = "Time Left: " + minutes + ":" + seconds //set bottom display to "TimeLeft"

                    if(sec < 11) { //if sec is less than 11

                        bottomTabDisplay.style.color = "red"; //set bottom display color to "red"

                    } else if(sec > 10 && bottomTabDisplay.style.color == "red") { //if sec is more than 10 and bottomTabDisplay color is red

                        bottomTabDisplay.style.color = "white"; //set bottom display color to "red"

                    }
        
                    if(sec == 0) { //if sec is 0
                        
                        setTimeout(function() { FlipGame() }, 1500);  //setTimout() function to call FlipGame() function to 1.5 seconds
                        clearInterval(timer); //clearInterval on timer variable
                        win = true; //set win to true
                        
                        winngingText.innerHTML = "You cleared " + cardsCleared + " cards"; //set winning text to amount of cards cleared

                        if(boardValue == 12) {

                            if(score1Timed3x4 == null) { //if score1Timed3x4 is null

                                sessionStorage.setItem('score1Timed3x4', cardsCleared); //set sessionStorage item 'score1Timed3x4' to cardsCleared
                
                            } else if(score2Timed3x4 == null) { //if score2Timed3x4 is null
                                
                                sessionStorage.setItem('score2Timed3x4', cardsCleared); //set sessionStorage item 'score2Timed3x4' to cardsCleared
                
                            } else if(score3Timed3x4 == null) { //if score3Timed3x4 is null
                
                                sessionStorage.setItem('score3Timed3x4', cardsCleared); //set sessionStorage item 'score3Timed3x4' to cardsCleared
                                
                            } else if(score4Timed3x4 == null) { //if score4Timed3x4 is null
                
                                sessionStorage.setItem('score4Timed3x4', cardsCleared); //set sessionStorage item 'score4Timed3x4' to cardsCleared
                
                            } else if(score5Timed3x4 == null) { //if score5Timed3x4 is null
                
                                sessionStorage.setItem('score5Timed3x4', cardsCleared); //set sessionStorage item 'score5Timed3x4' to cardsCleared
                
                            } else if(score6Timed3x4 == null) { //if score6Timed3x4 is null
                
                                sessionStorage.setItem('score6Timed3x4', cardsCleared); //set sessionStorage item 'score6Timed3x4' to cardsCleared
    
                            } 
                            
                            else if(parseInt(score1Timed3x4) < cardsCleared) { //if score1Timed3x4 is greater than cardsCleared
    
                                sessionStorage.setItem('score1Timed3x4', cardsCleared); //set sessionStorage item 'score1Timed3x4' to score2Timed3x4
                                sessionStorage.setItem('score2Timed3x4', score1Timed3x4); //set sessionStorage item 'score2Timed3x4' to score1Timed3x4
                                sessionStorage.setItem('score3Timed3x4', score2Timed3x4); //set sessionStorage item 'score3Timed3x4' to score2Timed3x4
                                sessionStorage.setItem('score4Timed3x4', score3Timed3x4); //set sessionStorage item 'score4Timed3x4' to score3Timed3x4
                                sessionStorage.setItem('score5Timed3x4', score4Timed3x4); //set sessionStorage item 'score5Timed3x4' to score4Timed3x4
                                sessionStorage.setItem('score6Timed3x4', score5Timed3x4); //set sessionStorage item 'score6Timed3x4' to score5Timed3x4
                                
                            } else if(parseInt(score2Timed3x4) < cardsCleared) { //if score2Timed3x4 is greater than cardsCleared
                
                                sessionStorage.setItem('score2Timed3x4', cardsCleared); //set sessionStorage item 'score2Timed3x4' to cardsCleared
                                sessionStorage.setItem('score3Timed3x4', score2Timed3x4); //set sessionStorage item 'score3Timed3x4' to score2Timed3x4
                                sessionStorage.setItem('score4Timed3x4', score3Timed3x4); //set sessionStorage item 'score4Timed3x4' to score3Timed3x4
                                sessionStorage.setItem('score5Timed3x4', score4Timed3x4); //set sessionStorage item 'score5Timed3x4' to score4Timed3x4
                                sessionStorage.setItem('score6Timed3x4', score5Timed3x4); //set sessionStorage item 'score6Timed3x4' to score5Timed3x4
                                
                            } else if(parseInt(score3Timed3x4) < cardsCleared) { //if score3Timed3x4 is greater than cardsCleared
                
                                sessionStorage.setItem('score3Timed3x4', cardsCleared); //set sessionStorage item 'score3Timed3x4' to cardsCleared
                                sessionStorage.setItem('score4Timed3x4', score3Timed3x4); //set sessionStorage item 'score4Timed3x4' to score3Timed3x4
                                sessionStorage.setItem('score5Timed3x4', score4Timed3x4); //set sessionStorage item 'score5Timed3x4' to score4Timed3x4
                                sessionStorage.setItem('score6Timed3x4', score5Timed3x4); //set sessionStorage item 'score6Timed3x4' to score5Timed3x4
                                
                            } else if(parseInt(score4Timed3x4) < cardsCleared) { //if score4Timed3x4 is greater than cardsCleared
                
                                sessionStorage.setItem('score4Timed3x4', cardsCleared); //set sessionStorage item 'score4Timed3x4' to cardsCleared
                                sessionStorage.setItem('score5Timed3x4', score4Timed3x4); //set sessionStorage item 'score5Timed3x4' to score4Timed3x4
                                sessionStorage.setItem('score6Timed3x4', score5Timed3x4); //set sessionStorage item 'score6Timed3x4' to score5Timed3x4
                                
                            } else if(parseInt(score5Timed3x4) < cardsCleared) { //if score5Timed3x4 is greater than cardsCleared
                
                                sessionStorage.setItem('score5Timed3x4', cardsCleared); //set sessionStorage item 'score5Timed3x4' to cardsCleared
                                sessionStorage.setItem('score6Timed3x4', score5Timed3x4); //set sessionStorage item 'score6Timed3x4' to score5Timed3x4
                                
                            } else if(parseInt(score6Timed3x4) < cardsCleared) { //if score6Timed3x4 is greater than cardsCleared
                
                                sessionStorage.setItem('score6Timed3x4', cardsCleared); //set sessionStorage item 'score6Timed3x4' to cardsCleared
                                
                            }
                
                            
                            for(var i = 0; i < 3; i++) { //for loop
                
                                score1Timed3x4 = sessionStorage.getItem('score1Timed3x4'); //initialize score1Timed3x4 again
                                score2Timed3x4 = sessionStorage.getItem('score2Timed3x4'); //initialize score2Timed3x4 again
                                score3Timed3x4 = sessionStorage.getItem('score3Timed3x4'); //initialize score3Timed3x4 again
                                score4Timed3x4 = sessionStorage.getItem('score4Timed3x4'); //initialize score4Timed3x4 again
                                score5Timed3x4 = sessionStorage.getItem('score5Timed3x4'); //initialize score5Timed3x4 again
                                score6Timed3x4 = sessionStorage.getItem('score6Timed3x4'); //initialize score6Timed3x4 again
                
                                if(parseInt(score1Timed3x4) < parseInt(score2Timed3x4) && score2Timed3x4 != null) { //if score1Timed3x4 is less than score2Timed3x4 and score2Timed3x4 is not null
                
                                    sessionStorage.setItem('score1Timed3x4', score2Timed3x4); //set sessionStorage item 'score1Timed3x4' to score2Timed3x4
                                    sessionStorage.setItem('score2Timed3x4', score1Timed3x4); //set sessionStorage item 'score2Timed3x4' to score1Timed3x4
                    
                                } else if(parseInt(score2Timed3x4) < parseInt(score3Timed3x4) && score3Timed3x4 != null) { //if score2Timed3x4 is less than score3Timed3x4 and score3Timed3x4 is not null
                    
                                    sessionStorage.setItem('score2Timed3x4', score3Timed3x4); //set sessionStorage item 'score2Timed3x4' to score3Timed3x4
                                    sessionStorage.setItem('score3Timed3x4', score2Timed3x4); //set sessionStorage item 'score3Timed3x4' to score2Timed3x4
                
                                } else if(parseInt(score3Timed3x4) < parseInt(score4Timed3x4) && score4Timed3x4 != null) { //if score3Timed3x4 is less than score4Timed3x4 and score4Timed3x4 is not null
                
                                    sessionStorage.setItem('score3Timed3x4', score4Timed3x4); //set sessionStorage item 'score3Timed3x4' to score4Timed3x4
                                    sessionStorage.setItem('score4Timed3x4', score3Timed3x4); //set sessionStorage item 'score4Timed3x4' to score3Timed3x4
                
                                } else if(parseInt(score4Timed3x4) < parseInt(score5Timed3x4) && score5Timed3x4 != null) { //if score4Timed3x4 is less than score4Timed3x4 and score5Timed3x4 is not null
                
                                    sessionStorage.setItem('score4Timed3x4', score5Timed3x4); //set sessionStorage item 'score4Timed3x4' to score5Timed3x4
                                    sessionStorage.setItem('score5Timed3x4', score4Timed3x4); //set sessionStorage item 'score5Timed3x4' to score4Timed3x4
                
                                }  else if(parseInt(score5Timed3x4) < parseInt(score6Timed3x4) && score6Timed3x4 != null) { //if score5Timed3x4 is less than score6Timed3x4 and score6Timed3x4 is not null
                
                                    sessionStorage.setItem('score5Timed3x4', score6Timed3x4); //set sessionStorage item 'score5Timed3x4' to score6Timed3x4
                                    sessionStorage.setItem('score6Timed3x4', score5Timed3x4); //set sessionStorage item 'score6Timed3x4' to score5Timed3x4
                
                                }
                
                            }
    
    
                            score1Timed3x4 = sessionStorage.getItem('score1Timed3x4'); //initialize score1Timed3x4 again
                            score2Timed3x4 = sessionStorage.getItem('score2Timed3x4'); //initialize score2Timed3x4 again
                            score3Timed3x4 = sessionStorage.getItem('score3Timed3x4'); //initialize score3Timed3x4 again
                            score4Timed3x4 = sessionStorage.getItem('score4Timed3x4'); //initialize score4Timed3x4 again
                            score5Timed3x4 = sessionStorage.getItem('score5Timed3x4'); //initialize score5Timed3x4 again
                            score6Timed3x4 = sessionStorage.getItem('score6Timed3x4'); //initialize score6Timed3x4 again
    
                
                            //if score is not null set score again with " Cards Cleared"
                            if(score1Timed3x4 != null) { score1HTML.innerHTML = score1Timed3x4 + " Cards Cleared"; }
                            if(score2Timed3x4 != null) { score2HTML.innerHTML = score2Timed3x4 + " Cards Cleared"; }
                            if(score3Timed3x4 != null) { score3HTML.innerHTML = score3Timed3x4 + " Cards Cleared"; }
                            if(score4Timed3x4 != null) { score4HTML.innerHTML = score4Timed3x4 + " Cards Cleared"; }
                            if(score5Timed3x4 != null) { score5HTML.innerHTML = score5Timed3x4 + " Cards Cleared"; }
                            if(score6Timed3x4 != null) { score6HTML.innerHTML = score6Timed3x4 + " Cards Cleared"; }


                            winAmountTimed3x4++
                            sessionStorage.setItem('winAmountTimed3x4', winAmountTimed3x4);
                            winAmountTimed3x4 = sessionStorage.getItem('winAmountTimed3x4');
                            winAmountHTML.innerHTML = "Games Completed: " + winAmountTimed3x4;


                        } else if(boardValue == 20) {

                            if(score1Timed4x5 == null) { //if score1Timed4x5 is null

                                sessionStorage.setItem('score1Timed4x5', cardsCleared); //set sessionStorage item 'score1Timed4x5' to cardsCleared
                
                            } else if(score2Timed4x5 == null) { //if score2Timed4x5 is null
                                
                                sessionStorage.setItem('score2Timed4x5', cardsCleared); //set sessionStorage item 'score2Timed4x5' to cardsCleared
                
                            } else if(score3Timed4x5 == null) { //if score3Timed4x5 is null
                
                                sessionStorage.setItem('score3Timed4x5', cardsCleared); //set sessionStorage item 'score3Timed4x5' to cardsCleared
                                
                            } else if(score4Timed4x5 == null) { //if score4Timed4x5 is null
                
                                sessionStorage.setItem('score4Timed4x5', cardsCleared); //set sessionStorage item 'score4Timed4x5' to cardsCleared
                
                            } else if(score5Timed4x5 == null) { //if score5Timed4x5 is null
                
                                sessionStorage.setItem('score5Timed4x5', cardsCleared); //set sessionStorage item 'score5Timed4x5' to cardsCleared
                
                            } else if(score6Timed4x5 == null) { //if score6Timed4x5 is null
                
                                sessionStorage.setItem('score6Timed4x5', cardsCleared); //set sessionStorage item 'score6Timed4x5' to cardsCleared
    
                            } 
                            
                            else if(parseInt(score1Timed4x5) < cardsCleared) { //if score1Timed4x5 is greater than cardsCleared
    
                                sessionStorage.setItem('score1Timed4x5', cardsCleared); //set sessionStorage item 'score1Timed4x5' to score2Timed4x5
                                sessionStorage.setItem('score2Timed4x5', score1Timed4x5); //set sessionStorage item 'score2Timed4x5' to score1Timed4x5
                                sessionStorage.setItem('score3Timed4x5', score2Timed4x5); //set sessionStorage item 'score3Timed4x5' to score2Timed4x5
                                sessionStorage.setItem('score4Timed4x5', score3Timed4x5); //set sessionStorage item 'score4Timed4x5' to score3Timed4x5
                                sessionStorage.setItem('score5Timed4x5', score4Timed4x5); //set sessionStorage item 'score5Timed4x5' to score4Timed4x5
                                sessionStorage.setItem('score6Timed4x5', score5Timed4x5); //set sessionStorage item 'score6Timed4x5' to score5Timed4x5
                                
                            } else if(parseInt(score2Timed4x5) < cardsCleared) { //if score2Timed4x5 is greater than cardsCleared
                
                                sessionStorage.setItem('score2Timed4x5', cardsCleared); //set sessionStorage item 'score2Timed4x5' to cardsCleared
                                sessionStorage.setItem('score3Timed4x5', score2Timed4x5); //set sessionStorage item 'score3Timed4x5' to score2Timed4x5
                                sessionStorage.setItem('score4Timed4x5', score3Timed4x5); //set sessionStorage item 'score4Timed4x5' to score3Timed4x5
                                sessionStorage.setItem('score5Timed4x5', score4Timed4x5); //set sessionStorage item 'score5Timed4x5' to score4Timed4x5
                                sessionStorage.setItem('score6Timed4x5', score5Timed4x5); //set sessionStorage item 'score6Timed4x5' to score5Timed4x5
                                
                            } else if(parseInt(score3Timed4x5) < cardsCleared) { //if score3Timed4x5 is greater than cardsCleared
                
                                sessionStorage.setItem('score3Timed4x5', cardsCleared); //set sessionStorage item 'score3Timed4x5' to cardsCleared
                                sessionStorage.setItem('score4Timed4x5', score3Timed4x5); //set sessionStorage item 'score4Timed4x5' to score3Timed4x5
                                sessionStorage.setItem('score5Timed4x5', score4Timed4x5); //set sessionStorage item 'score5Timed4x5' to score4Timed4x5
                                sessionStorage.setItem('score6Timed4x5', score5Timed4x5); //set sessionStorage item 'score6Timed4x5' to score5Timed4x5
                                
                            } else if(parseInt(score4Timed4x5) < cardsCleared) { //if score4Timed4x5 is greater than cardsCleared
                
                                sessionStorage.setItem('score4Timed4x5', cardsCleared); //set sessionStorage item 'score4Timed4x5' to cardsCleared
                                sessionStorage.setItem('score5Timed4x5', score4Timed4x5); //set sessionStorage item 'score5Timed4x5' to score4Timed4x5
                                sessionStorage.setItem('score6Timed4x5', score5Timed4x5); //set sessionStorage item 'score6Timed4x5' to score5Timed4x5
                                
                            } else if(parseInt(score5Timed4x5) < cardsCleared) { //if score5Timed4x5 is greater than cardsCleared
                
                                sessionStorage.setItem('score5Timed4x5', cardsCleared); //set sessionStorage item 'score5Timed4x5' to cardsCleared
                                sessionStorage.setItem('score6Timed4x5', score5Timed4x5); //set sessionStorage item 'score6Timed4x5' to score5Timed4x5
                                
                            } else if(parseInt(score6Timed4x5) < cardsCleared) { //if score6Timed4x5 is greater than cardsCleared
                
                                sessionStorage.setItem('score6Timed4x5', cardsCleared); //set sessionStorage item 'score6Timed4x5' to cardsCleared
                                
                            }
                
                            
                            for(var i = 0; i < 3; i++) { //for loop
                
                                score1Timed4x5 = sessionStorage.getItem('score1Timed4x5'); //initialize score1Timed4x5 again
                                score2Timed4x5 = sessionStorage.getItem('score2Timed4x5'); //initialize score2Timed4x5 again
                                score3Timed4x5 = sessionStorage.getItem('score3Timed4x5'); //initialize score3Timed4x5 again
                                score4Timed4x5 = sessionStorage.getItem('score4Timed4x5'); //initialize score4Timed4x5 again
                                score5Timed4x5 = sessionStorage.getItem('score5Timed4x5'); //initialize score5Timed4x5 again
                                score6Timed4x5 = sessionStorage.getItem('score6Timed4x5'); //initialize score6Timed4x5 again
                
                                if(parseInt(score1Timed4x5) < parseInt(score2Timed4x5) && score2Timed4x5 != null) { //if score1Timed4x5 is less than score2Timed4x5 and score2Timed4x5 is not null
                
                                    sessionStorage.setItem('score1Timed4x5', score2Timed4x5); //set sessionStorage item 'score1Timed4x5' to score2Timed4x5
                                    sessionStorage.setItem('score2Timed4x5', score1Timed4x5); //set sessionStorage item 'score2Timed4x5' to score1Timed4x5
                    
                                } else if(parseInt(score2Timed4x5) < parseInt(score3Timed4x5) && score3Timed4x5 != null) { //if score2Timed4x5 is less than score3Timed4x5 and score3Timed4x5 is not null
                    
                                    sessionStorage.setItem('score2Timed4x5', score3Timed4x5); //set sessionStorage item 'score2Timed4x5' to score3Timed4x5
                                    sessionStorage.setItem('score3Timed4x5', score2Timed4x5); //set sessionStorage item 'score3Timed4x5' to score2Timed4x5
                
                                } else if(parseInt(score3Timed4x5) < parseInt(score4Timed4x5) && score4Timed4x5 != null) { //if score3Timed4x5 is less than score4Timed4x5 and score4Timed4x5 is not null
                
                                    sessionStorage.setItem('score3Timed4x5', score4Timed4x5); //set sessionStorage item 'score3Timed4x5' to score4Timed4x5
                                    sessionStorage.setItem('score4Timed4x5', score3Timed4x5); //set sessionStorage item 'score4Timed4x5' to score3Timed4x5
                
                                } else if(parseInt(score4Timed4x5) < parseInt(score5Timed4x5) && score5Timed4x5 != null) { //if score4Timed4x5 is less than score4Timed4x5 and score5Timed4x5 is not null
                
                                    sessionStorage.setItem('score4Timed4x5', score5Timed4x5); //set sessionStorage item 'score4Timed4x5' to score5Timed4x5
                                    sessionStorage.setItem('score5Timed4x5', score4Timed4x5); //set sessionStorage item 'score5Timed4x5' to score4Timed4x5
                
                                }  else if(parseInt(score5Timed4x5) < parseInt(score6Timed4x5) && score6Timed4x5 != null) { //if score5Timed4x5 is less than score6Timed4x5 and score6Timed4x5 is not null
                
                                    sessionStorage.setItem('score5Timed4x5', score6Timed4x5); //set sessionStorage item 'score5Timed4x5' to score6Timed4x5
                                    sessionStorage.setItem('score6Timed4x5', score5Timed4x5); //set sessionStorage item 'score6Timed4x5' to score5Timed4x5
                
                                }
                
                            }
    
    
                            score1Timed4x5 = sessionStorage.getItem('score1Timed4x5'); //initialize score1Timed4x5 again
                            score2Timed4x5 = sessionStorage.getItem('score2Timed4x5'); //initialize score2Timed4x5 again
                            score3Timed4x5 = sessionStorage.getItem('score3Timed4x5'); //initialize score3Timed4x5 again
                            score4Timed4x5 = sessionStorage.getItem('score4Timed4x5'); //initialize score4Timed4x5 again
                            score5Timed4x5 = sessionStorage.getItem('score5Timed4x5'); //initialize score5Timed4x5 again
                            score6Timed4x5 = sessionStorage.getItem('score6Timed4x5'); //initialize score6Timed4x5 again
    
                
                            //if score is not null set score again with " Cards Cleared"
                            if(score1Timed4x5 != null) { score1HTML.innerHTML = score1Timed4x5 + " Cards Cleared"; }
                            if(score2Timed4x5 != null) { score2HTML.innerHTML = score2Timed4x5 + " Cards Cleared"; }
                            if(score3Timed4x5 != null) { score3HTML.innerHTML = score3Timed4x5 + " Cards Cleared"; }
                            if(score4Timed4x5 != null) { score4HTML.innerHTML = score4Timed4x5 + " Cards Cleared"; }
                            if(score5Timed4x5 != null) { score5HTML.innerHTML = score5Timed4x5 + " Cards Cleared"; }
                            if(score6Timed4x5 != null) { score6HTML.innerHTML = score6Timed4x5 + " Cards Cleared"; }


                            winAmountTimed4x5++
                            sessionStorage.setItem('winAmountTimed4x5', winAmountTimed4x5);
                            winAmountTimed4x5 = sessionStorage.getItem('winAmountTimed4x5');
                            winAmountHTML.innerHTML = "Games Completed: " + winAmountTimed4x5;


                        } else {

                            if(score1Timed5x6 == null) { //if score1Timed5x6 is null

                                sessionStorage.setItem('score1Timed5x6', cardsCleared); //set sessionStorage item 'score1Timed5x6' to cardsCleared
                
                            } else if(score2Timed5x6 == null) { //if score2Timed5x6 is null
                                
                                sessionStorage.setItem('score2Timed5x6', cardsCleared); //set sessionStorage item 'score2Timed5x6' to cardsCleared
                
                            } else if(score3Timed5x6 == null) { //if score3Timed5x6 is null
                
                                sessionStorage.setItem('score3Timed5x6', cardsCleared); //set sessionStorage item 'score3Timed5x6' to cardsCleared
                                
                            } else if(score4Timed5x6 == null) { //if score4Timed5x6 is null
                
                                sessionStorage.setItem('score4Timed5x6', cardsCleared); //set sessionStorage item 'score4Timed5x6' to cardsCleared
                
                            } else if(score5Timed5x6 == null) { //if score5Timed5x6 is null
                
                                sessionStorage.setItem('score5Timed5x6', cardsCleared); //set sessionStorage item 'score5Timed5x6' to cardsCleared
                
                            } else if(score6Timed5x6 == null) { //if score6Timed5x6 is null
                
                                sessionStorage.setItem('score6Timed5x6', cardsCleared); //set sessionStorage item 'score6Timed5x6' to cardsCleared
    
                            } 
                            
                            else if(parseInt(score1Timed5x6) < cardsCleared) { //if score1Timed5x6 is greater than cardsCleared
    
                                sessionStorage.setItem('score1Timed5x6', cardsCleared); //set sessionStorage item 'score1Timed5x6' to score2Timed5x6
                                sessionStorage.setItem('score2Timed5x6', score1Timed5x6); //set sessionStorage item 'score2Timed5x6' to score1Timed5x6
                                sessionStorage.setItem('score3Timed5x6', score2Timed5x6); //set sessionStorage item 'score3Timed5x6' to score2Timed5x6
                                sessionStorage.setItem('score4Timed5x6', score3Timed5x6); //set sessionStorage item 'score4Timed5x6' to score3Timed5x6
                                sessionStorage.setItem('score5Timed5x6', score4Timed5x6); //set sessionStorage item 'score5Timed5x6' to score4Timed5x6
                                sessionStorage.setItem('score6Timed5x6', score5Timed5x6); //set sessionStorage item 'score6Timed5x6' to score5Timed5x6
                                
                            } else if(parseInt(score2Timed5x6) < cardsCleared) { //if score2Timed5x6 is greater than cardsCleared
                
                                sessionStorage.setItem('score2Timed5x6', cardsCleared); //set sessionStorage item 'score2Timed5x6' to cardsCleared
                                sessionStorage.setItem('score3Timed5x6', score2Timed5x6); //set sessionStorage item 'score3Timed5x6' to score2Timed5x6
                                sessionStorage.setItem('score4Timed5x6', score3Timed5x6); //set sessionStorage item 'score4Timed5x6' to score3Timed5x6
                                sessionStorage.setItem('score5Timed5x6', score4Timed5x6); //set sessionStorage item 'score5Timed5x6' to score4Timed5x6
                                sessionStorage.setItem('score6Timed5x6', score5Timed5x6); //set sessionStorage item 'score6Timed5x6' to score5Timed5x6
                                
                            } else if(parseInt(score3Timed5x6) < cardsCleared) { //if score3Timed5x6 is greater than cardsCleared
                
                                sessionStorage.setItem('score3Timed5x6', cardsCleared); //set sessionStorage item 'score3Timed5x6' to cardsCleared
                                sessionStorage.setItem('score4Timed5x6', score3Timed5x6); //set sessionStorage item 'score4Timed5x6' to score3Timed5x6
                                sessionStorage.setItem('score5Timed5x6', score4Timed5x6); //set sessionStorage item 'score5Timed5x6' to score4Timed5x6
                                sessionStorage.setItem('score6Timed5x6', score5Timed5x6); //set sessionStorage item 'score6Timed5x6' to score5Timed5x6
                                
                            } else if(parseInt(score4Timed5x6) < cardsCleared) { //if score4Timed5x6 is greater than cardsCleared
                
                                sessionStorage.setItem('score4Timed5x6', cardsCleared); //set sessionStorage item 'score4Timed5x6' to cardsCleared
                                sessionStorage.setItem('score5Timed5x6', score4Timed5x6); //set sessionStorage item 'score5Timed5x6' to score4Timed5x6
                                sessionStorage.setItem('score6Timed5x6', score5Timed5x6); //set sessionStorage item 'score6Timed5x6' to score5Timed5x6
                                
                            } else if(parseInt(score5Timed5x6) < cardsCleared) { //if score5Timed5x6 is greater than cardsCleared
                
                                sessionStorage.setItem('score5Timed5x6', cardsCleared); //set sessionStorage item 'score5Timed5x6' to cardsCleared
                                sessionStorage.setItem('score6Timed5x6', score5Timed5x6); //set sessionStorage item 'score6Timed5x6' to score5Timed5x6
                                
                            } else if(parseInt(score6Timed5x6) < cardsCleared) { //if score6Timed5x6 is greater than cardsCleared
                
                                sessionStorage.setItem('score6Timed5x6', cardsCleared); //set sessionStorage item 'score6Timed5x6' to cardsCleared
                                
                            }
                
                            
                            for(var i = 0; i < 3; i++) { //for loop
                
                                score1Timed5x6 = sessionStorage.getItem('score1Timed5x6'); //initialize score1Timed5x6 again
                                score2Timed5x6 = sessionStorage.getItem('score2Timed5x6'); //initialize score2Timed5x6 again
                                score3Timed5x6 = sessionStorage.getItem('score3Timed5x6'); //initialize score3Timed5x6 again
                                score4Timed5x6 = sessionStorage.getItem('score4Timed5x6'); //initialize score4Timed5x6 again
                                score5Timed5x6 = sessionStorage.getItem('score5Timed5x6'); //initialize score5Timed5x6 again
                                score6Timed5x6 = sessionStorage.getItem('score6Timed5x6'); //initialize score6Timed5x6 again
                
                                if(parseInt(score1Timed5x6) < parseInt(score2Timed5x6) && score2Timed5x6 != null) { //if score1Timed5x6 is less than score2Timed5x6 and score2Timed5x6 is not null
                
                                    sessionStorage.setItem('score1Timed5x6', score2Timed5x6); //set sessionStorage item 'score1Timed5x6' to score2Timed5x6
                                    sessionStorage.setItem('score2Timed5x6', score1Timed5x6); //set sessionStorage item 'score2Timed5x6' to score1Timed5x6
                    
                                } else if(parseInt(score2Timed5x6) < parseInt(score3Timed5x6) && score3Timed5x6 != null) { //if score2Timed5x6 is less than score3Timed5x6 and score3Timed5x6 is not null
                    
                                    sessionStorage.setItem('score2Timed5x6', score3Timed5x6); //set sessionStorage item 'score2Timed5x6' to score3Timed5x6
                                    sessionStorage.setItem('score3Timed5x6', score2Timed5x6); //set sessionStorage item 'score3Timed5x6' to score2Timed5x6
                
                                } else if(parseInt(score3Timed5x6) < parseInt(score4Timed5x6) && score4Timed5x6 != null) { //if score3Timed5x6 is less than score4Timed5x6 and score4Timed5x6 is not null
                
                                    sessionStorage.setItem('score3Timed5x6', score4Timed5x6); //set sessionStorage item 'score3Timed5x6' to score4Timed5x6
                                    sessionStorage.setItem('score4Timed5x6', score3Timed5x6); //set sessionStorage item 'score4Timed5x6' to score3Timed5x6
                
                                } else if(parseInt(score4Timed5x6) < parseInt(score5Timed5x6) && score5Timed5x6 != null) { //if score4Timed5x6 is less than score4Timed5x6 and score5Timed5x6 is not null
                
                                    sessionStorage.setItem('score4Timed5x6', score5Timed5x6); //set sessionStorage item 'score4Timed5x6' to score5Timed5x6
                                    sessionStorage.setItem('score5Timed5x6', score4Timed5x6); //set sessionStorage item 'score5Timed5x6' to score4Timed5x6
                
                                }  else if(parseInt(score5Timed5x6) < parseInt(score6Timed5x6) && score6Timed5x6 != null) { //if score5Timed5x6 is less than score6Timed5x6 and score6Timed5x6 is not null
                
                                    sessionStorage.setItem('score5Timed5x6', score6Timed5x6); //set sessionStorage item 'score5Timed5x6' to score6Timed5x6
                                    sessionStorage.setItem('score6Timed5x6', score5Timed5x6); //set sessionStorage item 'score6Timed5x6' to score5Timed5x6
                
                                }
                
                            }
    
    
                            score1Timed5x6 = sessionStorage.getItem('score1Timed5x6'); //initialize score1Timed5x6 again
                            score2Timed5x6 = sessionStorage.getItem('score2Timed5x6'); //initialize score2Timed5x6 again
                            score3Timed5x6 = sessionStorage.getItem('score3Timed5x6'); //initialize score3Timed5x6 again
                            score4Timed5x6 = sessionStorage.getItem('score4Timed5x6'); //initialize score4Timed5x6 again
                            score5Timed5x6 = sessionStorage.getItem('score5Timed5x6'); //initialize score5Timed5x6 again
                            score6Timed5x6 = sessionStorage.getItem('score6Timed5x6'); //initialize score6Timed5x6 again
    
                
                            //if score is not null set score again with " Cards Cleared"
                            if(score1Timed5x6 != null) { score1HTML.innerHTML = score1Timed5x6 + " Cards Cleared"; }
                            if(score2Timed5x6 != null) { score2HTML.innerHTML = score2Timed5x6 + " Cards Cleared"; }
                            if(score3Timed5x6 != null) { score3HTML.innerHTML = score3Timed5x6 + " Cards Cleared"; }
                            if(score4Timed5x6 != null) { score4HTML.innerHTML = score4Timed5x6 + " Cards Cleared"; }
                            if(score5Timed5x6 != null) { score5HTML.innerHTML = score5Timed5x6 + " Cards Cleared"; }
                            if(score6Timed5x6 != null) { score6HTML.innerHTML = score6Timed5x6 + " Cards Cleared"; }


                            winAmountTimed5x6++
                            sessionStorage.setItem('winAmountTimed5x6', winAmountTimed5x6);
                            winAmountTimed5x6 = sessionStorage.getItem('winAmountTimed5x6');
                            winAmountHTML.innerHTML = "Games Completed: " + winAmountTimed5x6;


                        }

                    }
        
                }, 1000); //set time to 1 second
            }
        
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

    cardOne.setAttribute("value", -1); //disable card one
    cardTwo.setAttribute("value", -1); //disable card two

    ResetCards(); //call ResetCards() function

    if(gameMode == "timed") { //if game mode is timed game mode

        cardsCleared += 2; //increase cardsCleared by 2

    } else if(gameMode == "standard") { //else if game mode is memory or standard game mode
        
        cardsLeft = cardsLeft - 2; //decrease cardsLeft by 2
        bottomTabDisplay.innerHTML = "Cards Left: " + cardsLeft; //set bottomTabDisplay to cardsLeft
        
    }

    completedCardCount = completedCardCount + 2; //increase completedCardCount by 2

    if(completedCardCount == boardValue) { //if completedCardCount is boardValue
            
        if(gameMode == "timed") { //if game mode is timed game mode

            setTimeout(function() { resetBoard(); }, 500); //setTimout() function to call resetBoard() function after 0.5 seconds

        } else if(gameMode == "standard") { //else if game mode is standard game mode
        
            setTimeout(function() { FlipGame() }, 1500); //setTimout() function to call FlipGame() function after 1.5 seconds
            clearInterval(timer); //clearInterval on timer variable
            win = true; //set win to true
            winngingText.innerHTML = "Board Cleared"; //set winningText to "Board Cleared"

            if(boardValue == 12) {

                winAmountStandard3x4++
                sessionStorage.setItem('winAmountStandard3x4', winAmountStandard3x4);
                winAmountStandard3x4 = sessionStorage.getItem('winAmountStandard3x4');
                winAmountHTML.innerHTML = "Games Completed: " + winAmountStandard3x4;

            } else if(boardValue == 20) {

                winAmountStandard4x5++
                sessionStorage.setItem('winAmountStandard4x5', winAmountStandard4x5);
                winAmountStandard4x5 = sessionStorage.getItem('winAmountStandard4x5');
                winAmountHTML.innerHTML = "Games Completed: " + winAmountStandard4x5;

            } else {

                winAmountStandard5x6++
                sessionStorage.setItem('winAmountStandard5x6', winAmountStandard5x6);
                winAmountStandard5x6 = sessionStorage.getItem('winAmountStandard5x6');
                winAmountHTML.innerHTML = "Games Completed: " + winAmountStandard5x6;

            }

        } else if(gameMode == "memory") { //else if game mode is memory game mode

            if(boardValue == 12) {

                if(score1Memory3x4 == null) { //if score1Memory3x4 is null 

                    sessionStorage.setItem('score1Memory3x4', mismatches); //set sessionStorage item 'score1Memory3x4' to mismatches
    
                } else if(score2Memory3x4 == null) { //if score2Memory3x4 is null
                    
                    sessionStorage.setItem('score2Memory3x4', mismatches); //set sessionStorage item 'score2Memory3x4' to mismatches
    
                } else if(score3Memory3x4 == null) { //if score3Memory3x4 is null
    
                    sessionStorage.setItem('score3Memory3x4', mismatches); //set sessionStorage item 'score3Memory3x4' to mismatches
                    
                } else if(score4Memory3x4 == null) { //if score4Memory3x4 is null
    
                    sessionStorage.setItem('score4Memory3x4', mismatches); //set sessionStorage item 'score4Memory3x4' to mismatches
    
                } else if(score5Memory3x4 == null) { //if score5Memory3x4 is null
    
                    sessionStorage.setItem('score5Memory3x4', mismatches); //set sessionStorage item 'score5Memory3x4' to mismatches
    
                } else if(score6Memory3x4 == null) { //if score6Memory3x4 is null
    
                    sessionStorage.setItem('score6Memory3x4', mismatches); //set sessionStorage item 'score6Memory3x4' to mismatches

                } 
                
                else if(parseInt(score1Memory3x4) > mismatches) { //if score1Memory3x4 is greater than mismatches

                    sessionStorage.setItem('score1Memory3x4', mismatches); //set sessionStorage item 'score1Memory3x4' to score2Memory3x4
                    sessionStorage.setItem('score2Memory3x4', score1Memory3x4); //set sessionStorage item 'score2Memory3x4' to score1Memory3x4
                    sessionStorage.setItem('score3Memory3x4', score2Memory3x4); //set sessionStorage item 'score3Memory3x4' to score2Memory3x4
                    sessionStorage.setItem('score4Memory3x4', score3Memory3x4); //set sessionStorage item 'score4Memory3x4' to score3Memory3x4
                    sessionStorage.setItem('score5Memory3x4', score4Memory3x4); //set sessionStorage item 'score5Memory3x4' to score4Memory3x4
                    sessionStorage.setItem('score6Memory3x4', score5Memory3x4); //set sessionStorage item 'score6Memory3x4' to score5Memory3x4
                    
                } else if(parseInt(score2Memory3x4) > mismatches) { //if score2Memory3x4 is greater than mismatches
    
                    sessionStorage.setItem('score2Memory3x4', mismatches); //set sessionStorage item 'score2Memory3x4' to mismatches
                    sessionStorage.setItem('score3Memory3x4', score2Memory3x4); //set sessionStorage item 'score3Memory3x4' to score2Memory3x4
                    sessionStorage.setItem('score4Memory3x4', score3Memory3x4); //set sessionStorage item 'score4Memory3x4' to score3Memory3x4
                    sessionStorage.setItem('score5Memory3x4', score4Memory3x4); //set sessionStorage item 'score5Memory3x4' to score4Memory3x4
                    sessionStorage.setItem('score6Memory3x4', score5Memory3x4); //set sessionStorage item 'score6Memory3x4' to score5Memory3x4
                    
                } else if(parseInt(score3Memory3x4) > mismatches) { //if score3Memory3x4 is greater than mismatches
    
                    sessionStorage.setItem('score3Memory3x4', mismatches); //set sessionStorage item 'score3Memory3x4' to mismatches
                    sessionStorage.setItem('score4Memory3x4', score3Memory3x4); //set sessionStorage item 'score4Memory3x4' to score3Memory3x4
                    sessionStorage.setItem('score5Memory3x4', score4Memory3x4); //set sessionStorage item 'score5Memory3x4' to score4Memory3x4
                    sessionStorage.setItem('score6Memory3x4', score5Memory3x4); //set sessionStorage item 'score6Memory3x4' to score5Memory3x4
                    
                } else if(parseInt(score4Memory3x4) > mismatches) { //if score4Memory3x4 is greater than mismatches
    
                    sessionStorage.setItem('score4Memory3x4', mismatches); //set sessionStorage item 'score4Memory3x4' to mismatches
                    sessionStorage.setItem('score5Memory3x4', score4Memory3x4); //set sessionStorage item 'score5Memory3x4' to score4Memory3x4
                    sessionStorage.setItem('score6Memory3x4', score5Memory3x4); //set sessionStorage item 'score6Memory3x4' to score5Memory3x4
                    
                } else if(parseInt(score5Memory3x4) > mismatches) { //if score5Memory3x4 is greater than mismatches
    
                    sessionStorage.setItem('score5Memory3x4', mismatches); //set sessionStorage item 'score5Memory3x4' to mismatches
                    sessionStorage.setItem('score6Memory3x4', score5Memory3x4); //set sessionStorage item 'score6Memory3x4' to score5Memory3x4
                    
                } else if(parseInt(score6Memory3x4) > mismatches) { //if score6Memory3x4 is greater than mismatches
    
                    sessionStorage.setItem('score6Memory3x4', mismatches); //set sessionStorage item 'score6Memory3x4' to mismatches
                    
                }
    
                
                for(var i = 0; i < 3; i++) { //for loop
    
                    score1Memory3x4 = sessionStorage.getItem('score1Memory3x4'); //initialize score1Memory3x4 again
                    score2Memory3x4 = sessionStorage.getItem('score2Memory3x4'); //initialize score2Memory3x4 again
                    score3Memory3x4 = sessionStorage.getItem('score3Memory3x4'); //initialize score3Memory3x4 again
                    score4Memory3x4 = sessionStorage.getItem('score4Memory3x4'); //initialize score4Memory3x4 again
                    score5Memory3x4 = sessionStorage.getItem('score5Memory3x4'); //initialize score5Memory3x4 again
                    score6Memory3x4 = sessionStorage.getItem('score6Memory3x4'); //initialize score6Memory3x4 again
    
                    if(parseInt(score1Memory3x4) > parseInt(score2Memory3x4) && score2Memory3x4 != null) { //if score1Memory3x4 is less than score2Memory3x4 and score2Memory3x4 is not null
    
                        sessionStorage.setItem('score1Memory3x4', score2Memory3x4); //set sessionStorage item 'score1Memory3x4' to score2Memory3x4
                        sessionStorage.setItem('score2Memory3x4', score1Memory3x4); //set sessionStorage item 'score2Memory3x4' to score1Memory3x4
        
                    } else if(parseInt(score2Memory3x4) > parseInt(score3Memory3x4) && score3Memory3x4 != null) { //if score2Memory3x4 is less than score3Memory3x4 and score3Memory3x4 is not null
        
                        sessionStorage.setItem('score2Memory3x4', score3Memory3x4); //set sessionStorage item 'score2Memory3x4' to score3Memory3x4
                        sessionStorage.setItem('score3Memory3x4', score2Memory3x4); //set sessionStorage item 'score3Memory3x4' to score2Memory3x4
    
                    } else if(parseInt(score3Memory3x4) > parseInt(score4Memory3x4) && score4Memory3x4 != null) { //if score3Memory3x4 is less than score4Memory3x4 and score4Memory3x4 is not null
    
                        sessionStorage.setItem('score3Memory3x4', score4Memory3x4); //set sessionStorage item 'score3Memory3x4' to score4Memory3x4
                        sessionStorage.setItem('score4Memory3x4', score3Memory3x4); //set sessionStorage item 'score4Memory3x4' to score3Memory3x4
    
                    } else if(parseInt(score4Memory3x4) > parseInt(score5Memory3x4) && score5Memory3x4 != null) { //if score4Memory3x4 is less than score4Memory3x4 and score5Memory3x4 is not null
    
                        sessionStorage.setItem('score4Memory3x4', score5Memory3x4); //set sessionStorage item 'score4Memory3x4' to score5Memory3x4
                        sessionStorage.setItem('score5Memory3x4', score4Memory3x4); //set sessionStorage item 'score5Memory3x4' to score4Memory3x4
    
                    }  else if(parseInt(score5Memory3x4) > parseInt(score6Memory3x4) && score6Memory3x4 != null) { //if score5Memory3x4 is less than score6Memory3x4 and score6Memory3x4 is not null
    
                        sessionStorage.setItem('score5Memory3x4', score6Memory3x4); //set sessionStorage item 'score5Memory3x4' to score6Memory3x4
                        sessionStorage.setItem('score6Memory3x4', score5Memory3x4); //set sessionStorage item 'score6Memory3x4' to score5Memory3x4
    
                    }
    
                }


                score1Memory3x4 = sessionStorage.getItem('score1Memory3x4'); //initialize score1Memory3x4 again
                score2Memory3x4 = sessionStorage.getItem('score2Memory3x4'); //initialize score2Memory3x4 again
                score3Memory3x4 = sessionStorage.getItem('score3Memory3x4'); //initialize score3Memory3x4 again
                score4Memory3x4 = sessionStorage.getItem('score4Memory3x4'); //initialize score4Memory3x4 again
                score5Memory3x4 = sessionStorage.getItem('score5Memory3x4'); //initialize score5Memory3x4 again
                score6Memory3x4 = sessionStorage.getItem('score6Memory3x4'); //initialize score6Memory3x4 again

    
                if(score1Memory3x4 != null) { //if score is not null set score again with " Mismatches"

                    if(score1Memory3x4 == 1) {
                        score1HTML.innerHTML = score1Memory3x4 + " Mismatch";
                    } else {
                        score1HTML.innerHTML = score1Memory3x4 + " Mismatches";
                    }
                    
                }
    
                if(score2Memory3x4 != null) { //if score is not null set score again with " Mismatches"
    
                    if(score2Memory3x4 == 1) {
                        score2HTML.innerHTML = score2Memory3x4 + " Mismatch";
                    } else {
                        score2HTML.innerHTML = score2Memory3x4 + " Mismatches";
                    }
    
                }
    
                if(score3Memory3x4 != null) { //if score is not null set score again with " Mismatches"
    
                    if(score3Memory3x4 == 1) {
                        score3HTML.innerHTML = score3Memory3x4 + " Mismatch";
                    } else {
                        score3HTML.innerHTML = score3Memory3x4 + " Mismatches";
                    }
    
                }
    
                if(score4Memory3x4 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score4Memory3x4 == 1) {
                        score4HTML.innerHTML = score4Memory3x4 + " Mismatch";
                    } else {
                        score4HTML.innerHTML = score4Memory3x4 + " Mismatches";
                    }
    
                }
    
                if(score5Memory3x4 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score5Memory3x4 == 1) {
                        score5HTML.innerHTML = score5Memory3x4 + " Mismatch";
                    } else {
                        score5HTML.innerHTML = score5Memory3x4 + " Mismatches";
                    }
    
                }
    
                if(score6Memory3x4 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score6Memory3x4 == 1) {
                        score6HTML.innerHTML = score6Memory3x4 + " Mismatch";
                    } else {
                        score6HTML.innerHTML = score6Memory3x4 + " Mismatches";
                    }
    
                }

                winAmountMemory3x4++
                sessionStorage.setItem('winAmountMemory3x4', winAmountMemory3x4);
                winAmountMemory3x4 = sessionStorage.getItem('winAmountMemory3x4');
                winAmountHTML.innerHTML = "Games Completed: " + winAmountMemory3x4;

            } else if(boardValue == 20) {

                if(score1Memory4x5 == null) { //if score1Memory4x5 is null

                    sessionStorage.setItem('score1Memory4x5', mismatches); //set sessionStorage item 'score1Memory4x5' to mismatches
    
                } else if(score2Memory4x5 == null) { //if score2Memory4x5 is null
                    
                    sessionStorage.setItem('score2Memory4x5', mismatches); //set sessionStorage item 'score2Memory4x5' to mismatches
    
                } else if(score3Memory4x5 == null) { //if score3Memory4x5 is null
    
                    sessionStorage.setItem('score3Memory4x5', mismatches); //set sessionStorage item 'score3Memory4x5' to mismatches
                    
                } else if(score4Memory4x5 == null) { //if score4Memory4x5 is null
    
                    sessionStorage.setItem('score4Memory4x5', mismatches); //set sessionStorage item 'score4Memory4x5' to mismatches
    
                } else if(score5Memory4x5 == null) { //if score5Memory4x5 is null
    
                    sessionStorage.setItem('score5Memory4x5', mismatches); //set sessionStorage item 'score5Memory4x5' to mismatches
    
                } else if(score6Memory4x5 == null) { //if score6Memory4x5 is null
    
                    sessionStorage.setItem('score6Memory4x5', mismatches); //set sessionStorage item 'score6Memory4x5' to mismatches

                } 
                
                else if(parseInt(score1Memory4x5) > mismatches) { //if score1Memory4x5 is greater than mismatches

                    sessionStorage.setItem('score1Memory4x5', mismatches); //set sessionStorage item 'score1Memory4x5' to score2Memory4x5
                    sessionStorage.setItem('score2Memory4x5', score1Memory4x5); //set sessionStorage item 'score2Memory4x5' to score1Memory4x5
                    sessionStorage.setItem('score3Memory4x5', score2Memory4x5); //set sessionStorage item 'score3Memory4x5' to score2Memory4x5
                    sessionStorage.setItem('score4Memory4x5', score3Memory4x5); //set sessionStorage item 'score4Memory4x5' to score3Memory4x5
                    sessionStorage.setItem('score5Memory4x5', score4Memory4x5); //set sessionStorage item 'score5Memory4x5' to score4Memory4x5
                    sessionStorage.setItem('score6Memory4x5', score5Memory4x5); //set sessionStorage item 'score6Memory4x5' to score5Memory4x5
                    
                } else if(parseInt(score2Memory4x5) > mismatches) { //if score2Memory4x5 is greater than mismatches
    
                    sessionStorage.setItem('score2Memory4x5', mismatches); //set sessionStorage item 'score2Memory4x5' to mismatches
                    sessionStorage.setItem('score3Memory4x5', score2Memory4x5); //set sessionStorage item 'score3Memory4x5' to score2Memory4x5
                    sessionStorage.setItem('score4Memory4x5', score3Memory4x5); //set sessionStorage item 'score4Memory4x5' to score3Memory4x5
                    sessionStorage.setItem('score5Memory4x5', score4Memory4x5); //set sessionStorage item 'score5Memory4x5' to score4Memory4x5
                    sessionStorage.setItem('score6Memory4x5', score5Memory4x5); //set sessionStorage item 'score6Memory4x5' to score5Memory4x5
                    
                } else if(parseInt(score3Memory4x5) > mismatches) { //if score3Memory4x5 is greater than mismatches
    
                    sessionStorage.setItem('score3Memory4x5', mismatches); //set sessionStorage item 'score3Memory4x5' to mismatches
                    sessionStorage.setItem('score4Memory4x5', score3Memory4x5); //set sessionStorage item 'score4Memory4x5' to score3Memory4x5
                    sessionStorage.setItem('score5Memory4x5', score4Memory4x5); //set sessionStorage item 'score5Memory4x5' to score4Memory4x5
                    sessionStorage.setItem('score6Memory4x5', score5Memory4x5); //set sessionStorage item 'score6Memory4x5' to score5Memory4x5
                    
                } else if(parseInt(score4Memory4x5) > mismatches) { //if score4Memory4x5 is greater than mismatches
    
                    sessionStorage.setItem('score4Memory4x5', mismatches); //set sessionStorage item 'score4Memory4x5' to mismatches
                    sessionStorage.setItem('score5Memory4x5', score4Memory4x5); //set sessionStorage item 'score5Memory4x5' to score4Memory4x5
                    sessionStorage.setItem('score6Memory4x5', score5Memory4x5); //set sessionStorage item 'score6Memory4x5' to score5Memory4x5
                    
                } else if(parseInt(score5Memory4x5) > mismatches) { //if score5Memory4x5 is greater than mismatches
    
                    sessionStorage.setItem('score5Memory4x5', mismatches); //set sessionStorage item 'score5Memory4x5' to mismatches
                    sessionStorage.setItem('score6Memory4x5', score5Memory4x5); //set sessionStorage item 'score6Memory4x5' to score5Memory4x5
                    
                } else if(parseInt(score6Memory4x5) > mismatches) { //if score6Memory4x5 is greater than mismatches
    
                    sessionStorage.setItem('score6Memory4x5', mismatches); //set sessionStorage item 'score6Memory4x5' to mismatches
                    
                }
    
                
                for(var i = 0; i < 3; i++) { //for loop
    
                    score1Memory4x5 = sessionStorage.getItem('score1Memory4x5'); //initialize score1Memory4x5 again
                    score2Memory4x5 = sessionStorage.getItem('score2Memory4x5'); //initialize score2Memory4x5 again
                    score3Memory4x5 = sessionStorage.getItem('score3Memory4x5'); //initialize score3Memory4x5 again
                    score4Memory4x5 = sessionStorage.getItem('score4Memory4x5'); //initialize score4Memory4x5 again
                    score5Memory4x5 = sessionStorage.getItem('score5Memory4x5'); //initialize score5Memory4x5 again
                    score6Memory4x5 = sessionStorage.getItem('score6Memory4x5'); //initialize score6Memory4x5 again
    
                    if(parseInt(score1Memory4x5) > parseInt(score2Memory4x5) && score2Memory4x5 != null) { //if score1Memory4x5 is less than score2Memory4x5 and score2Memory4x5 is not null
    
                        sessionStorage.setItem('score1Memory4x5', score2Memory4x5); //set sessionStorage item 'score1Memory4x5' to score2Memory4x5
                        sessionStorage.setItem('score2Memory4x5', score1Memory4x5); //set sessionStorage item 'score2Memory4x5' to score1Memory4x5
        
                    } else if(parseInt(score2Memory4x5) > parseInt(score3Memory4x5) && score3Memory4x5 != null) { //if score2Memory4x5 is less than score3Memory4x5 and score3Memory4x5 is not null
        
                        sessionStorage.setItem('score2Memory4x5', score3Memory4x5); //set sessionStorage item 'score2Memory4x5' to score3Memory4x5
                        sessionStorage.setItem('score3Memory4x5', score2Memory4x5); //set sessionStorage item 'score3Memory4x5' to score2Memory4x5
    
                    } else if(parseInt(score3Memory4x5) > parseInt(score4Memory4x5) && score4Memory4x5 != null) { //if score3Memory4x5 is less than score4Memory4x5 and score4Memory4x5 is not null
    
                        sessionStorage.setItem('score3Memory4x5', score4Memory4x5); //set sessionStorage item 'score3Memory4x5' to score4Memory4x5
                        sessionStorage.setItem('score4Memory4x5', score3Memory4x5); //set sessionStorage item 'score4Memory4x5' to score3Memory4x5
    
                    } else if(parseInt(score4Memory4x5) > parseInt(score5Memory4x5) && score5Memory4x5 != null) { //if score4Memory4x5 is less than score4Memory4x5 and score5Memory4x5 is not null
    
                        sessionStorage.setItem('score4Memory4x5', score5Memory4x5); //set sessionStorage item 'score4Memory4x5' to score5Memory4x5
                        sessionStorage.setItem('score5Memory4x5', score4Memory4x5); //set sessionStorage item 'score5Memory4x5' to score4Memory4x5
    
                    }  else if(parseInt(score5Memory4x5) > parseInt(score6Memory4x5) && score6Memory4x5 != null) { //if score5Memory4x5 is less than score6Memory4x5 and score6Memory4x5 is not null
    
                        sessionStorage.setItem('score5Memory4x5', score6Memory4x5); //set sessionStorage item 'score5Memory4x5' to score6Memory4x5
                        sessionStorage.setItem('score6Memory4x5', score5Memory4x5); //set sessionStorage item 'score6Memory4x5' to score5Memory4x5
    
                    }
    
                }


                score1Memory4x5 = sessionStorage.getItem('score1Memory4x5'); //initialize score1Memory4x5 again
                score2Memory4x5 = sessionStorage.getItem('score2Memory4x5'); //initialize score2Memory4x5 again
                score3Memory4x5 = sessionStorage.getItem('score3Memory4x5'); //initialize score3Memory4x5 again
                score4Memory4x5 = sessionStorage.getItem('score4Memory4x5'); //initialize score4Memory4x5 again
                score5Memory4x5 = sessionStorage.getItem('score5Memory4x5'); //initialize score5Memory4x5 again
                score6Memory4x5 = sessionStorage.getItem('score6Memory4x5'); //initialize score6Memory4x5 again

    
                if(score1Memory4x5 != null) { //if score is not null set score again with " Mismatches"

                    if(score1Memory4x5 == 1) {
                        score1HTML.innerHTML = score1Memory4x5 + " Mismatch";
                    } else {
                        score1HTML.innerHTML = score1Memory4x5 + " Mismatches";
                    }
                    
                }
    
                if(score2Memory4x5 != null) { //if score is not null set score again with " Mismatches"
    
                    if(score2Memory4x5 == 1) {
                        score2HTML.innerHTML = score2Memory4x5 + " Mismatch";
                    } else {
                        score2HTML.innerHTML = score2Memory4x5 + " Mismatches";
                    }
    
                }
    
                if(score3Memory4x5 != null) { //if score is not null set score again with " Mismatches"
    
                    if(score3Memory4x5 == 1) {
                        score3HTML.innerHTML = score3Memory4x5 + " Mismatch";
                    } else {
                        score3HTML.innerHTML = score3Memory4x5 + " Mismatches";
                    }
    
                }
    
                if(score4Memory4x5 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score4Memory4x5 == 1) {
                        score4HTML.innerHTML = score4Memory4x5 + " Mismatch";
                    } else {
                        score4HTML.innerHTML = score4Memory4x5 + " Mismatches";
                    }
    
                }
    
                if(score5Memory4x5 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score5Memory4x5 == 1) {
                        score5HTML.innerHTML = score5Memory4x5 + " Mismatch";
                    } else {
                        score5HTML.innerHTML = score5Memory4x5 + " Mismatches";
                    }
    
                }
    
                if(score6Memory4x5 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score6Memory4x5 == 1) {
                        score6HTML.innerHTML = score6Memory4x5 + " Mismatch";
                    } else {
                        score6HTML.innerHTML = score6Memory4x5 + " Mismatches";
                    }
    
                }

                winAmountMemory4x5++
                sessionStorage.setItem('winAmountMemory4x5', winAmountMemory4x5);
                winAmountMemory4x5 = sessionStorage.getItem('winAmountMemory4x5');
                winAmountHTML.innerHTML = "Games Completed: " + winAmountMemory4x5;

            } else {

                if(score1Memory5x6 == null) { //if score1Memory5x6 is null

                    sessionStorage.setItem('score1Memory5x6', mismatches); //set sessionStorage item 'score1Memory5x6' to mismatches
    
                } else if(score2Memory5x6 == null) { //if score2Memory5x6 is null
                    
                    sessionStorage.setItem('score2Memory5x6', mismatches); //set sessionStorage item 'score2Memory5x6' to mismatches
    
                } else if(score3Memory5x6 == null) { //if score3Memory5x6 is null
    
                    sessionStorage.setItem('score3Memory5x6', mismatches); //set sessionStorage item 'score3Memory5x6' to mismatches
                    
                } else if(score4Memory5x6 == null) { //if score4Memory5x6 is null
    
                    sessionStorage.setItem('score4Memory5x6', mismatches); //set sessionStorage item 'score4Memory5x6' to mismatches
    
                } else if(score5Memory5x6 == null) { //if score5Memory5x6 is null
    
                    sessionStorage.setItem('score5Memory5x6', mismatches); //set sessionStorage item 'score5Memory5x6' to mismatches
    
                } else if(score6Memory5x6 == null) { //if score6Memory5x6 is null
    
                    sessionStorage.setItem('score6Memory5x6', mismatches); //set sessionStorage item 'score6Memory5x6' to mismatches

                } 
                
                else if(parseInt(score1Memory5x6) > mismatches) { //if score1Memory5x6 is greater than mismatches

                    sessionStorage.setItem('score1Memory5x6', mismatches); //set sessionStorage item 'score1Memory5x6' to score2Memory5x6
                    sessionStorage.setItem('score2Memory5x6', score1Memory5x6); //set sessionStorage item 'score2Memory5x6' to score1Memory5x6
                    sessionStorage.setItem('score3Memory5x6', score2Memory5x6); //set sessionStorage item 'score3Memory5x6' to score2Memory5x6
                    sessionStorage.setItem('score4Memory5x6', score3Memory5x6); //set sessionStorage item 'score4Memory5x6' to score3Memory5x6
                    sessionStorage.setItem('score5Memory5x6', score4Memory5x6); //set sessionStorage item 'score5Memory5x6' to score4Memory5x6
                    sessionStorage.setItem('score6Memory5x6', score5Memory5x6); //set sessionStorage item 'score6Memory5x6' to score5Memory5x6
                    
                } else if(parseInt(score2Memory5x6) > mismatches) { //if score2Memory5x6 is greater than mismatches
    
                    sessionStorage.setItem('score2Memory5x6', mismatches); //set sessionStorage item 'score2Memory5x6' to mismatches
                    sessionStorage.setItem('score3Memory5x6', score2Memory5x6); //set sessionStorage item 'score3Memory5x6' to score2Memory5x6
                    sessionStorage.setItem('score4Memory5x6', score3Memory5x6); //set sessionStorage item 'score4Memory5x6' to score3Memory5x6
                    sessionStorage.setItem('score5Memory5x6', score4Memory5x6); //set sessionStorage item 'score5Memory5x6' to score4Memory5x6
                    sessionStorage.setItem('score6Memory5x6', score5Memory5x6); //set sessionStorage item 'score6Memory5x6' to score5Memory5x6
                    
                } else if(parseInt(score3Memory5x6) > mismatches) { //if score3Memory5x6 is greater than mismatches
    
                    sessionStorage.setItem('score3Memory5x6', mismatches); //set sessionStorage item 'score3Memory5x6' to mismatches
                    sessionStorage.setItem('score4Memory5x6', score3Memory5x6); //set sessionStorage item 'score4Memory5x6' to score3Memory5x6
                    sessionStorage.setItem('score5Memory5x6', score4Memory5x6); //set sessionStorage item 'score5Memory5x6' to score4Memory5x6
                    sessionStorage.setItem('score6Memory5x6', score5Memory5x6); //set sessionStorage item 'score6Memory5x6' to score5Memory5x6
                    
                } else if(parseInt(score4Memory5x6) > mismatches) { //if score4Memory5x6 is greater than mismatches
    
                    sessionStorage.setItem('score4Memory5x6', mismatches); //set sessionStorage item 'score4Memory5x6' to mismatches
                    sessionStorage.setItem('score5Memory5x6', score4Memory5x6); //set sessionStorage item 'score5Memory5x6' to score4Memory5x6
                    sessionStorage.setItem('score6Memory5x6', score5Memory5x6); //set sessionStorage item 'score6Memory5x6' to score5Memory5x6
                    
                } else if(parseInt(score5Memory5x6) > mismatches) { //if score5Memory5x6 is greater than mismatches
    
                    sessionStorage.setItem('score5Memory5x6', mismatches); //set sessionStorage item 'score5Memory5x6' to mismatches
                    sessionStorage.setItem('score6Memory5x6', score5Memory5x6); //set sessionStorage item 'score6Memory5x6' to score5Memory5x6
                    
                } else if(parseInt(score6Memory5x6) > mismatches) { //if score6Memory5x6 is greater than mismatches
    
                    sessionStorage.setItem('score6Memory5x6', mismatches); //set sessionStorage item 'score6Memory5x6' to mismatches
                    
                }
    
                
                for(var i = 0; i < 3; i++) { //for loop
    
                    score1Memory5x6 = sessionStorage.getItem('score1Memory5x6'); //initialize score1Memory5x6 again
                    score2Memory5x6 = sessionStorage.getItem('score2Memory5x6'); //initialize score2Memory5x6 again
                    score3Memory5x6 = sessionStorage.getItem('score3Memory5x6'); //initialize score3Memory5x6 again
                    score4Memory5x6 = sessionStorage.getItem('score4Memory5x6'); //initialize score4Memory5x6 again
                    score5Memory5x6 = sessionStorage.getItem('score5Memory5x6'); //initialize score5Memory5x6 again
                    score6Memory5x6 = sessionStorage.getItem('score6Memory5x6'); //initialize score6Memory5x6 again
    
                    if(parseInt(score1Memory5x6) > parseInt(score2Memory5x6) && score2Memory5x6 != null) { //if score1Memory5x6 is less than score2Memory5x6 and score2Memory5x6 is not null
    
                        sessionStorage.setItem('score1Memory5x6', score2Memory5x6); //set sessionStorage item 'score1Memory5x6' to score2Memory5x6
                        sessionStorage.setItem('score2Memory5x6', score1Memory5x6); //set sessionStorage item 'score2Memory5x6' to score1Memory5x6
        
                    } else if(parseInt(score2Memory5x6) > parseInt(score3Memory5x6) && score3Memory5x6 != null) { //if score2Memory5x6 is less than score3Memory5x6 and score3Memory5x6 is not null
        
                        sessionStorage.setItem('score2Memory5x6', score3Memory5x6); //set sessionStorage item 'score2Memory5x6' to score3Memory5x6
                        sessionStorage.setItem('score3Memory5x6', score2Memory5x6); //set sessionStorage item 'score3Memory5x6' to score2Memory5x6
    
                    } else if(parseInt(score3Memory5x6) > parseInt(score4Memory5x6) && score4Memory5x6 != null) { //if score3Memory5x6 is less than score4Memory5x6 and score4Memory5x6 is not null
    
                        sessionStorage.setItem('score3Memory5x6', score4Memory5x6); //set sessionStorage item 'score3Memory5x6' to score4Memory5x6
                        sessionStorage.setItem('score4Memory5x6', score3Memory5x6); //set sessionStorage item 'score4Memory5x6' to score3Memory5x6
    
                    } else if(parseInt(score4Memory5x6) > parseInt(score5Memory5x6) && score5Memory5x6 != null) { //if score4Memory5x6 is less than score4Memory5x6 and score5Memory5x6 is not null
    
                        sessionStorage.setItem('score4Memory5x6', score5Memory5x6); //set sessionStorage item 'score4Memory5x6' to score5Memory5x6
                        sessionStorage.setItem('score5Memory5x6', score4Memory5x6); //set sessionStorage item 'score5Memory5x6' to score4Memory5x6
    
                    }  else if(parseInt(score5Memory5x6) > parseInt(score6Memory5x6) && score6Memory5x6 != null) { //if score5Memory5x6 is less than score6Memory5x6 and score6Memory5x6 is not null
    
                        sessionStorage.setItem('score5Memory5x6', score6Memory5x6); //set sessionStorage item 'score5Memory5x6' to score6Memory5x6
                        sessionStorage.setItem('score6Memory5x6', score5Memory5x6); //set sessionStorage item 'score6Memory5x6' to score5Memory5x6
    
                    }
    
                }


                score1Memory5x6 = sessionStorage.getItem('score1Memory5x6'); //initialize score1Memory5x6 again
                score2Memory5x6 = sessionStorage.getItem('score2Memory5x6'); //initialize score2Memory5x6 again
                score3Memory5x6 = sessionStorage.getItem('score3Memory5x6'); //initialize score3Memory5x6 again
                score4Memory5x6 = sessionStorage.getItem('score4Memory5x6'); //initialize score4Memory5x6 again
                score5Memory5x6 = sessionStorage.getItem('score5Memory5x6'); //initialize score5Memory5x6 again
                score6Memory5x6 = sessionStorage.getItem('score6Memory5x6'); //initialize score6Memory5x6 again

    
                if(score1Memory5x6 != null) { //if score is not null set score again with " Mismatches"

                    if(score1Memory5x6 == 1) {
                        score1HTML.innerHTML = score1Memory5x6 + " Mismatch";
                    } else {
                        score1HTML.innerHTML = score1Memory5x6 + " Mismatches";
                    }
                    
                }
    
                if(score2Memory5x6 != null) { //if score is not null set score again with " Mismatches"
    
                    if(score2Memory5x6 == 1) {
                        score2HTML.innerHTML = score2Memory5x6 + " Mismatch";
                    } else {
                        score2HTML.innerHTML = score2Memory5x6 + " Mismatches";
                    }
    
                }
    
                if(score3Memory5x6 != null) { //if score is not null set score again with " Mismatches"
    
                    if(score3Memory5x6 == 1) {
                        score3HTML.innerHTML = score3Memory5x6 + " Mismatch";
                    } else {
                        score3HTML.innerHTML = score3Memory5x6 + " Mismatches";
                    }
    
                }
    
                if(score4Memory5x6 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score4Memory5x6 == 1) {
                        score4HTML.innerHTML = score4Memory5x6 + " Mismatch";
                    } else {
                        score4HTML.innerHTML = score4Memory5x6 + " Mismatches";
                    }
    
                }
    
                if(score5Memory5x6 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score5Memory5x6 == 1) {
                        score5HTML.innerHTML = score5Memory5x6 + " Mismatch";
                    } else {
                        score5HTML.innerHTML = score5Memory5x6 + " Mismatches";
                    }
    
                }
    
                if(score6Memory5x6 != null) { //if score is not null set score again with " Mismatches"
                    
                    if(score6Memory5x6 == 1) {
                        score6HTML.innerHTML = score6Memory5x6 + " Mismatch";
                    } else {
                        score6HTML.innerHTML = score6Memory5x6 + " Mismatches";
                    }
    
                }

                winAmountMemory5x6++
                sessionStorage.setItem('winAmountMemory5x6', winAmountMemory5x6);
                winAmountMemory5x6 = sessionStorage.getItem('winAmountMemory5x6');
                winAmountHTML.innerHTML = "Games Completed: " + winAmountMemory5x6;

            }


            setTimeout(function() { FlipGame() }, 1500); //setTimout() function to call FlipGame() function after 1.5 seconds
            win = true; //set win to true

            if(mismatches == 1) { //if mismatches is 1

                winngingText.innerHTML = "You made " + mismatches +  " mismatch"; //set winningText to display amount of mismatches

            } else { //else if mismatches is not 1

                winngingText.innerHTML = "You made " + mismatches +  " mismatches"; //set winningText to display amount of mismatches

            }

        }

    }

    gameActive == true; //set gameActive to true

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



//function to fade a card out ot make it disappear by setting the opacity to 0 and set cursor to default
function fadeCardOut(selectedCard) { 

    selectedCard.style.opacity = 0; 

    var bID = selectedCard.getAttribute("id") + "b";
    var cardBackID = document.getElementById(bID); //getting card back ID 
    cardBackID.style.cursor = "default"; //setting cursor to default

    var fID = selectedCard.getAttribute("id") + "f";
    var cardFrontID = document.getElementById(fID); //getting card front ID 
    cardFrontID.style.cursor = "default"; //setting cursor to default

}



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

    if(boardValue == 12) {
        sec = sec + 10; //add 10 seconds
    } else if(boardValue == 20) {
        sec = sec + 15; //add 15 seconds
    } else if(boardValue == 30) {
        sec = sec + 20; //add 20 seconds
    }

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

    gameActive == true; //set gameActive to true
}


//function to flip a selected card
function FlipCard(selectedCard) { selectedCard.classList.toggle("FlipCard"); }


//function used to set timer
function setTime(number) { return number > 9 ? number : "0" + number; }


//function to flip the game board
function FlipGame() { gameBoard.classList.toggle("FlipGame"); }


//function to redirect back to the rules
function BackToRules() { location.href = 'HTML Rules.html'; }


//function to redirect back to the startscreen
function BackToStartScreen() { location.href = 'index.html'; }

//funtion to redirect to the rules
function RedirectToRules() { location.href = 'HTML Rules.html'; }

//function to redirect to the select game mode screen
function RedirectToSelectGameMode() { 

    location.href = 'HTML Select Game Mode.html'; 
    sessionStorage.setItem('gameType', "numbers");

}

//functions to redirect to the game boards
function RedirectTo3x4() { location.href = 'HTML 3x4Game.html'; }
function RedirectTo4x5() { location.href = 'HTML 4x5Game.html'; }
function RedirectTo5x6() { location.href = 'HTML 5x6Game.html'; }
