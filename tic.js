// =====================================
// PROFESSIONAL TIC TAC TOE
// Part 1
// =====================================

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let currentPlayer = "X";
let gameActive = true;

let board = [
    "", "", "",
    "", "", "",
    "", "", ""
];

const winPatterns = [

    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]

];

function startGame(){

    cells.forEach((cell,index)=>{

        cell.innerHTML="";

        cell.addEventListener("click",()=>cellClicked(index));

    });

}

function cellClicked(index){

    if(board[index]!=="" || !gameActive){

        return;

    }

    board[index]=currentPlayer;

    cells[index].innerHTML=currentPlayer;

    checkWinner();

}

function checkWinner(){

    let winner=false;

    for(let pattern of winPatterns){

        let a=board[pattern[0]];
        let b=board[pattern[1]];
        let c=board[pattern[2]];

        if(a==="" || b==="" || c===""){

            continue;

        }

        if(a===b && b===c){

            winner=true;

            break;

        }

    }

    if(winner){

        statusText.innerHTML="🏆 Player "+currentPlayer+" Wins!";

        gameActive=false;

        return;

    }

    if(!board.includes("")){

        statusText.innerHTML="🤝 Match Draw";

        gameActive=false;

        return;

    }

    currentPlayer=currentPlayer==="X"?"O":"X";

    statusText.innerHTML="Player "+currentPlayer+" Turn";

}
// =====================================
// Part 2 Starts Here
// =====================================

// Restart Game
restartBtn.addEventListener("click", restartGame);

function restartGame(){

    currentPlayer = "X";
    gameActive = true;

    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    statusText.innerHTML = "Player X Turn";

    cells.forEach(cell => {

        cell.innerHTML = "";

    });

}

// Highlight Winner
function highlightWinner(pattern){

    pattern.forEach(index=>{

        cells[index].style.background="#22c55e";

    });

}

// Update Winner Check
function checkWinner(){

    let winnerPattern = null;

    for(let pattern of winPatterns){

        let a = board[pattern[0]];
        let b = board[pattern[1]];
        let c = board[pattern[2]];

        if(a==="" || b==="" || c===""){

            continue;

        }

        if(a===b && b===c){

            winnerPattern = pattern;
            break;

        }

    }

    if(winnerPattern){

        highlightWinner(winnerPattern);

        statusText.innerHTML =
        "🏆 Player " + currentPlayer + " Wins!";

        gameActive = false;

        return;

    }

    if(!board.includes("")){

        statusText.innerHTML =
        "🤝 Match Draw";

        gameActive = false;

        return;

    }

    currentPlayer =
    currentPlayer==="X" ? "O" : "X";

    statusText.innerHTML =
    "Player " + currentPlayer + " Turn";

}

// Start Game
startGame();