// exports.up = (knex, Promise) => {
//   return knex.schema.createTable('users', table => {
//     table.increments('id')
//     table.string('username')
//     table.binary('hash')
//   })
// }

// exports.down = (knex, Promise) => {
//   return knex.schema.dropTable('users')
// }


exports.up = (knex, Promise) => {
  return knex.schema.createTable('videos', table => {
    table.increments('id')
    table.string('videoname')
    table.binary('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('videos')
}
