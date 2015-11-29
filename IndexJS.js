function findPrimeNum(n) {
	var n = document.getElementById('input').value;
	var x = 1;
	if(n == '' || isNaN(n)){
		alert('Please enter number');
		return false;
	}
	if(n == 0 || n == 1) x = 0;
	
	for(i=2; i<n; i++) {
		if(n%i == 0){
			x = 0;
			break;
		}
	}	
		if(x == 1){
			var d = n + " "+" is prime";
		}
		else{
			var d = n+ " " + " is not prime";
		}
		document.getElementById('display').innerHTML = d;
	}

function reset(){
	document.getElementById('input').value = '';
	document.getElementById('display').innerHTML= '';
}