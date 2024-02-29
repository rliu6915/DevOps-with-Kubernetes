const crypto = require("crypto")

const genRandomString = () => {
  const randomString = crypto.randomUUID()
  // const newDate = new Date()

  console.log(`${new Date()}: ${randomString}`)

  setTimeout(genRandomString, 5000)
}

genRandomString()