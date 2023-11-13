console.log(hi);

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return cleanStr === cleanStr.split('').reverse().join('');
}

const testString = "A man, a plan, a canal, Panama!";
if (isPalindrome(testString)) {
  console.log(`${testString} is a palindrome.`);
} else {
  console.log(`${testString} is not a palindrome.`);
}
