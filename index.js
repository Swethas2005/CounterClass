let CounterClass = function () {
    let count = 0;
    let intervalId;
  
    function startCounter() {
      intervalId = setInterval(function () {
        increment();
        counter();
      }, 1000);
    }
  
    function stopCounter() {
      clearInterval(intervalId);
    }
  
    function increment() {
      count++;
    }
  
    function decrement() {
      count--;
    }
  
    function counter() {
      document.getElementById('counter').innerText = count;
    }
  
    document.getElementById('startBtn').addEventListener('click', function () {
      startCounter();
    });
  
    document.getElementById('incrementBtn').addEventListener('click', function () {
      stopCounter(); 
      increment();   
      counter();
    });
  
    document.getElementById('decrementBtn').addEventListener('click', function () {
      stopCounter(); 
      decrement();   
      counter();
    });
  };
  CounterClass();