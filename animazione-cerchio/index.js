var lineDrawing = anime({
  targets: '.lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1300,
  direction: 'forward',
  loop: true
});
