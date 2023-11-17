const mongoose = require('mongoose')

const Schema = mongoose.Schema

const genreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
})

// Virtual for the genre's url
genreSchema.virtual('url').get(function () {
  return `/catalog/genre/${this._genre}`
})

module.exports = mongoose.model('Genre', genreSchema)
