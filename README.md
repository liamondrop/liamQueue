liamQueue
=========

Simple async queueing for Node.js or the browser. [Example page](http://liamondrop.github.io/queue_example/).

in Node:
```javascript
var Q = require('./liamQueue'),
	q = Q.Queue(2),
	pos = 0,
	start;

function task() {
  var r = Math.random() * (20 - 1) + 1
  console.log(pos++, q.isRunning(), q.inFlight(), q.size())
  setTimeout(function () { console.log(r) }, r)
}

start = new Date;

q.addCallback(function () {
  	console.log("completed in " + (new Date - start) + 'ms');
  	console.log(q.isRunning(), q.inFlight())
 })
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .start();
```

in browser:
```
<script src="liamQueue.js"></script>
<script>
var q = Queue(2),
	pos = 0,
	start;

function task() {
  var r = Math.random() * (20 - 1) + 1
  console.log(pos++, q.isRunning(), q.inFlight(), q.size())
  setTimeout(function () { console.log(r) }, r)
}

start = new Date;

q.addCallback(function () {
  	console.log("completed in " + (new Date - start) + 'ms');
  	console.log(q.isRunning(), q.inFlight())
 })
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .addTask(task)
 .start();
</script>
```
