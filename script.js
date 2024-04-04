const parent = document.querySelector('.parent');
const button = document.querySelector('button');


button.addEventListener('click', () => {
  
    const newBox = document.createElement('div');
    newBox.setAttribute('class', 'parent__box');
    newBox.style.border = `2rem solid  ${randomRGB()}`;
    
    if(!parent.firstChild) {
        parent.appendChild(newBox)
    }

    else  {
        
        addBoxHere = checkForChildren(parent.firstChild);
        if(addBoxHere.offsetWidth > 200 && addBoxHere.offsetWidth < 250 || addBoxHere.offsetHeight > 200 && addBoxHere.offsetHeight < 250) {
        
        }
        else {
            addBoxHere.appendChild(newBox)
        }
     
    }
    
})

function checkForChildren (parent) {

    if(!parent.firstChild) {
        return parent;
    }
    
    return checkForChildren(parent.firstChild);
    
}

function randomRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}