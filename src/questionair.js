// import prompt from 'prompt';

// const properties = [
//   {
//     name: 'username',
//     validator: /^[a-zA-Z\s-]+$/,
//     warning: 'Username must be only letters, spaces, or dashes'
//   },
//   {
//     name: 'password',
//     hidden: true
//   }
// ];

// prompt.start();

// prompt.get(properties, function (err, result) {
//   if (err) {
//     return onErr(err);
//   }
//   console.log('Command-line input received:');
//   console.log('  Username: ' + result.username);
//   console.log('  Password: ' + result.password);
// });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }

var results = {};

results.a = {originalTitle: "One"};
var results2 = {b:{originalTitle: "Two"}};

console.log(results['a'].originalTitle);
console.log(results2['b'].originalTitle);

console.log(results.a)

// import prompt from 'prompt';

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {
//   if (err) {
//     return onErr(err);
//   }
//   console.log('Command-line input received:');
//   console.log('  Username: ' + result.username);
//   console.log('  Email: ' + result.email);
// });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }