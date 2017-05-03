'use strict'

const mongoose = require('mongoose')

const zookeeperSchema = {
  name: String
}
const Zookeeper = mongoose.model('zookeeper', zookeeperSchema)

const Animal = mongoose.model('animal', {
  name: String,
  species: String,
  age: Number,
  zookeepers: [zookeeperSchema]
})
const User = mongoose.model('user', {
  email: String,
  password: String
})

module.exports = {zookeeperSchema, Zookeeper, Animal, User}