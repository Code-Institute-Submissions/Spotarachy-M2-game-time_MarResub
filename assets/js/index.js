let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");



const turn = document.getElementById("turn");
const xWins = document.getElementById("x_wins");
const oWins = document.getElementById("o_wins");
const xIcon = document.getElementById("x");
const oIcon = document.getElementById('circle');

let boxes = document.querySelectorAll(".box");

var xTurn = false;
var xWinsCount = 0;
var oWinsCount = 0;

clearBoxes();

for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML === '') {
            return;
        }
        this.innerHTML = xTurn === true ? "X" : "O";
        xTurn = !xTurn;
        highlighter(xIcon)
        highlighter(oIcon)
        updateTurnText();
        getWinner();
    };
}

/**
 *
 *@param {string} target element to highlight 
 */
function highlighter(target) {
  target.classList.contains('high')? target.classList.remove('high'): target.classList.add('high')
}

/**
 *
 *@param {string} Clears boxes and resets game
 */
function clearBoxes() {
    var boxLen = boxes.length;
    while (boxLen --) {
        boxes[boxLen].innerHTML = '';
        boxes[boxLen].classList.remove('win');
    }
if (!xTurn) {
    xTurn = turn
    if(!xIcon.classList.contains('high')){
        xIcon.classList.add('high');
        oIcon.classList.remove('high');
        }
  }
  
  updateTurnText();
}
/**
 * 
 Just an update TurnTEXT
 */
function updateTurnText() {
    turn.innerHTML = xTurn === true ? "X turn" : "O turn";
}

/**
 * 
 * @param {string} b1 box input
 * @param {string} b2 box input
 * @param {string} b3 box input
 */
function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");

    turn.innerHTML = (xTurn === true ? "O" : "X") + " Won Congrats";

    if (xTurn) {
       Swal.fire({ "Swal":
       posititon: 'center',
       title: 'O Wins',
       showConfirmButton: false,
       timer:2500,
       })

    } else {
        Swal.fire({ "Swal": 
       posititon: 'center',
       title: 'X Wins',
       showConfirmButton: false,
       timer:2500,
    })
    
    updateWinCount(turn);
}
     updateWinCount();
}
/**
 * @param {*} xWins oWins counter
 */
function updateWinCount() {
    if (xWins) {
        xWins.innerHTML = ++ xWinsCount;
    } else {
        oWins.innerHTML = ++ oWinsCount;

    }
}


/**
 * @parram {string} 
 */
function getWinner() {
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinnerBoxes(box1, box2, box3);

    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinnerBoxes(box4, box5, box6);

    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7, box8, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1, box4, box7);

    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2, box5, box8);

    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3, box6, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1, box5, box9);

    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3, box5, box7);
}

document.getElementById("start").addEventListener("click", function () {
    clearBoxes();
});
