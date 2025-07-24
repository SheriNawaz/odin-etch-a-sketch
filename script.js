const container = document.querySelector(".container");
function generateGrid(gridSize){
    for(let i = 0; i < gridSize**2; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add("content");
        newDiv.style.width = `${100 / gridSize}%`;
        newDiv.style.height = `${100 / gridSize}%`;
        newDiv.addEventListener('mouseenter', function () {
            if (!this.style.backgroundColor) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                this.style.opacity = "0.1";
            } else {
                let currentOpacity = parseFloat(this.style.opacity);
                if (currentOpacity < 1) {
                    currentOpacity = Math.min(currentOpacity + 0.1, 1);
                    this.style.opacity = currentOpacity.toString();
                }
            }
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

