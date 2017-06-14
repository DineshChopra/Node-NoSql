var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks'); // tasks is the database

// REGISTERING A SCHEMA
/**
 * When managing data using Mongoose, you’ll need to register a schema.
 */
var Schema = mongoose.Schema;
var Tasks = new Schema({
    project: String,
    description: String
});
mongoose.model('Task', Tasks);

/**
 * Mongoose schemas are powerful. In addition to defining data structures, they also
allow you to set defaults, process input, and enforce validation.
 */
var Task = mongoose.model('Task');
var task = new Task();
task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';
function saveTask() {
    task.save(function (err) {
        if (err) throw err;
        console.log('Task saved.');
    });
}

// SEARCHING FOR A DOCUMENT
function searchTask() {
    Task.find({ 'project': 'Bikeshed' }, function (err, tasks) {
        for (var i = 0; i < tasks.length; i++) {
            console.log('ID:' + tasks[i]._id);
            console.log(tasks[i].description);
        }
    });
}

// UPDATING A DOCUMENT -- 5940d5490b0be665602b02c4
function updateTask(taskId) {
    var Task = mongoose.model('Task');
    Task.update(
        { _id: taskId }, // id can be changed in your case
        { description: 'Paint the bikeshed green.' },
        { multi: false },
        function (err, rows_updated) {
            if (err) throw err;
            console.log('Updated.');
            searchTask(); // verify update task
        }
    );
}

// REMOVING A DOCUMENT
function removeDocument(taskId) {
    Task.findById('5940d5aeca001d836038cd5a', function (err, task) {
        task.remove(function(err, data){
            if (err) throw err;
            console.log('Deleted .');
        });
    });
}
// saveTask();
searchTask();
// updateTask('5940d5490b0be665602b02c4');
// searchTask();
// removeDocument('5940d5aeca001d836038cd5a');





// Terminate your Mongoose-created connection,
// mongoose.disconnect();