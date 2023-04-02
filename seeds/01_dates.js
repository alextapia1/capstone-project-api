exports.seed = async function (knex) {
    await knex('dates').del();
    await knex('dates').insert([
        {
            item_id: '1',
            category: 'Monday',
            data: 'meeting',
            complete: 'true',
            groceryList: 'cookies',
            notes: 'capstone',
            events: 'going to the movies',
            pending: 'capstone',
            weekly: 'true',
        },
        {
            item_id: '2',
            category: 'Tuesday',
            data: 'meeting',
            complete: 'true',
            groceryList: 'milk',
            notes: 'capstone',
            events: 'going to the movies',
            pending: 'capstone',
            weekly: 'true',
        },
        {
            item_id: '3',
            category: 'Wednesday',
            data: 'meeting',
            complete: 'true',
            groceryList: 'n/a',
            notes: 'capstone',
            events: 'going to the movies',
            pending: 'capstone',
            weekly: 'true',
        },
    ]);
};