exports.up = function (knex) {
    return knex.schema.createTable('dates', (table) =>{
        table.uuid('item_id').primary();
        table.string('info').notNullable();
        table.string('category').notNullable();
        table.boolean('complete').defaultTo(false)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('dates');
};