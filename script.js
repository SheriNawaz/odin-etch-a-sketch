
function generateGrid(gridSize){
    for(let i = 0; i < gridSize**2; i++){
        const container = document.querySelector(".container");
        const newDiv = document.createElement('div');
        newDiv.classList.add("content");
        newDiv.style.width = `${100 / gridSize}%`;
        newDiv.style.height = `${100 / gridSize}%`;
        newDiv.addEventListener('mouseenter', function () {
            this.classList.add("hover");
            this.style.backgroundColor = 'black';
        });
        container.appendChild(newDiv);
    }
}

generateGrid(4)