const BTN = document.getElementById("btn")

const handleOnClick = (name) => {
  alert(`Button is clicked by ${name}`)
}


BTN.addEventListener('click', function() { handleOnClick('Fatos') })
