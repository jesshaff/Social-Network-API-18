const connection = require('../config/connection');
const {User, Thought} = require('../models')

connection.on('error', (err)=> err);

connection.once('open', async () => {
    console.log('connection successful');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [
		{
			"_id": "624fab68944719641c4a4d92",
			"username": "Jess",
			"email": "jess@gmail.com",
			"thoughts": ["624fab68944719641c4a4dt1"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "624fab68944719641c4a4d93",
			"username": "Sujil",
			"email": "sujil@gmail.com",
			"thoughts": ["624fab68944719641c4a4dt2"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "624fab68944719641c4a4d94",
			"username": "Indie",
			"email": "indie@gmail.com",
			"thoughts": ["624fab68944719641c4a4dt3"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "624fab68944719641c4a4d95",
			"username": "Reid",
			"email": "reid@gmail.com",
			"thoughts": ["624fab68944719641c4a4dt4"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		},
		{
			"_id": "624fab68944719641c4a4d96",
			"username": "Kristin",
			"email": "kristin@gmail.com",
			"thoughts": ["624fab68944719641c4a4d9t5"],
			"friends": [],
			"__v": 0,
			"friendCount": 0
		}
	]

    const thoughts = [
        {
            "_id": "624fab68944719641c4a4d92",
            "thoughtText": "Work hard, code harder!",
            "username": "Jess",
            "createdAt": "Apr 2nd 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 2,
            "id": "624fab68944719641c4a4dt1"
        },
        {
            "_id": "624fab68944719641c4a4d93",
            "thoughtText": "Coding > sleep",
            "username": "Sujil",
            "createdAt": "Apr 3rdth 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "624fab68944719641c4a4dt2"
        },
        {
            "_id": "624fab68944719641c4a4d94",
            "thoughtText": "I love this app!",
            "username": "Indie",
            "createdAt": "Apr 3rd 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "624fab68944719641c4a4dt3"
        },
        {
            "_id": "624fab68944719641c4a4d95",
            "thoughtText": "I have many thoughts",
            "username": "Reid",
            "createdAt": "Apr 4th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "624fab68944719641c4a4dt4"
        },
        {
            "_id": "624fab68944719641c4a4d96",
            "thoughtText": "Georgia Tech is the best!",
            "username": "Kristin",
            "createdAt": "Apr 4th 2022",
            "reactions": [],
            "__v": 0,
            "reactionCount": 0,
            "id": "624fab68944719641c4a4dt5"
        }
    ]

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding is completed!');
    process.exit(0);
});