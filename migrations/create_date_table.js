exports.up = function (knex) {
    return knex.schema.createTable('dates', (table) =>{
        table.uuid('item_id').primary();
        table.string('category').notNullable();
        table.string('data').notNullable();
        table.string('complete').notNullable();
        table.string('groceryList').notNullable();
        table.string('notes').notNullable();
        table.string('events').notNullable();
        table.string('pending').notNullable();
        table.string('weekly').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('dates');
};