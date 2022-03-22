const input = document.getElementById('username');
const loggedInUsername = document.getElementById('loggedInUsername');
const alertBox = document.getElementById('alertBox');

const usernameSubmit = (e) => {
  e.preventDefault();
  const username = input.value;
  loggedInUsername.innerText = username;
  localStorage.setItem('loggedInUsername', username);
};

(() => {
  const curUser = localStorage.getItem('loggedInUsername');
  if (curUser) {
    return (loggedInUsername.innerText = curUser);
  }
})();

window.addEventListener('storage', (event) => {
  alertBox.style.display = 'block';
  console.log('Storage changed', event);
});
