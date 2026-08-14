const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isOpen = button.classList.contains('active');

    faqButtons.forEach(otherButton => {
      otherButton.classList.remove('active');
      otherButton.setAttribute('aria-expanded', 'false');
      otherButton.parentElement.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!isOpen) {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

const cookieBanner = document.getElementById('cookie-banner');
const cookieAccept = document.getElementById('cookie-accept');

if (!localStorage.getItem('cookiesAceitos')) {
  cookieBanner.hidden = false;
}

cookieAccept.addEventListener('click', () => {
  localStorage.setItem('cookiesAceitos', 'true');
  cookieBanner.hidden = true;
});