import dotenv from 'dotenv'

import ConnectDatabase from './db/index.js'

dotenv.config({path:'./env'})

ConnectDatabase();

















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
