const knex = require('../../knexfile')
const config = process.env.NODE_ENV || 'development'
const database = require('knex')(knex[config])

function getSummary(db = database){
  return db('positions')
    .select('id')
    .select('position_name')
    .select('img_url')
    .select('img_name')
    .then(res => res)
}

function getPositionDetail(id, db = database){
  return db('positions')
    .where('id', id)
    .first()
    .then(res=>res)
}

function updatePosition(id, position){
  return 'update position: ' + id
}

function addPosition(position, db = database){
  return db('positions')
    .insert(position)
    .then(res => res)
}

function deletePosition(id){
  return 'delete position'
}

module.exports = {
  getSummary,
  getPositionDetail,
  updatePosition,
  addPosition,
  deletePosition
}