const accountId = 14459;
let accountEmail = "jaiho@gmail.com";
var accountPassword = "1245";
accountCity = "Pune";
let accountState;

// accountId = 2;  //not allowed

console.log(accountId);

accountEmail = "hc@gmail.com";
accountPassword = "454587";
accountCity = "Kolhapur";

/* 
Prefer not to use var
bcz issue in block scope and functional scope 
 */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
