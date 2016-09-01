
// var ltr = document.getElementById('ltrInput').value;
var reverse = document.getElementById('reverse');
var alphabit = document.getElementById('alphabit');
var palindrome = document.getElementById('palindrome');
// var out = document.getElementById('output');

reverse.addEventListener("click", reversal);
function reversal() {
	var arr = document.getElementById('ltrInput').value.split(' ');
	//console.log(arr);
	var revArr = arr.reverse();
	// console.log(revArr);
	// console.log(revArr.join(' '));
	document.getElementById('output').innerHTML += `<li>${revArr.join(' ')}</li>`;
};

alphabit.addEventListener("click",alphabits);
function alphabits() {
		str = document.getElementById('ltrInput').value.toLowerCase();
		if (str.indexOf(" ") >= 0){
			var index = str.indexOf(" ");
			//console.log(index);
			var strArray = str.split('');
			strArray.splice(index,1);
			strArray.sort();
			document.getElementById('output').innerHTML += `<li>${strArray.join(', ')}</li>`;
		}else{}
	}

palindrome.addEventListener("click",palindromes);
function palindromes() {
	var str = document.getElementById('ltrInput').value;
	var stripped = str.toLowerCase().replace(/\W|_/gi, '');
	var reversed = stripped.split('').reverse().join('');
  if (stripped === reversed)
    {
      document.getElementById('output').innerHTML +=`<li>Your string is a palindrome.</li>`;
    } 
    else{
    	document.getElementById('output').innerHTML +=`<li>Your string is NOT a palindrome.</li>`;
	}
}


 var testString = "eye";
 //reversal(testString);
// alphabits(testString);
// palindromes(testString);