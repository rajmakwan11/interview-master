require("dotenv").config()
const app = require('./src/app')
const connectDB = require('./src/db/db')
// const {resume, jobDescription, selfDeclaration} = require("./src/services/temp")
// const generateInterviewReport = require("./src/services/ai.service")

connectDB()
// generateInterviewReport({resume, jobDescription, selfDeclaration})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
