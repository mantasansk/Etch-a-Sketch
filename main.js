function createGrid(gridSize, cellSize) {
    for(let y=0; y<gridSize; y++) {
        let parentDiv = document.createElement("div");
        parentDiv.id = `row${y}`;
        parentDiv.classList.add("row");
        parentDiv.style.cssText = `max-height: ${cellSize}px; max-width: ${cellSize * gridSize}px;`;

        for(let x=0; x<gridSize; x++){
            let childDiv = document.createElement("div");
            childDiv.style.cssText = `height: ${cellSize}px; width: ${cellSize}px;`;
            childDiv.id = `cell${x}_${y}`;
            childDiv.classList.add("cell");
            parentDiv.appendChild(childDiv);
        }
        document.querySelector("body").appendChild(parentDiv);
    }
}


function colorCell(e) {
    let cell = e.target;
    if (cell.classList.contains("colored")) return;

    cell.classList.add("colored");
}


createGrid(16, 20);
const cells = document.querySelectorAll(".cell");
cells.forEach(e => e.addEventListener("mouseenter", colorCell));
