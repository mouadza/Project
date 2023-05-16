const carSearchForm = document.getElementById('search');
const carSearchInput = document.getElementById('search');

carSearchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchQuery = carSearchInput.value.toLowerCase();
  redirectToCarPage(searchQuery);
});

function redirectToCarPage(car) {
  if (car === 'x6') {
    window.location.href = "/x6.html"; 
  } else if (car === 'class a') {
    window.location.href = '/class a.html'; 
  } else if (car === 'golf 8') {
    window.location.href = '/golf 8.html'; 
  } else {
    window.location.href = '/search-results?query=' + car;
  }
}
