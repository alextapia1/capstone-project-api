exports.up = function (knex) {
    return knex.schema.createTable('dates', (table) =>{
        table.uuid('item_id').primary();
        table.string('category').();
        table.string('data').notNullable();
        table.string('complete').false()
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('dates');
};