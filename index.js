
/*
1. При нажатии на цифры -> input
2. При нажатии на С -> Сброс
3. При нажатии операторов -> запись в память
4. При нажатии на = -> посчитать и вывести
5. Окончательный результат -> сохраняется
*/

/*
document.getElementById('one').onclick = function() {
    alert('Hello')
}
*/

function checkOperator1(action) {
    switch (action) {
        case '+':
            return false;
        case '-':
            return false;
        case '*':
            return false;
        case '/':
            return false;
    }

    return true
}

const input = document.querySelector('.input');
input.addEventListener('input', (event) => {
    if (isNaN(parseInt(event.target.value))) {
        input.value = ''
    } else {
        input.value = parseInt(event.target.value)
    }
})



let arr = [];
let sum = '';

document.getElementById('plus').addEventListener('click', () => {
    if (checkOperator1(arr[arr.length - 1])) {
        input.value = ''
        arr.push('+')
        sum = arr.join('')
    } else {
        console.log('Ай-яй-яй')
    }
})
document.getElementById('minus').addEventListener('click', () => {
    if (checkOperator1(arr[arr.length - 1])) {
        input.value = ''
        arr.push('-')
        sum = arr.join('')
    } else {
        console.log('Ай-яй-яй')
    }
})
document.getElementById('x').addEventListener('click', () => {
    if (arr.length == 0) {
        console.log('пусто')
    } else {
    if (checkOperator1(arr[arr.length - 1])) {
        input.value = ''
        arr.push('*')
        sum = arr.join('')
    } else {
        console.log('Ай-яй-яй')
    }
})
document.getElementById('divide').addEventListener('click', () => {
    if (arr.length == 0) {
        console.log('пусто')
    } else {
        if (checkOperator1(arr[arr.length - 1])) {
            input.value = ''
            arr.push('/')
            sum = arr.join('')
        } else {
            console.log('Ай-яй-яй')
        }
    }
})

const numbers = document.querySelectorAll('.num')

for (let num of numbers) {
    num.addEventListener('click', (event) => {
        input.value += event.target.innerHTML
        arr.push(event.target.innerHTML)
        sum = arr.join('')
    })
}

document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    sum = ''
    arr = []
})


document.getElementById('ravno').addEventListener('click', () => {
    input.value = eval(sum);
})


/*
document.getElementById('one').addEventListener('click', () => {
    input.value += '1'
    arr.push(1)
    sum = arr.join('')
})
document.getElementById('two').addEventListener('click', () => {
    input.value += '2'
    arr.push(2)
    sum = arr.join('')
})
document.getElementById('three').addEventListener('click', () => {
    input.value += '3'
    arr.push(3)
    sum = arr.join('')
})
document.getElementById('four').addEventListener('click', () => {
    input.value += '4'
    arr.push(4)
    sum = arr.join('')
})
document.getElementById('five').addEventListener('click', () => {
    input.value += '5'
    arr.push(5)
    sum = arr.join('')
})
document.getElementById('six').addEventListener('click', () => {
    input.value += '6'
    arr.push(6)
    sum = arr.join('')
})
document.getElementById('seven').addEventListener('click', () => {
    input.value += '7'
    arr.push(7)
    sum = arr.join('')
})
document.getElementById('eight').addEventListener('click', () => {
    input.value += '8'
    arr.push(8)
    sum = arr.join('')
})
document.getElementById('nine').addEventListener('click', () => {
    input.value += '9'
    arr.push(9)
    sum = arr.join('')
})
document.getElementById('zero').addEventListener('click', () => {
    input.value += '0'
    arr.push(0)
    sum = arr.join('')
})
*/

/*

document.getElementByClass('action').addEventListener('click', () => {
    input.value = '0'
})
*/
