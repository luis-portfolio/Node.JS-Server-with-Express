const { mkdirSync } = require("fs")
const { join } = require("path")

const basePath = (filepath, filename) => {
    const store = join(__dirname, '../../store/app/uploads/' + filepath)
    let fullPath = join(store, filename)
    // console.log({ store, fullPath });
    mkdirSync(store, { recursive: true });
    return fullPath
}

module.exports = {
    store: async (req, res) => {
        try {
            // console.log(req);

            if (!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                let data = [];
                const files = Object.values(req.files)
                files.forEach(file => {
                    const filename = file.name
                    const filepath = req.body[filename] || ""
                    file.mv(basePath(filepath, file.name));
                    const { name, size, mimetype, md5 } = file
                    data.push({ file: name, bytes: size, type: mimetype, md5 });
                })

                data = {
                    path: "./store/app/uploads",
                    files: data,
                    message: 'Files were saved',
                    status: true
                }

                console.log(data);

                //return response
                res.send(data)
            }
        } catch (err) {
            console.log({ err })
            res.status(500).send(err);
        }
    }
}