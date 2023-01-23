
// ============ 1 ============

let clickbye = document.querySelector('a:nth-of-type(1)')
let design = document.querySelector('.bye')

clickbye.addEventListener('click', hotpink)

function hotpink() {
  design.classList.toggle('active')
}

// ============ 2 ============

let haha = document.querySelector('a:nth-of-type(2)')
let rondje = document.querySelector('.hihi')

haha.addEventListener('mouseover', hihi)


function hihi() {
  rondje.classList.toggle('active')
}

// ============ 3 ============

let interaction = document.querySelector('a:nth-of-type(3)')

interaction.addEventListener('dblclick', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// ============ 4 ============

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('mouseleave', dontLeave)
development.addEventListener('animationend', dontLeave)


function dontLeave() {
  development.classList.toggle('dontLeave')
}

// ============ 5 ============

let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('keydown', getbig)

function getbig() {
  sprint.classList.toggle('getbig')
}



// // ============ 6 ============

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('focus', fadeIn)

function fadeIn() {
  fix.classList.toggle('fadeIn')
}



// // ============ 7 ============

let fillLeft = document.querySelector('a:nth-of-type(7)')
let fillLeftclass = document.querySelector('.fill-left')

fillLeft.addEventListener('copy', fromLeft)

function fromLeft() {
  fillLeftclass.classList.toggle('active')
}




// // ============ 8 ============

let fillTop = document.querySelector('a:nth-of-type(8)')
let topClass = document.querySelector('.fill-top')

fillTop.addEventListener('drag', fromTop)

function fromTop() {
  topClass.classList.toggle('active')
}

// // ============ 9 ============

let fillBottom = document.querySelector('a:nth-of-type(9)')
let bottomClass = document.querySelector('.fill-bottom')

fillBottom.addEventListener('dragover', fromBottom)

function fromBottom() {
  bottomClass.classList.toggle('active')
}

// // ============ 10 ============

let fillRight = document.querySelector('a:nth-of-type(10)')
let rightClass = document.querySelector('.fill-right')

fillRight.addEventListener('keyup', fromRight)

function fromRight() {
  rightClass.classList.toggle('active')
}










