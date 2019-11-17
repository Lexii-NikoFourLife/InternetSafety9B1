var firebaseConfig = {
  apiKey: 'AIzaSyCH-eCaFNMqhHp9piBevbqoren6eh0viF8',
  authDomain: 'internet-safety-725ea.firebaseapp.com',
  databaseURL: 'https://internet-safety-725ea.firebaseio.com',
  projectId: 'internet-safety-725ea',
  storageBucket: 'internet-safety-725ea.appspot.com',
  messagingSenderId: '831264028774',
  appId: '1:831264028774:web:9e81f5b1294d12f62895a7',
  measurementId: 'G-GQMV5MFYNX'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var ref = firebase.database().ref();
ref.on('value', function(snapshot) {
  output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});
function addStory(userData) {
  console.log(userData);
  let database = firebase.database();

  let ref = database.ref(userData.name + '/');

  ref.push(userData);
}
function getUserData() {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let story = document.querySelector('#histoire').value;

  let date = new Date();
  let months = [
    'Jan',
    'Feb',
    'Mars',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  goodDate =
    date.getDay() +
    ' ' +
    months[date.getMonth()] +
    ' ' +
    date.getFullYear() +
    ' at ' +
    date.getHours();

  let userData = { name, email, story, data: goodDate };

  return userData;
}
