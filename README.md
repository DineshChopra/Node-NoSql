# Redis
quick-start instructions for Redis setup : https://redis.io/topics/quickstart
Useful commands : https://redis.io/commands
Download Redis : https://github.com/rgl/redis/downloads

To start Redis Server execute redis-server.exe

Redis is a data store well suited to handling simple data that doesn’t need to be stored for long-term access, such as instant messages and game-related data. Redis stores data in RAM, logging changes to it to disk. The downside to this is that storage space is limited, but the advantage is that Redis can perform data manipulation quickly. If a Redis server crashes and the contents of RAM are lost, the disk log can be used to restore the data.

Redis resources:
    For basic understanding of Radis : http://try.redis.io/
    Redis in Action (Manning, 2013), Josiah L. Carlson’s book.

The most mature and actively developed Redis API module is Matt Ranney’s node_redis (https://github.com/mranney/node_redis) module. Install this module using the following npm command:
    npm install redis


# MongoDB
MongoDB is a general-purpose nonrelational database.
A MongoDB database stores documents in collections.

Download mongodb from https://www.mongodb.com/download-center#community

create the data directory
	mkdir c:/data/db
	
Go to extracted directory
	double click on downloded exe/.msi file
	cd C:\Program Files\MongoDB\Server\3.4\bin
Start mongodb server (That command should always be in running mode)
	mongod.exe --dbpath C:\data\db
For more information visit Quick start guide
	https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
Launch shell client of mongo - follow following steps
	cd c:/software/MongoDB/bin
	./mongo
	It allows us to connect mongodb server through this shell client
-------------------------------------------------------------
Few handy commands of mongodb

	use node-angular [It is used to access 'node-angular' database]
	show collections 	[It is used to show all collections/tables existing in node-angular db]
	db.messages.find()	[It is used to get all records in messages collection of current database]
	db.users.find()		[get all records from users collection]
	
------------------------------------------------------------
# Mongoose
LearnBoost’s Mongoose is a Node module that makes using MongoDB painless. Mongoose’s models (in odel-view-controller parlance) provide an interface to MongoDB collections as well as additional useful unctionality, such as schema hierarchies, middleware, and validation. A schema hierarchy allows the ssociation of one model with another, enabling, for example, a blog post to contain associated comments. iddleware allows the transformation of data or the triggering of logic during model data operations, making possible tasks like the automatic pruning of child data when a parent is removed. Mongoose’s validation support lets you determine what data is acceptable at the schema level, rather than having to manually deal with it.

For more info visit (http://mongoosejs.com/)
