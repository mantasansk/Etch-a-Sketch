function createGrid(gridSize, cellSize) {
    for(let y=0; y<gridSize; y++) {
        let parentDiv = document.createElement("div");
        parentDiv.id = `row${y}`;
        parentDiv.classList.add("row");
        parentDiv.style.cssText = `max-height: ${cellSize}px; max-width: ${cellSize * gridSize}px;`;

        for(let x=0; x<gridSize; x++){
            let childDiv = document.createElement("div");
            childDiv.style.cssText = `border: 2px solid black; height: ${cellSize}px; width: ${cellSize}px;
                                        box-sizing: border-box; display: inline-grid;`;
            childDiv.id = `cell${x}_${y}`;
            childDiv.classList.add("cell");
            parentDiv.appendChild(childDiv);
        }
        document.querySelector("body").appendChild(parentDiv);
    }
}


createGrid(16, 20);