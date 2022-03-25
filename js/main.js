function changeColor(element) {
    element.target.classList.toggle("hoverColor")
    return
}

function clearBoard() {
    let filledDiv = document.querySelectorAll(".hoverColor");
    filledDiv.forEach(div => div.classList.remove("hoverColor"))
}


const gridDimension = 16;
let gridEle = [];
const body = document.querySelector("body")
const container = document.querySelector(".container")

for(let i = 0; i < gridDimension; i++) {
    gridEle[i] = document.createElement("div");
    gridEle[i].classList.add(`row`)
    for(let j = 0; j < gridDimension; j++) {
        gridEle[i][j] = document.createElement("div");
        gridEle[i][j].classList.add(`column`)
        gridEle[i].appendChild(gridEle[i][j])
        gridEle[i][j].addEventListener("mouseover", changeColor)
    }
    container.appendChild(gridEle[i])
}

const button = document.querySelector("button");
button.addEventListener("click", clearBoard)