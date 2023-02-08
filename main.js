function createGrid(cellsNumber) {
    let cellSize = Math.floor(gridSize / cellsNumber);
    for(let y=0; y<cellsNumber; y++) {
        let parentDiv = document.createElement("div");
        parentDiv.id = `row${y}`;
        parentDiv.classList.add("row");
        parentDiv.style.cssText = `max-height: ${cellSize}px; max-width: ${cellSize * cellsNumber}px;`;

        for(let x=0; x<cellsNumber; x++){
            let childDiv = document.createElement("div");
            childDiv.style.cssText = `height: ${cellSize}px; width: ${cellSize}px;`;
            childDiv.id = `cell${x}_${y}`;
            childDiv.classList.add("cell");
            parentDiv.appendChild(childDiv);
        }
        grid.appendChild(parentDiv);
    }
}


function colorCell(e) {
    let cell = e.target;
    if (cell.classList.contains("colored")) return;

    cell.classList.add("colored");
}

function makeNewGrid() {
    let numberOfCells = parseInt(prompt("Enter the number of cells for a new grid to be NxN (max number of cells is 100:"))

    if (numberOfCells > 100) numberOfCells = 100;
    else if (numberOfCells < 1) numberOfCells = 1;

    document.querySelectorAll(".row").forEach(e => grid.removeChild(e));
    createGrid(numberOfCells);
    let cells = document.querySelectorAll(".cell");
    cells.forEach(e => e.addEventListener("mouseenter", colorCell));
}


function initialize() {
    grid.style.minWidth = `${gridSize}px`;
    grid.style.minHeight = `${gridSize}px`;
    grid.style.maxWidth = `${gridSize}px`;
    grid.style.maxHeight = `${gridSize}px`;

    createGrid(20);
    let cells = document.querySelectorAll(".cell");
    cells.forEach(e => e.addEventListener("mouseenter", colorCell));

    document.querySelector("#newGrid").addEventListener("click", makeNewGrid)
}


const grid = document.querySelector("#grid");
const gridSize = 800;
initialize()
