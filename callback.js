// CALLBACK ======================================

// function heavyTaskFunc(callback) {
//   setTimeout(() => {
//     console.log('After 3 seconds')
//     callback()
//   }, 3000)
//   console.log('a')
// }

// function informMe() {
//   console.log('informed')
// }

// heavyTaskFunc(informMe)

// -----------------------------------------------

// function orderFood(foodItem, callback) {
//   console.log(`Order placed for ${foodItem}`);
  
//   setTimeout(() => {
//     console.log(`${foodItem} is ready`);
//     callback(foodItem)
//   }, 3000)

//   console.log('other task A');
  
// }

// function pickUpFood(item) {
//   console.log(`Picked up the ${item}`);
// }

// orderFood('burger', pickUpFood)
// console.log('other task B');

// -----------------------------------------

// PROMISE ==================================

// function orderFood(foodItem) {
//   return new Promise((resolve, reject) => {
//     console.log(`Order placed for ${foodItem}`);
    
//     setTimeout(() => {
//       const isReady = false

//       if(isReady) {
//         resolve(foodItem)
//       } else {
//         reject("Kitchen is closed")
//       }
//     }, 3000)
    
//   })
// }

// orderFood('Sandwich')
//   .then(item => console.log(`Picked up ${item}`))
//   .catch(error => console.log(error))

// ASYNC AWAIT ========================================

// function getNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(10)
//     }, 3000)
//   })
// }

// async function showNumber() {
//   try {
//     const num = await getNumber()
//     console.log(num);
//   } catch(error) {
//     console.log(error);
    
//   }
// }

// showNumber()

//---------------------------------

// async function getUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicodel.com/users/1');
//     const data = await response.json();
//     console.log(data);
//   } catch(error) {
//     console.log(error);
    
//   }
  
// }

// getUser();
