exports.seed = async function (knex) {
    await knex('dates').del();
    await knex('dates').insert([
        {
            item_id: '1',
            category: 'Monday',
            data: 'meeting',
            complete: 'true'
        },
        {
            item_id: '2',
            category: 'Tuesday',
            data: 'meeting',
            complete: 'true'
        },
        {
            item_id: '3',
            category: 'Wednesday',
            data: 'meeting',
            complete: 'true'
        },
    ]);
};