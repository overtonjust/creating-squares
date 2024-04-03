const parent = document.querySelector('.parent');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const randomRgb = Math.floor(Math.random() * 255);
    const newBox = document.createElement('div');
    newBox.setAttribute('class', 'parent__box');
    newBox.style.border = `2rem solid rgb(${randomRgb},${randomRgb},${randomRgb})`
    
    if(!parent.lastElementChild) {
        parent.appendChild(newBox)
    }

    else  {
      let addBoxHere = checkForChildren(parent);
      console.log(addBoxHere)
      addBoxHere.appendChild(newBox)
     
    }
    
})

function checkForChildren (start) {
    let adjustingChild = start;
    let child = start.hasChildNodes();
    let adult = adjustingChild.parentElement;
    

    if(child) {
        adjustingChild = start.firstChild
        checkForChildren(adjustingChild);
    }

    else {
        return adult;
    }
}