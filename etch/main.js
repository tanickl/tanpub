let color = 'black';

let board = document.querySelector(".board");
console.log(`this is the board: ${board}`);

let squares = board.querySelectorAll("div");
console.log(`this is the squares: ${squares}`);

function populateBoard(size) {
    while (board.firstChild) {
        console.log(`clearing child elements of board in populateBoard`);
    board.removeChild(board.firstElementChild);
        console.log(`done clearing board children nodes`);
    }

    console.log(`populateBoard styling grid with size: ${size}`);
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i=0; i<amount; i++) {
        console.log(`doing the loop in populateBoard: ${i}`);
        
        let div = document.createElement("div");
        console.log(`blockscope vars div: ${div}`);

        let ce = document.createElement.bind(document);
        console.log(`blockscope vars ce: ${ce}`);
                
        let square = ce('div');

        // let square = board.createElement(div);
        // let square = this.board.insertAdjacentElement("afterend", div);
        console.log(`square is:  ${square}`);

        // maybe I need to write something to append the newly created div within the board div
        board.appendChild(square);
        
        square.style.backgroundColor = "white";

        square.addEventListener("mouseover", colorSquare);
        // square.addEventListener("mouseover", this.colorSquare());
        // square.addEventListener("mouseover", colorSquare());
            
        // square.style.backgroundColor = "white";
        // board.insertAdjacentElement("beforeend", square);
    } 
}



function colorSquare(){
    console.log("colorsquare called");
    if ((color === "random")) {
    this.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    }
    else {
        this.style.backgroundColor=color;
        // HTMLElement.style.setAttribute("backgroundColor")=color; 
        // square.style.backgroundColor=color;
    }
}


function changeColor(choice) {
    color = choice;
}

function changeSize(input) {
    console.log(`changeSize called with input: ${input}`);
    if (input >= 4 || input <= 100) {
    populateBoard(input)
    }
        else {
            console.log("too many squares!");
        }
}


function resetBoard() {
    console.log("reset board is called");
    // let board = document.querySelector(".board");
    // let squares = board.querySelectorAll("div");

    console.log(`resetBoard has squares: ${squares}`);

    // this line took several iterations to get right, and I wrote it after scrapping the stuff below
    board.querySelectorAll('div').forEach(div => div.style.backgroundColor="white" );

    // if (board) {
    //     let squaresToReset = board.querySelectorAll('div'); 
    //     for (let i=0; i< squaresToReset.length; i++) {
            
            

            // squares.forEach((div) => div.style.backgroundColor="white");
    // let squaresToReset = board.querySelectorAll('div'); // returns NodeList
    // let squaresResetArray = [...squaresToReset]; // converts NodeList to Array
    // squaresResetArray.forEach(div => {
    //     console.log(`executing forEach div on squaresResetArray`);
    //     squares.forEach((div) => div.style.backgroundColor="white");
    //     });
    // }
}

populateBoard(25);
// populateBoard();