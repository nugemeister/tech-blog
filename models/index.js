const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// Create associations
User.hasMany(Comment, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Post, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Comment, Post  };
