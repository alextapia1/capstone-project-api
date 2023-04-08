exports.seed = async function (knex) {
    await knex('dates').del();
    await knex('dates').insert([
        {
            item_id: '1',
            info: 'meeting',
            category:'notes',
            complete: false
        },
        {
            item_id: '2',
            info: 'meeting',
            category: 'grocery list',
            complete: true
        },
        {
            item_id: '3',
            info: 'meeting',
            category:'pending',
            complete: true
        },
    ]);
};