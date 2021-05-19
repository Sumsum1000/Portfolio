const spaceShip = document.querySelector('.space-ship-container');
//const spaceShipSprite = document.querySelector('.space-ship-sprite')
const pathTop = document.querySelector('.path-horizontal');
const pathRight = document.querySelector('.path-vertical');



/*- - - - - - - - - - - - - - - - - - - -  Switch Box   - - - - - - - - - - - - - - - - - - - - */
const switchHandle = document.querySelector('#light-trigger');
let switchOn = false;
switchHandle.addEventListener('click', () => {
    // Change handle sprite
    if (!switchOn) {
        const handleSprite = document.querySelector('#switch');
        handleSprite.src = 'images/Switch_on.png';
        handleSprite.classList.toggle('switch-off');
        handleSprite.classList.toggle('switch-on');
        switchOn = !switchOn;

        // Turn on the light
        setTimeout(() => {
            const light = document.querySelector('#light');
            light.src = 'images/Light_on.png';
        }, 900);


/*- - - - - - - ABOUT ME - - - - - - - - - - - - - - - */
                const A = document.querySelector('#A');
                const b = document.querySelector('#b');
                const o = document.querySelector('#o');
                const u = document.querySelector('#u');
                const t = document.querySelector('#t');
                const m = document.querySelector('#m');
                const e = document.querySelector('#e'); 
        
                const animLetters = [A, b, o, u, t, m, e];
        
                const animLetter = () => {
                    const randomNumber = Math.floor(Math.random() * 7);
                    const temp = animLetters[randomNumber];
                
                    temp.classList.add('up-down-anim');
                    temp.addEventListener("animationend", function() {
                    temp.classList.remove('up-down-anim');
                  });
                }

                setInterval(animLetter, 3800);
               
                     
        // m up
        setTimeout(() => {
            const m = document.querySelector('#m');
            m.classList.add('m-up');

            setTimeout(() => {
                m.classList.remove('m-start');
                m.classList.remove('m-up');  
            }, 2000);
        }, 1500)

        //content down
        setTimeout(() => {
            const content = document.querySelector('#content');
            content.classList.add('content-down');
        }, 1600);

        // Space ship on
        setTimeout(() => {
            spaceShip.classList.add('ship-opacity-anim');
            //spaceShip.classList.add('ship-idle-anim');
        }, 3500); 
    }
})


/*- - - - - - - - - - - - - - - - - - - -  Collision   - - - - - - - - - - - - - - - - - - - -  */
const detactCollision = (upElement, downElement) => {
    const downElementTop = topElement.getBoundingClientRect().top;
    const upElementBottom = upElement.getBoundingClientRect().bottom;
    if (downElementTop >= upElementBottom) {
        console.log('Hit');  
    }
}

/*- - - - - - - - - - - - - - - - - - - -  Space ship   - - - - - - - - - - - - - - - - - - - - */


document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(`x: ${x}, y: ${y}`)
})

document.body.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            moveRight(spaceShip, pathTop);
            break;
        case 'ArrowLeft':
            console.log(spaceShip.getBoundingClientRect().top);
            moveLeft(spaceShip, pathTop, pathRight);
            break;
        case 'ArrowUp':
            moveUp(spaceShip, pathTop);
            break;
        case 'ArrowDown':
            moveDown(spaceShip, pathTop, pathRight);
            if (spaceShip.getBoundingClientRect().y >= 750) {
                console.log('class on');
                spaceShip.classList.add('ship-anim-battle-start');
            }
            break;
        default:
            break;
    }
})

const moveUp = (element, border) => {
    if (checkBorderUp(element, border)) {
        const elementTop = element.getBoundingClientRect().top;
        element.style.top = `${elementTop - 10}px`;  
    }
};


const moveDown = (element, border, pathRight) => {
    if (checkBorderDown(element, border, pathRight)) {
        const elementTop = element.getBoundingClientRect().top;
        element.style.top = `${elementTop + 10}px`;
    }
};


const moveLeft = (element, border, rightBorder) => {
    if (checkBorderLeft(element, border, rightBorder)) {
        const elementLeft = element.getBoundingClientRect().left;
        element.style.left = `${elementLeft - 10}px`;
    }     
};


const moveRight = (element, border) => {
    if (checkBorderRight(element, border)) {
        const elementLeft = element.getBoundingClientRect().left;
        element.style.left = `${elementLeft + 10}px`; 
    }     
};


const checkBorderUp = (element, border) => {
    const elementTop = element.getBoundingClientRect().top;
    const borderTop = border.getBoundingClientRect().top;

    return elementTop > borderTop;
};


const checkBorderDown = (element, border, rightBorder) => {
    // check to path
    const elementBottom = element.getBoundingClientRect().bottom;
    const borderBottom = border.getBoundingClientRect().bottom;
    // check right path access
    const elementLeft = element.getBoundingClientRect().left;
    const rightBorderLeft = rightBorder.getBoundingClientRect().left;

    const bottomAccess = elementBottom - 10 < borderBottom;
    const rightHoleAcess = elementLeft > rightBorderLeft;


    return bottomAccess || rightHoleAcess;
};


const checkBorderLeft = (element, border, rightBorder) => {
    // top path border
    const elementLeft = element.getBoundingClientRect().left;
    const borderLeft = border.getBoundingClientRect().left;
    // right path border
    const rightBorderLeft = rightBorder.getBoundingClientRect().left;
    const elementTop = element.getBoundingClientRect().top;
    const borderBottom = border.getBoundingClientRect().bottom;
    const elementBottom = element.getBoundingClientRect().bottom;

    const isElementRightHorizontal = elementLeft > borderLeft;
    const isElementRightVertical = elementLeft > rightBorderLeft;

    if (elementTop + 55 < borderBottom) {
        return isElementRightHorizontal;
    }
    else if (elementTop > borderBottom) {
        return isElementRightVertical;
    }
}


const checkBorderRight = (element, border) => {
    const elementRight = element.getBoundingClientRect().right;
    const borderRight = border.getBoundingClientRect().right;

    return elementRight < borderRight -10;
}









