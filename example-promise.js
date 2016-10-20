// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
//
// }
//
// getTempCallback('55068', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City Not Found');
//     }, 1000);
//   });
// }
//
// getTempPromise('55068').then(function(temp){
//   console.log('Promise success', temp);
// }, function(err){
//   console.log('Promis err', err);
// })

function addPromise (a, b) {
    return new Promise(function(resolve, reject){
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Enter two valid numbers');
      }
    });
}

addPromise(2,67).then(function(resolve){
    console.log('success', resolve);
  },function(reject){
    console.log('error', reject);
});


addPromise('Justin', 9).then(function(sum){
  console.log('This shouldnt show up');
}, function(){
  console.log('This should appear');
});
