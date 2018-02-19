const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection.development)

Model.knex(knexConnection)

class Comment extends Model {
  static get tableName () {
    return 'comments'
  }

  static get relationMappings () {
    return {
      idea: {
        relation: Model.BelongsToOneRelation,
        modelClass: Idea,
        join: {
          from: 'comments.ideas_id',
          to: 'ideas.id'
        }
      }
    }
  }
}

class Idea extends Model {
  static get tableName () {
    return 'ideas'
  }

  static get relationMappings () {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'ideas.id',
          to: 'comments.ideas_id'
        }
      }
    }
  }
}

module.exports = { Idea, Comment }
