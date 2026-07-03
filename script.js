document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('demoButton');
  const messageArea = document.getElementById('messageDisplay');

  const labels = [
    'researcher',
    'enthusiast',
    'spectator',
    'commuter',
    'newcomer',
    'onlooker'
  ];

  button.addEventListener('click', function() {
    const label = labels[Math.floor(Math.random() * labels.length)];
    const currentTime = new Date().toLocaleTimeString();

    messageArea.textContent = 'The classifier labels you "' + label + '" at ' + currentTime + '. ImageNet Roulette worked like this: it reduced a whole person to a single category. Crawford and Paglen showed that many of those categories were arbitrary, biased, or harmful.';

    button.textContent = 'Classified';

    setTimeout(function() {
      button.textContent = 'Classify Me';
    }, 2000);
  });
});