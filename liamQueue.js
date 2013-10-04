;(function (global) {

  function liamQueue(parallelism) {
    if (undefined === parallelism || 1 > parallelism) {
      throw new Error("Parallelism cannot be less than 1.");
    }

    var jobs = 0,
    working = false,
    tasks = [],
    _cb = {},
    _isFunc = function (fn) {
      return 'function' === typeof fn;
    },
    _flush = function () {
      if (tasks.length && jobs < parallelism) {
        var item = tasks.shift();
        jobs += 1;
        setTimeout(function () {
          working = true;
          try {
            if (_isFunc(item.task)) {
              item.task.call(item.context, item.task);
              jobs -= 1;
            }
            if (tasks.length + jobs === 0 && _isFunc(_cb.callback)) {
              working = false;
              _cb.callback.call(_cb.context, _cb.callback);
            }
          } catch (err) {}
          _flush();
        }, 0);
      }
    },
    lq = {
      size: function () {
        return tasks.length;
      },
      isRunning: function () {
        return working;
      },
      inFlight: function () {
        return jobs;
      },
      addTask: function (task, context) {
        var taskItem = {
          task: task,
          context: context || this
        };
        tasks.push(taskItem);
        return lq;
      },
      addCallback: function (callback, context) {
        _cb = {
          callback: callback,
          context: context || this
        };
        return lq;
      },
      start: function () {
        _flush();
        return lq;
      }
    };
    return lq;
  };

  global.Queue = liamQueue;

}(typeof exports != 'undefined' && exports !== null ? exports : window));