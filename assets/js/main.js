
let element1 = document.getElementById('grauTaste');
let element2 = document.getElementById('weissTaste');
let element3 = document.getElementById('blauTaste');
let element4 = document.getElementById('gelbTaste');

element1.addEventListener('click',
    () => {
        document.body.style.backgroundColor = 'gray';
    }
);


element2.addEventListener('click',
    () => {
        document.body.style.backgroundColor = 'white';
    }
);

element3.addEventListener('click',
    () => {
        document.body.style.backgroundColor = 'blue';
    }
);

element4.addEventListener('click',
    () => {
        document.body.style.backgroundColor = 'yellow';
    }
);