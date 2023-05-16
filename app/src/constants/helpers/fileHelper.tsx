import imageCompression from 'browser-image-compression'; // https://github.com/Donaldcwl/browser-image-compression#readme

/**
 * Compress jpeg,jpg,png image and return compressed image file
 * @param imageFile 'imageFile' extract from uploaded file i.e 'e.target.files[0]'
 * @returns '{ file: compressedFile, error: true/false, message: 'Error/Success Message' }'. User can extract type, name, etc. from file. Error can be used to set formik error
 */
export const validateAndCompressImage = async (imageFile: any) => {
    if (imageFile) {
        if (imageFile.size > 5242880) {
            return ({
                file: imageFile,
                success: false,
                message: 'The file is too large! Max allowed size is 5MB.'
            })
        }
        if (['image/jpeg', 'image/jpg', 'image/png'].includes(imageFile.type)) {
        
            var options = {
                maxSizeMB: 2,
                useWebWorker: true,              // optional, use multi-thread web worker, fallback to run in main-thread (default: true)
                // maxWidthOrHeight: 1920,       //(default: undefined) - random compression if needed
                // initialQuality: number,       // optional, initial quality value between 0 and 1 (default: 1)
                // alwaysKeepResolution: boolean // optional, only reduce quality, always keep width and height (default: false)
                // fileType: string,             // optional, fileType override e.g., 'image/jpeg', 'image/png' (default: file.type)
            }
            try {
                const compressedFile = await imageCompression(imageFile, options);
              
                //Convert blob to file
                const newImgFile = new File([compressedFile], compressedFile.name, { lastModified: new Date().getTime(), type: compressedFile.type })

                return ({
                    file: newImgFile,
                    success: true,
                    message: 'success'
                })
            } catch (error:any) {
                return ({
                    file: imageFile,
                    success: false,
                    message: error.message
                })
            }
        } else {
            return ({
                file: imageFile,
                success: false,
                message: 'Only the following formats are acceptable: .jpeg, .jpg, .png'
            })
        }
    } else {
        return ({
            file: imageFile,
            success: false,
            message: 'No file found!'
        })
    }
}
