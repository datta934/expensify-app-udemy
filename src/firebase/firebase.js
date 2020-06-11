import *  as firebase from 'firebase';
import { PureComponent } from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyBuAoJP9V3p6ls61FOiFwyZbcqe0vwh5DU",
    authDomain: "expensify-5539e.firebaseapp.com",
    databaseURL: "https://expensify-5539e.firebaseio.com",
    projectId: "expensify-5539e",
    storageBucket: "expensify-5539e.appspot.com",
    messagingSenderId: "18875724132",
    appId: "1:18875724132:web:81bdbe414a3a79907a4a71",
    measurementId: "G-7HKMM5ELMK"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 1095,
    createdAt: 976123498763
});



// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// setTimeout(() => {
//     database.ref('age').set(27)
// }, 3000);

//Unsubscribe
// setTimeout(() => {
//     database.ref().off()
// }, 4000);

/** Fetch data */
// database.ref().once('value').then((snapshot) => {
//     const data = snapshot.val()
//     console.log(data);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// })

/** Set data */
// database.ref().set({
//     name: 'Mauaa Datta',
//     age: 27,
//     isSingle: false,
//     location: {
//         city: 'Pune',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e)
// });

//Set null value
// database.ref('isSingle').set(null);

// Remove a data
// database.ref('isSingle').remove().then(() => {
//     console.log("Removed");
// }).catch((e) => {
//     console.log("Failed");
// })


// database.ref().update({
//     name: 'Mauaa Datta Koribilli',
//     job: 'Developer',
//     // For nested objects inside root.
//     'location/city': 'Mumbai'
// })  