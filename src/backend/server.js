//express server
const express = require("express")

//creation of app object
const app = express()


//requiring body parser
const bodyParser = require("body-parser")

//port for server as well as swagger
const PORT = process.env.PORT || 8081

//including database-mongoDB local
const db = require("./models/")
const cors = require("cors")



app.use(cors())


app.use(bodyParser.json())


function success(res, payload) {
  return res.status(200).json(payload)
}


//function for message to be print on POST request
function postResponse(res, payload) {
  return res.status(200).send({ "id": payload.id })
}



app.get("/vegetables", async (req, res, next) => {
  try {
    const vegetables = await db.Veg.find({}).sort({$natural:-1}).limit(100)
    return success(res, vegetables)
  } catch (err) {
    next({ status: 400, message: "failed to get meme" })
  }
})



app.post("/add", async (req, res, next) => {
  try {
    const vegetables = await db.Veg.create(req.body)
    return postResponse(res, vegetables)
  } catch (err) {
    next({ status: 409, message: "Post already exists!" })
  }
})




app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  })
})





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})