const BTN1 = document.getElementById('btn1')
const BTN2 = document.getElementById('btn2')
const RESULT1 = document.getElementById('show-result-1')
const RESULT2 = document.getElementById('show-result-2')

const handleClick = (type) => {
  const value = document.getElementById(type === 'first' ? 'first-input' : 'second-input').value
  if (type === 'first') {
    RESULT1.innerHTML = value
  } else {
    RESULT2.innerHTML = value
  }
}

BTN1.addEventListener('click', () => { handleClick('first') })
BTN2.addEventListener('click', () => { handleClick('second') })
