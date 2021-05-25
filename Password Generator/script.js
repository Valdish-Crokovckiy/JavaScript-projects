const resultEl = document.querySelector('#result'),
  inputPasswordLengthEl = document.querySelector('#length'),
  uppercaseEl = document.querySelector('#uppercase'),
  lowercaseEl = document.querySelector('#lowercase'),
  symbolsEl = document.querySelector('#symbols'),
  numbersEl = document.querySelector('#numbers'),
  buttonGenerateEl = document.querySelector('#generate'),
  buttonClipboardEl = document.querySelector('#clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

buttonClipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea'),
    password = resultEl.innerHTML

  if (!password) console.log('empty')

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied in clipboard!')
})

buttonGenerateEl.addEventListener('click', () => {
  const length = +inputPasswordLengthEl.value
  const hasLowes = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasSymbol = symbolsEl.checked
  const hasNumber = numbersEl.checked

  resultEl.innerHTML = generatePassword(
    hasLowes,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''

  const typesCount = lower + upper + number + symbol

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) {
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((item) => {
      const funcName = Object.keys(item)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }
  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
