const BTN = document.getElementById("show-btn")
const RESULT = document.getElementById("result")

const showSentence = () => {
  const inputValue = document.getElementById('user-input').value
  RESULT.innerHTML = `Result: ${inputValue}`
}

BTN.addEventListener('click', showSentence)
