const User = require('../models/User');

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
          ? res.status(404).json({ message: 'I am sorry, there is no user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // Update the user
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'I am sorry, there is no user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete the user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'I am sorry, there is no user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId }, 
      {$addToSet: { friends: req.body } },
      { runValidators: true, new: true }
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'I am sorry, there is no user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove friend
  removeFriend(req, res) {
    User.findOneAndDelete(
      { _id: req.params.userId }, 
      { $pull: { friend: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'I am sorry, there is no user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
