const EXPRESS = require('express')

const SERVER = EXPRESS()
const PORT = process.env.PORT || 5555

SERVER.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}`)
)
