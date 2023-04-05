exports.seed = async function (knex) {
    await knex('dates').del();
    await knex('dates').insert([
        {
            item_id: '1',
            info: 'meeting',
            complete: false
        },
        {
            item_id: '2',
            info: 'meeting',
            complete: true
        },
        {
            item_id: '3',
            info: 'meeting',
            complete: true
        },
    ]);
};