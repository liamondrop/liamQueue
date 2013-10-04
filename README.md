liamQueue
=========

Simple async queueing for Node.js or the browser

in Node.js:
```javascript
var Q = require('./liamQueue'),
	q = Q.Queue(2),
	pos = 0,
	start;

function worker() {
  var r = Math.random() * (20 - 1) + 1
  console.log(pos++, q.isRunning(), q.inFlight(), q.size())
  setTimeout(function () { console.log(r) }, r)
}

start = new Date;

q.addCallback(function () {
  	console.log("completed in " + (new Date - start) + 'ms');
  	console.log(q.isRunning(), q.inFlight())
 })
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .start();
```

in browser:
```
<script src="liamQueue.js"></script>
<script>
var q = Q.Queue(2),
	pos = 0,
	start;

function worker() {
  var r = Math.random() * (20 - 1) + 1
  console.log(pos++, q.isRunning(), q.inFlight(), q.size())
  setTimeout(function () { console.log(r) }, r)
}

start = new Date;

q.addCallback(function () {
  	console.log("completed in " + (new Date - start) + 'ms');
  	console.log(q.isRunning(), q.inFlight())
 })
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .addTask(worker)
 .start();
</script>
```
