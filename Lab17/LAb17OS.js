const os = require('node:os');

// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });

console.log('Platform:', os.platform());
console.log('Total memory (bytes):', os.totalmem());
console.log('free memory (bytes):', os.freemem());