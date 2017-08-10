block1 = document.querySelector('.block_1');
block2 = document.querySelector('.block_1__task_2');
paragrahp = document.querySelector('p');



// Задание 1

block1.addEventListener('mousemove',mouseMove);
block1.addEventListener('mouseout',mouseLeave);

function mouseMove(e){
    paragrahp.textContent = 'Координаты мыши в блоке: ' + e.offsetX + ' ' + e.offsetY;
}

function mouseLeave(){
    paragrahp.textContent = 'Координаты мыши в блоке:';
}

// Задание 2

block2.addEventListener('dblclick',mouseDouble);

function mouseDouble(){
    block2.style.backgroundImage = 'url(images/open.png)'
}