/**
 * 
 */

var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('mydatabase', server, { w: 1 });

// ACCESSING A MONGODB COLLECTION
client.open(function (err) {
    if (err) throw err;
    client.collection('test_insert', function (err, collection) {
        if (err) throw err;
        // Put MongoDB query code here
        console.log('We are now able to perform queries.');
        insertDocument(collection);
    });
});

// INSERTING A DOCUMENT INTO A COLLECTION
function insertDocument(collection) {
    collection.insert(
        {
            "title": "I like cake",
            "body": "It is quite good."
        },
        { safe: true }, // Safe mode indicates database operation should be completed before callback is executed
        function (err, documents) {
            if (err) throw err;
            console.log('Document ID is: ' + documents[0]);
        }
    );
}
/**
 * Document identifiers from MongoDB are encoded in binary JSON
(BSON). BSON is a data interchange format primarily used by MongoDB instead of
JSON to move data to and from the MongoDB server. In most cases, it’s more space
efficient than JSON and can be parsed more quickly. Taking less space and being easier
to scan means database interactions end up being faster.
 */

// Updating a MongoDB document
var _id = new client().bson_serializer
    .ObjectID('4e650d344ac74b5a01000001');
collection.update(
    { _id: _id },
    { $set: { "title": "I ate too much cake" } },
    { safe: true },
    function (err) {
        if (err) throw err;
    }
);
// SEARCHING FOR DOCUMENTS
collection.find({ "title": "I like cake" }).toArray(
    function (err, results) {
        if (err) throw err;
        console.log(results);
    }
);

// DELETING DOCUMENTS
var _id = new client
    .bson_serializer
    .ObjectID('4e6513f0730d319501000001');
collection.remove({ _id: _id }, { safe: true }, function (err) {
    if (err) throw err;
});