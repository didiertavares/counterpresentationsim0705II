const p = document.querySelector("p")
console.log(p)
let number = 0
console.log(number)

function display()  {
    p.innerText = number
    if (number>0) {
        p.style.color = "green"
    } else if (number<0) {
        p.style.color = "red"
    } else {
        p.style.color = "white"
    }
}
function sub1() {
    --number
    display()
}
function reset() {
    number = 0
    display()
}
function add1() {
    ++number
    display()
}
function sub10() {
    number = number - 10
    display()
}
function add10() {
    number = number + 10
    display()
}

display()
