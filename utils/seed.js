const connection = require('../config/connection');
const {User, Thought} = require('../models')

connection.on('error', (err)=> err);

connection.once('open', async () => {
    console.log('connection successful');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [
		{
			"_id": "0130ap969ys0418",
			"username": "Jess",
			"email": "jess@gmail.com",
			"thoughts": ["0130ap969ys0418t1"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "0130ap969ys0419",
			"username": "Sujil",
			"email": "sujil@gmail.com",
			"thoughts": ["0130ap969ys0419t1"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "0130ap969ys0420",
			"username": "Indie",
			"email": "indie@gmail.com",
			"thoughts": ["0130ap969ys0420t1"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "0130ap969ys0421",
			"username": "Reid",
			"email": "reid@gmail.com",
			"thoughts": ["0130ap969ys0421t1"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "0130ap969ys0422",
			"username": "Kristin",
			"email": "kristin@gmail.com",
			"thoughts": ["0130ap969ys0422t1"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		}
	]

    const thoughts = [
        {
            "_id": "0130ap969ys0418",
            "thoughtText": "Work hard, code harder!",
            "username": "Jess",
            "createdAt": "Apr 2nd 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 2,
            "id": "0130ap969ys0418t1"
        },
        {
            "_id": "0130ap969ys0419",
            "thoughtText": "Coding > sleep",
            "username": "Sujil",
            "createdAt": "Apr 3rdth 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "0130ap969ys0419t1"
        },
        {
            "_id": "0130ap969ys0420",
            "thoughtText": "I love this app!",
            "username": "Indie",
            "createdAt": "Apr 3rd 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "0130ap969ys0420t1"
        },
        {
            "_id": "0130ap969ys0421",
            "thoughtText": "I have many thoughts",
            "username": "Reid",
            "createdAt": "Apr 4th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "0130ap969ys0421t1"
        },
        {
            "_id": "0130ap969ys0422",
            "thoughtText": "Georgia Tech is the best!",
            "username": "Kristin",
            "createdAt": "Apr 4th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "0130ap969ys0422t1"
        }
    ]

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('seeding completed!');
    process.exit(0);
});