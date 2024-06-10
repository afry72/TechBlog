const { Comment } = require('../models');

const commentData = [
    {
        content: "Wow, this is amazing",
        user_id: 2,
        post_id: 1
    },
    {
        content: "Very interesting and timely topic",
        user_id: 4,
        post_id: 2
    },
    {
        content: "Promising innovation",
        user_id: 4,
        post_id: 3
    },
    {
        content: "Wow, this is amazing.",
        user_id: 5,
        post_id: 4
    },
    {
        content: "Can't get over the name of this program. I'm surprised Silicon Valley hasn't scooped and and purchased it",
        user_id: 6,
        post_id: 5
    },
    {
        content: "Well worth considering.",
        user_id: 2,
        post_id: 6
    },
    {
        content: "Well worth considering.!",
        user_id: 3,
        post_id: 1
    },
    {
        content: "Wow, this is amazing",
        user_id: 4,
        post_id: 4
    },
    {
        content: "Can't believe how far we've come!",
        user_id: 5,
        post_id: 2
    },
    {
        content: "Innovation at its finest",
        user_id: 6,
        post_id: 3
    },
    {
        content: "This is the stuff of sci-fi dreams!",
        user_id: 5,
        post_id: 5
    },
    {
        content: "Tech never fails to amaze me",
        user_id: 6,
        post_id: 6
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;