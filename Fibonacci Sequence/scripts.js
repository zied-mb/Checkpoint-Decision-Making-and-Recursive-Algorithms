function generateFibonacci() {
    const n = document.getElementById('fibInput').value;
    const result = fibonacci(n);
    document.getElementById('fibResult').innerText = `Fibonacci(${n}) = ${result}`;
  }
  
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  