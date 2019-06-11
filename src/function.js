setTimeout(function () {
    console.log('hello world');
}, 1000);

setTimeout(() => {
    console.log('hello world')
}, 1100);

function BlackDog() {
    this.name = '흰둥이';
    return{
        name : '검둥이',
        bark : function(){
            console.log(this.name + '멍멍!!');
        }
    }
}
const blackdog = new BlackDog();
blackdog.bark();

function WhiteDog(){
    this.name = '흰둥이';
    return{
        name : '검둥이',
        bark: () => {
            console.log(this.name + '믕믕!!')
        }
    }
}

const whitedog = new WhiteDog();
whitedog.bark();

function twice(value){
    return value * 2;
}

const triple = (value) => value * 3;