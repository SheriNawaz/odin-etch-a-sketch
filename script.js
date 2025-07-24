for(let i = 0; i < 16*16; i++){
    const container = document.querySelector(".container");
    const newDiv = document.createElement('div');
    newDiv.classList.add("content");
    container.appendChild(newDiv);
}