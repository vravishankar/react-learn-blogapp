const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

const url = 'mongodb://localhost:27017/blog'

module.exports = {
    signUp: function(username, password, email) {
        MongoClient.connect(url, (err, db) => {
            console.log('Connected to Mongo DB')
            db.collection('users').insertOne({
                username: username,
                password: password,
                email: email
            }, function(err, result) {
                assert.equal(err, null)
                console.log('User registration successful!!')
            })
        })
    },
    validateSignIn: function(username, password, callback) {
        MongoClient.connect(url, (err, db) => {
            db.collection('users').findOne({
                username: username,
                password: password
            }, function(err, result) {
                if (result == null) {
                    callback(false)
                } else {
                    callback(true)
                }
            })
        })
    }
}