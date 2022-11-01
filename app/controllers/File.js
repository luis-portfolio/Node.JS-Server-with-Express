const { mkdirSync } = require("fs")
const { join } = require("path")

const basePath = (filename) => {
    const store = join(__dirname, '../../store/app/uploads/')
    let fullPath = join(store, filename)
    // console.log({ store, fullPath });
    mkdirSync(store, { recursive: true });
    return fullPath
}

module.exports = {
    store: async (req, res) => {
        try {
            if (!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                let data = [];
                const files = Object.values(req.files)
                files.forEach(file => {
                    file.mv(basePath(file.name));
                    const { name, size, mimetype } = file
                    data.push({ file: name, bytes: size, type: mimetype });
                })

                // console.log(data);

                //return response
                res.send({
                    path: "./store/app/uploads",
                    files: data,
                    message: 'Files were saved',
                    status: true
                });
            }
        } catch (err) {
            console.log({ err })
            res.status(500).send(err);
        }
    }
}