
let contMeteor = document.querySelector('.cont-meteor');


for (let i = 0; i < 130 ; i++) {

    let div = document.createElement('div');
    div.setAttribute('class', 'meteor');
    contMeteor.appendChild(div);
}

let allMeteor = document.querySelectorAll('.meteor');

allMeteor.forEach(meteor => {
    meteor.style.top = (Math.random())*1000+'px',
    meteor.style.left = (Math.random())*1000+'px',
    
    meteor.animate([
        {transform: 'rotate('+Math.round(Math.random())*5+'deg)'},
        {transform: 'translateY('+(Math.random()*20)*(Math.random()*60)+'px) translateX('+(Math.random()*15)*(Math.random()*23)+'px)'},
        {transform: 'translateX('+(Math.random()*30)*(Math.random()*40)+'px) translateY('+(Math.random()*23)*(Math.random()*34)+'px)'},


    ], {
        duration: 6000,
        direction: 'alternate',
        iterations: Infinity
    })

});
