document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
}));

const greenTheme = document.createElement('style');
greenTheme.textContent = `
  :root{--ink:#121410;--paper:#f5f6f0;--blue:#8caf00;--aqua:#d4fb48;--line:#d7d9d2;--muted:#646a60}
  .brand span,.eyebrow,.company{color:#7d9f00}.top__email{background:#121410}.button{background:#121410}.button:hover{background:#30362c}.hero em{color:#121410;text-decoration:underline;text-decoration-color:#d4fb48;text-decoration-thickness:11px;text-underline-offset:-3px}.facts{background:#1a1d18}.practice{background:#d4fb48}.practice article{background:#edf9bb}.contact h2 a{color:#4f6500}.signal{border-color:#121410}.roles li:before{color:#789a00}
`;
document.head.append(greenTheme);
