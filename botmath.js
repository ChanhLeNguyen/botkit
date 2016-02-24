var sum = function (num1, num2) {
	return parseFloat(num1) + parseFloat(num2);
}

module.exports.sum = sum;

var isPrime = function (n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
 if (n%2==0) return (n==2);
 var m=Math.sqrt(n);
 for (var i=3;i<=m;i+=2) {
  if (n%i==0) return false;
 }
 return true;
}

module.exports.isPrime = isPrime;

function calculateFibonacciUpto(goal) {
    var fibonacci = [1, 1];
    while (fibonacci[fibonacci.length-1] < goal) {
        fibonacci.push(fibonacci[fibonacci.length-2] + fibonacci[fibonacci.length-1]);
    }

    return fibonacci;
}

var fibonacciNum = function(){
	return '1, 1, 2, 3, 5';
}
module.exports.fibonacciNum = fibonacciNum;

var fibonacci = function(num){
	var fibonacci = calculateFibonacciUpto(num);
	if (fibonacci[fibonacci.length-1] !== num) {
			return 'That is not a Fibonacci number!';
	}
	else {
		for (var i = 0; i < 5; i++){
			fibonacci.push(fibonacci[fibonacci.length-2] + fibonacci[fibonacci.length-1])
		}
			return fibonacci.slice(fibonacci.length - 5,fibonacci.length).join(', ');
	}
}
module.exports.fibonacci = fibonacci;

var prime = function(parameter){
	if (isPrime(parameter)) {
			var primes = new Array();
			var number = parameter - 1;

			while (primes.length < 10 && number >=0) {

					if (isPrime(number)) {
							primes.push(number);
					}
					number--;
			}

			var reply = "";
			for (var i = 0; i < primes.length; i++) {
					reply += primes[i] + " ";
			}

			return reply;
	}
	else {
			return "your parameter: " + parameter + " is not Prime number";
	}
}
module.exports.prime = prime;
