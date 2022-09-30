const { Post } = require('../models');

const postData = [
  {
    title: 'Why do sharks look scary?',
    content: 'Due to their impressive jaw power, sharks take on the shape that gives them a scary appearance to humans.',
    user_id: 1
  },
  {
    title: 'Why are squirrels cute?',
    content: 'Due to their love of nuts, they have evolved to look cute so that humans would not take their stock for alt-milks.',
    user_id: 2
  },
  {
    title: 'Why do humans always lose one sock of the pair?',
    content: 'A question that has plagued humans for ages - where does the other sock go..',
    user_id: 3
  },
  {
    title: 'Why does sugar taste so good?',
    content: 'See this post for a deep dive into how the bitter outside world leaves humans craving sugar at all times.',
    user_id: 4
  },
  {
    title: 'Why does avocado cost more?',
    content: 'After extensive market research into this question - our research team found breakthough. See this blog for detail into why your "basic" habit is costing you.',
    user_id: 5
  }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;