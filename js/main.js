const gridDimension = 16;
let gridEle = [];
body = document.querySelector("body")

for(let i = 0; i < gridDimension; i++) {
    gridEle[i] = document.createElement("div");
    gridEle[i].classList.add(`row`)
    for(let j = 0; j < gridDimension; j++) {
        gridEle[i][j] = document.createElement("div");
        gridEle[i][j].classList.add(`column`)
        gridEle[i].appendChild(gridEle[i][j])
    }
    body.appendChild(gridEle[i])
}