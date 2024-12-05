import dotenv from 'dotenv' // It is a Nodejs module that loads environment variables from a .env file into the process.env object.

import ConnectDatabase from './db/index.js'

dotenv.config({path:'./env'})

ConnectDatabase()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("MONGODB CONNECTION FAILED !!: ", error);
    
})

















//DATABASE SETUP THROUGH IIFE(Immediately Invoked function Expression)
// ;( async () => {
//     try {
//      const DatabaseConnection =   await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
//       app.on("error", () => {
//         console.log("Err :", error);
//         throw error
        
//       })

//       app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`); 
//       })
//     } catch (error) {
//         console.error("ERROR :" , error);
//         throw error
//     }
// })()
