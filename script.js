const parent = document.querySelector('.parent');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const randomRgb1 = Math.floor(Math.random() * 255);
    const randomRgb2 = Math.floor(Math.random() * 255);
    const randomRgb3 = Math.floor(Math.random() * 255);
    const newBox = document.createElement('div');
    newBox.setAttribute('class', 'parent__box');
    newBox.style.border = `2rem solid rgb(${randomRgb1},${randomRgb2},${randomRgb3})`
    
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

function checkForChildren (start) {
    let childrenCheck = start;

    if(!childrenCheck.firstChild) {
        return childrenCheck;
    }
    
    return checkForChildren(childrenCheck.firstChild);
    
}