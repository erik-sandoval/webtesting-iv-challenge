const express = require('express');
const knexConfig = require('./knexfile').development;
const db = require('knex')(knexConfig);

const server = express();

server.use(express.json());

server.post('/user', (req, res) => {
  if (req.body.name.length > 0) {
    return db('users')
      .insert(req.body)
      .then(user => {
        res.status(201).json({ message: 'user created' });
      })
      .catch(err => {
        res.status(500).json({ message: 'internal server error' });
      });
  } else {
    res.status(400).json({ message: 'username required' });
  }
});

server.delete('/user/:id', (req, res) => {
  const paramId = req.params.id;
  return db('users')
    .where({ id: paramId })
    .first()
    .del()
    .then(succ => {
      if (succ) {
        res.status(200).json({ message: 'deleted' });
      } else {
        res.status(404).json({ message: 'user not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server error' });
    });
});

module.exports = server;
