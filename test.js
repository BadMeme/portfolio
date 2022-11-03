function isPalindrome(s) {
    //lowercase string
    //get rid non-alphanumeric characters
    //loop through string if it is a palindrome
        //conditional to determine if first half = last half
    //return a boolean
    let firstHalfArr = []
    let secondHalfArr = []
    
    let str = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
    
    for (let i=0; i< str.length; i++) {
        if(str[i] === str[str.length-i]) {
            console.log(`str: ${str[i]}`)
            firstHalfArr.push(str[i])
        } else {
            return false
        }
    }
    console.log(firstHalfArr)
};


test="bababab";
isPalindrome(test);