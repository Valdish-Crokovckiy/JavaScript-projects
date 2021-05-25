function getTags(selector) {
  const element = document.querySelector(selector)
  if (element) {
    return element
  } else {
    throw new Error(`Please check ${selector} selector`)
  }
}

const URL = 'https://api.chucknorris.io/jokes/random'

const getJokes = async () => {
  try {
    const response = await fetch(URL)
    const getJoke = await response.json()
    displayJokes(getJoke)
  } catch (err) {
    console.log(err)
  }
}
getTags('.btn').addEventListener('click', getJokes)

function displayJokes({ value: jok }) {
  getTags('.img').classList.add('shake-img')
  const random = Math.random() * 2000
  getTags('.content').textContent = jok
  setTimeout(() => {
    getTags('.img').classList.remove('shake-img')
  }, random)
}
