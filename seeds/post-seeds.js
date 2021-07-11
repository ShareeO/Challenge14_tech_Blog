const { Post } = require('../models');

const postdata = [
{
    user_id: 10,
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    title: 'Donec posuere metus vitae ipsum.',
    created_at: 'IDK'
},

{
    user_id: 8,
    post_url: 'https://nasa.gov/donec.json',
    title: 'Morbi non quam nec dui luctus rutrum.',
    created_at: 'IDK'
},

{
    user_id: 1,
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    created_at: 'IDK'
},

{
    title: 'Nunc purus.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
    created_at: 'IDK'
},

{
    title: 'Pellentesque eget nunc.',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
    created_at: 'IDK'
},

{
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4,
    created_at: 'IDK'
},

{
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1,
    created_at: 'IDK'
},

{
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
    created_at: 'IDK'
},

{
    title: 'Duis ac nibh.',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
    created_at: 'IDK'
},

{
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
    created_at: 'IDK'
},

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;