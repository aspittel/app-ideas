
exports.seed = function (knex, Promise) {
  return knex('ideas').del().then(() => {
    return knex('ideas').insert([
        {creator: 'Ali', idea: 'A To Do List app!'},
        {creator: 'Ali', idea: 'A Blog!'},
        {creator: 'Ali', idea: 'A calculator'}
    ])
  })
}
