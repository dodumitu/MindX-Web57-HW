// EX1
const fs = require('fs');

// let data = '1 8 5 7 2'

fs.writeFile('numbers.txt', '1 8 5 7 2', (err) => {
   if (err) 
      console.log(err);
   else 
      console.log("success");
})

// EX2

// EX3

// EX4
async function wait(seconds) {
    return new Promise((resolve)=>{
        return setTimeout(resolve, seconds)
}
    )}
async function go() {
  console.log('Starting');
  await wait(2000);
  console.log('running');
  await wait(200);
  console.log('ending');
}
go()