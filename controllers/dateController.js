const knex = require("knex")(require("../knexfile"));
const { v4: uuid } = require("uuid");


exports.index = (req, res) => {
  knex
    .select("*")
    .from("dates")
    .then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
      //send array of js objects in json
    })
    .catch(
      (err) => res.status(400).send(`Error retrieving rows: ${err}`)
      //send bad request status code
    );
};
//need ternary operator for both daily and weekly
exports.delete = (req, res) => {
  knex("dates")
    .where({ item_id: item_id })
    .delete({ data: data })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};

exports.addDate = (req, res) => {

  for (let i =0; i< req.body.daily.length; i++){

    const newDate = {
      item_id: uuid(),
      info: req.body.daily[i],
      complete: false,
    };

    knex("dates")
      .insert(newDate)
      .then(() => {
        if (i === req.body.daily.length)
        res.status(201).json(newDate);
      })
      .catch((error) => res.status(400).send(`Error creating Date: ${error}`));
    }
    //create for.each()

};

exports.editDate = (req, res) => {
  knex("dates")
    .update(req.body)
    .where({ item_id: item_id })
    .then((rows) => {
      if (!rows) {
        return res.status(404).send("DateId not found");
      }
      res.status(200).send(`Date with id: ${item_id} has been updated`);
    })
    .catch((err) =>
      res.status(400).send(`Error updating Date with id:  ${item_id} ${err}`)
    );
};

// ternary operator for both daily and weekly
// const deleteColumn = dailyOrWeekly === 'daily' ? 'daily' : 'weekly';

// knex('my_table')
//   .where('id', id)
//   .update({
//     [deleteColumn]: null
//   })
