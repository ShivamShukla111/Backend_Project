import {v2 as cloudinary} from "cloudinary"
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
          //upload the file on cloudinary
        const response =  await  cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
          })
          //file hasbeen uploaded
          console.log("File is uploaded on cludinary", response.url);
          return response

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary files as the upload operation got failed
        return null
    }
}


export default uploadCloudinary
     