var users = [];

module.exports = {
    index: (req, res) => {
        if (req.params.id) {
            const index = users.findIndex(user => user.id === parseInt(req.params.id));
            if (index !== -1) {
                res.status(200).send(users[index]);
                return;
            }
            res.statusCode = 404;
            return res.json({ error: 'Not found' });
        }
        res.status(200).send(users);
    },
    store: (req, res) => {
        if (req.body) {
            let { id, name, lastName, age, birthday, email } = req.body;
            const index = users.findIndex(user => user.id === parseInt(id));
            id = ((id!==undefined) && (index === -1))?id:(users.length === 0) ? 1 : users[users.length - 1]["id"] + 1
            let user = { id, name, lastName, age, birthday, email }
            users.push(user);
            res.status(201).send(user);
            return;
        }
        res.statusCode = 400;
        return res.json({ error: 'Bad request' });
    },
    update: (req, res) => {
        if (req.params.id) {
            const index = users.findIndex(user => user.id === parseInt(req.params.id));
            if (index !== -1 && req.body) {
                let user = req.body;
                let userStored = users[index];
                userStored = {
                    id: userStored.id,
                    name: user.name ? user.name : userStored.name,
                    lastName: user.lastName ? user.lastName : userStored.lastName,
                    age: user.age ? user.age : userStored.age,
                    birthday: user.birthday ? user.birthday : userStored.birthday,
                    email: user.email ? user.email : userStored.email
                };
                users[index] = userStored;
                res.status(200).send(userStored);
                return;
            }
        }
        res.statusCode = 404;
        return res.json({ error: 'Not found' });
    },
    destroy: (req, res) => {
        if (req.params.id) {
            const index = users.findIndex(user => user.id === parseInt(req.params.id));
            if (index !== -1) {
                users.splice(index, 1);
                res.status(200).send();
                return;
            }
        }
        res.statusCode = 404;
        return res.json({ error: 'Not found' });
    }
}