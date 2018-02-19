
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', table => {
      table.increments('id').primary()
      table.string('comment')
      table.string('creator')
      table.integer('ideas_id').references('ideas.id')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ])
}
