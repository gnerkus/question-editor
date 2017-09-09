const APP = require('./app')
const PORT = process.env.PORT || 5555

const SERVER = APP.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}`)
)
