const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Update a user
    updateUser(req, res) {
        User.findByIdAndUpdate({ _id: req.params.userId})
        .then((user) => 
        !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : User.updateOne({ _id: { $in: user}})
        ) 
        .then(() => res.json({ message: 'User updated!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a user and associated thoughts
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
};
