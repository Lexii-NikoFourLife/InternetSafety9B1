document.querySelector('#story').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('starting form...');
  let userData = getUserData();

  addStory(userData);
});
