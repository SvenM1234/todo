
let contMeteor = document.querySelector('.cont-meteor');


for (let i = 0; i < 130 ; i++) {

    let div = document.createElement('div');
    div.setAttribute('class', 'meteor');
    contMeteor.appendChild(div);
}

for (let i = 0; i < 130 ; i++) {

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'meteor2');
    contMeteor.appendChild(div2);
}

let allMeteor = document.querySelectorAll('.meteor');
let allMeteor2 = document.querySelectorAll('.meteor2');

allMeteor.forEach(meteor => {
    meteor.style.top = (Math.random()*20)*(Math.random()*60)+'px',
    meteor.style.left = (Math.random()*20)*(Math.random()*60)+'px',
    
    meteor.animate([
        {transform: 'rotate('+Math.round(Math.random())*5+'deg)'},
        {transform: 'translateY('+(Math.random()*20)*(Math.random()*60)+'px) translateX('+(Math.random()*15)*(Math.random()*23)+'px)'},
        {transform: 'translateX('+(Math.random()*30)*(Math.random()*40)+'px) translateY('+(Math.random()*23)*(Math.random()*34)+'px)'},
    ], {
        duration: 8000,
        direction: 'alternate',
        iterations: Infinity
    })

});


allMeteor2.forEach(meteor2 => {
    meteor2.style.top = (Math.random()*20)*(Math.random()*60)+'px',
    meteor2.style.right = (Math.random()*20)*(Math.random()*60)+'px',
    
    meteor2.animate([
        {transform: 'rotate('+Math.round(Math.random())*5+'deg)'},
        {transform: 'translateY('+(Math.random()*20)*(Math.random()*60)+'px) translateX('+(Math.random()*15)*(Math.random()*23)+'px)'},
        {transform: 'translateX('+(Math.random()*30)*(Math.random()*40)+'px) translateY('+(Math.random()*23)*(Math.random()*34)+'px)'},
    ], {
        duration: 8000,
        direction: 'alternate',
        iterations: Infinity
    })

});
