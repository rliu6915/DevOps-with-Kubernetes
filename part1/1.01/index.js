const genRandomString = () => {
  const randomHash = Math.random().toString(36).substr(2, 6)

  console.log(randomHash)

  setTimeout(genRandomString, 5000)
}

genRandomString()