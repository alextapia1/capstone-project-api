exports.up = function (knex) {
    return knex.schema.createTable('dates', (table) =>{
        table.uuid('item_id').primary();
        table.string('category').notNullable();
        table.string('data1').notNullable();
        table.string('data2').notNullable();
        table.string('data3').notNullable();
        table.string('complete').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('dates');
};