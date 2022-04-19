function changeColor(element) {

    let mode = element.target.classList[1];
    if(mode === "solid") {
        if(element.target.style.backgroundColor === "rgb(255, 255, 255)") {
            element.target.style.backgroundColor = "rgb(0, 0, 0)";
        }
        else {
            element.target.style.backgroundColor = "rgb(255, 255, 255)";
        }
    }
    else if(mode === "rainbow") {
        if(element.target.style.backgroundColor === "rgb(255, 255, 255)") {
            element.target.style.backgroundColor = `rgb(${getRGB(4, 64)}, ${getRGB(4, 64)}, ${getRGB(4, 64)})`
        }
        else {
            element.target.style.backgroundColor = "rgb(255, 255, 255)"
        }
    }
    else if(mode === "gradient") {
        
        if(element.target.style.backgroundColor != "rgb(0, 0, 0)") {
            element.target.style.backgroundColor = `rgb(${element.target.currGradient -= 15}, ${element.target.currGradient -= 15}, ${element.target.currGradient -= 15})`
        }
        else {
            element.target.style.backgroundColor = "rgb(255, 255, 255)"
        }

    }
    return
}

// used to determine mode in changeColor
function classChange(element) {
    let buttonClass = element.target.classList[0]
    let selectedMode = buttonClass
    containers = document.querySelectorAll(".column")
    containers.forEach(container => {
        container.classList.remove(currMode)
        container.classList.add(selectedMode)
        return;
    })
    clearBoard();
    //var used to determine mode in changeColor
    currMode = selectedMode;
    return
}

function clearBoard() {
    let filledDiv = document.querySelectorAll(".column");
    filledDiv.forEach(div => div.style.backgroundColor = "#ffffff");
}

function getRGB(interval, range) {
    return Math.floor(Math.random() * interval) * range;
}


const gridDimension = parseInt(prompt("Grid Dimension"));
let gridEle = [];
let currMode = "solid";
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
        //used inline css to be able to change colors in js function
        gridEle[i][j].style.backgroundColor = "#ffffff";
        //object used to determine shade strenght in changeColor/gradient
        gridEle[i][j]["currGradient"] = 255;
    }
    container.appendChild(gridEle[i])
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearBoard)

const rainbow = document.querySelector(".rainbow")
const gradient = document.querySelector(".gradient")
const solid = document.querySelector(".solid")

solid.addEventListener("click", classChange)
gradient.addEventListener("click", classChange)
rainbow.addEventListener("click", classChange)