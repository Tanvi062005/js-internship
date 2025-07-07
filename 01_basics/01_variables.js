const accountId = 144553
let accountEmail = "tanvig@gmail.com"
var accountPW = "1234321"
accountCity = "Jaipur"

accountEmail = "hc@hc.com"
accountPW = "21212121"
accountCity = "Bengalaru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPW, accountCity]);
