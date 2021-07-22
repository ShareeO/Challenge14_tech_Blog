const { Post } = require('../models');

const postdata = [
{
    user_id: 10,
    title: 'Donec posuere metus vitae ipsum.',
    created_at: 'IDK'
},

{
    user_id: 8,
    title: 'Morbi non quam nec dui luctus rutrum.',
    created_at: 'IDK'
},

{
    user_id: 1,
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    created_at: 'IDK'
},

{
    title: 'Nunc purus.',
    user_id: 4,
    created_at: 'IDK'
},

{
    title: 'Pellentesque eget nunc.',
    user_id: 7,
    created_at: 'IDK'
},

{
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4,
    created_at: 'IDK'
},

{
    title: 'In hac habitasse platea dictumst.',
    user_id: 1,
    created_at: 'IDK'
},

{
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1,
    created_at: 'IDK'
},

{
    title: 'Duis ac nibh.',
    user_id: 9,
    created_at: 'IDK'
},

{
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5,
    created_at: 'IDK'
},

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;