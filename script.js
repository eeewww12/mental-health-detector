function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {
      showPage('quiz-page');
  } else {
      alert('Invalid username or password');
  }
}

function submitQuiz() {
  const q1 = parseInt(document.getElementById('q1').value);
  const q2 = parseInt(document.getElementById('q2').value);
  const q3 = parseInt(document.getElementById('q3').value);

  const score = q1 + q2 + q3;
  let resultText = '';

  if (score <= 2) {
      resultText = 'You seem to be in a good mental state. Keep up with healthy habits!';
  } else if (score <= 4) {
      resultText = 'You might be experiencing some stress. Consider relaxation techniques like meditation or listening to music.';
  } else {
      resultText = 'You seem to be experiencing significant stress or anxiety. It is recommended to consult a mental health professional.';
  }

  document.getElementById('result-text').innerText = resultText;
  showPage('result-page');
}

function restart() {
  document.getElementById('quiz-form').reset();
  showPage('login-page');
}

document.addEventListener('DOMContentLoaded', () => {
  showPage('login-page');
});
