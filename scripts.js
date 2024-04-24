
// create 16 grid squares
const generator = document.getElementById("generator");

let holder = document.getElementsByClassName("holder");
holder = holder[0];
let actualCanvas = document.getElementsByClassName("canvas");
actualCanvas = actualCanvas[0];
generator.addEventListener("click", () => {
    console.log(document.body.getElementsByClassName("canvas"));
    removeGrid();
    generateGrid();
})

let actual = 0;
function generateGrid(){
    let numberOfSquares = prompt("Enter the number of squares you want in the canvas:");
    numberOfSquares = parseInt(numberOfSquares);
    console.log(isNaN(numberOfSquares));
    while(isNaN(numberOfSquares) || numberOfSquares < 1 || numberOfSquares > 128){
        numberOfSquares = prompt("Enter the NUMBER. Bigger than 0 and smaller than 128");
    }
    actual = numberOfSquares;
    createGrid(numberOfSquares);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function createGrid(length){
    let canvas = document.createElement("div");
    console.log(canvas);
    actualCanvas = canvas;
    console.log(actualCanvas);
    canvas.classList.add("canvas");
    holder.appendChild(canvas);
    for(let i=0;i<(length * length);i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "whitesmoke";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomColor();
        })
        div.addEventListener("click", () => {
            div.style.backgroundColor = "whitesmoke";
        })
        div.style.width = (800/length) + "px";
        div.style.height = (800/length) + "px";
        canvas.appendChild(div);
    }
}
function removeGrid() {
    holder.removeChild(actualCanvas);
}
