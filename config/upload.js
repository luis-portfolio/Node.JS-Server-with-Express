const { mkdirSync } = require("fs");
const { join } = require("path")

const basePath = (refPath) => {
    const store = join(__dirname, refPath)
    // console.log("fileUploadConfig", { store });
    mkdirSync(store, { recursive: true });
    return store
}


const fileSize = 2 * 1024 * 1024 * 1024 //2MB max file(s) size
const fileUploadConfig = {
    parseNested: true,
    useTempFiles: true,
    createParentPath: true,
    abortOnLimit: true,
    preserveExtension: true,
    safeFileNames: true,
    uriDecodeFileNames: true,
    responseOnLimit: "File size limit has been reached",
    limitHandler: false,
    uploadTimeout: 60000,
    tempFileDir: basePath('../store/tmp/uploads/'),
    limits: { fileSize }
}

module.exports = fileUploadConfig