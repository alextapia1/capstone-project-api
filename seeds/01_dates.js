exports.seed = async function (knex) {
    await knex('dates').del();
    await knex('dates').insert([
        {
            item_id: '1',
            category: 'Monday',
            data1: 'meeting',
            data2: 'shopping',
            data3: 'work on capstone',
            complete: 'true',
        },
        {
            item_id: '2',
            category: 'Tuesday',
            data1: 'meeting',
            data2: 'cooking',
            data3: 'work on capstone',
            complete: 'true',
        },
        {
            item_id: '3',
            category: 'Wednesday',
            data1: 'work on capstone',
            data2: 'cleaning',
            data3: 'reading',
            complete: 'false',
        },
    ]);
};