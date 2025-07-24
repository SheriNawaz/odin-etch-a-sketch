const container = document.querySelector(".container");
function generateGrid(gridSize){
    for(let i = 0; i < gridSize**2; i++){
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

generateGrid(16);

function clearGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const btn = document.querySelector("#btn");

btn.onclick = () => {
  let gridSize;
  do {
    const input = prompt("Enter a grid size between 1 and 100:");
    gridSize = Number(input);
  } while (
    isNaN(gridSize) ||        
    gridSize < 1 ||         
    gridSize > 100 ||       
    !Number.isInteger(gridSize) 
  );
  clearGrid();
  generateGrid(gridSize)
};

