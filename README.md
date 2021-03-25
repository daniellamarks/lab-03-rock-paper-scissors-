## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

Business Logic
-yesterday it was comparing two numbers and 
    - changing the state or telling the user if they won
-comparing the user's throw with the computer's throw
    - telling the user if they won

Looking for a function that gets a computer throw
doesUserWin function
access to the throw results - whether they won or lost or drew

Function getrandomthrow - no TDD
Stretch the  getRandomThrow function - impure function. generate a random number and turn it into rock paper scissors accordingly

did userwin function


## HTML

1. Header
2. Instructions: paper beat rock, rock beats scissors, scissors beats paper 
2. Div with three images in three inputs with labels
    why: a way for user to choose only ONE choice
2. Div (?) with button for play
    why: event to submit the user's throw
         event to instigate creation of random number
         event to compare the two and send info back to dom for user to see ->
3. Div with 
    What user throws
    What computer throws
    Who wins
    total wins
    total losses 
    total draws
        -all of these are feedback to the user
4. Div with reset button
    event to clear scoreboard
    all states back to zero

## Initialize state
    wins: 0 ( user throw beats comp)
    total: 0  ( number of times button clicked)
    draws: 0 ( user throws same as comp)
    <<derived state - losses = total - win >>
    computer's throw: randomly generated number that corresponds to rock paper or scissors

## Events "What happens when..."
    1. When button is clicked 
        states initialized
        the program randomly picks a computer throw 
            **function that sets different numeric values to strings of rock, paper, scissors
            get-random-throw.js
        the program get's the user's choice from the dom: document.querySelector('input:checked)
        the program compares the user's choice w/ the result of get-random-throw function to generate a game results(user's persp) for win lose or draw
            ** function must bring in getRandomThrow function
            ** getRandomThrow function turned to const
            ** function didUserWin (player, computer) {
                if (player === computer) return draw
                if player === rock && computer === scissors return win
                if player === rock && computer == paper return lose
                if player === paper && computer === rock return win
                if player === paper && computer === scissors return lose
                if player === scissors && computer === rock return win
                if player === scissors && computer === paper return lose
            }
        const userWinorLose = didUserWin()
        display.textContent = userWinOrLose
        display.textContent = wins
        display.textContent = losses
        display.textContent = draws
    2. When reset button is clicked
        whoWonEl.textcontent = ""
        wins = 0
        total = 0
        losses = 0
        display.textContent = wins 
        display.textContent = losses
        display.textContent = draws 

    
<!--  -->