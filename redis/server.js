var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');
client.on('error', function (err) {
    console.log('Error ' + err);
});

// Storing as a key-value pair
client.set('color', 'red', redis.print);
client.get('color', function (err, value) {
    if (err) throw err;
    console.log('Got : ' + value);
});

// ------ Store data using a Hashtable ------
// Set hash table elements
client.hmset('camping', {
    'shelter': '2-person tent',
    'cooking': 'campstove'
}, redis.print);
// Get "camping" hashtable -- “cooking” element’s value
client.hget('camping', 'cooking', function (err, value) {
    if (err) throw err;
    console.log('Will be cooking with: ' + value);
});

// Get hash table keys
client.hkeys('camping', function (err, keys) {
    if (err) throw err;
    keys.forEach(function (key, i) {
        console.log(' ' + key);
    });
});

// ------ Store data using a List ------
client.lpush('users', 'RAM', redis.print);
client.lpush('users', 'SHAM', redis.print);
client.lrange('users', 0, -1, function (err, items) {
    if (err) throw err;
    items.forEach(function (item, i) {
        console.log('users : ' + item + ' :: ' + i);
    });
});

// ------ Store data using a Set ------
/**
 * if you try to store two identical values in a set,
 * the second attempt to store the value will be ignored
 */

client.sadd('ip_addresses', '204.10.37.96', redis.print);
client.sadd('ip_addresses', '204.10.37.96', redis.print);
client.sadd('ip_addresses', '72.32.231.8', redis.print);
client.smembers('ip_addresses', function (err, members) {
    if (err) throw err;
    console.log(members);
});

// ----------- DELIVERING DATA WITH CHANNELS
/**
 * Channels are data-delivery mechanisms that provide publish/subscribe
 * functionality
 * A Redis client can either subscribe or publish to any given channel. Subscribing to
a channel means you get any message sent to the channel. Publishing a message to a
channel sends the message to all clients subscribed to that channel.
 */