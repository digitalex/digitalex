document.addEventListener('DOMContentLoaded', function () {
  const emojiContainer = document.createElement('div');
  emojiContainer.classList.add('emoji-container');
  document.body.appendChild(emojiContainer);

  const emojis = ['🤖', '👾', '👽', '👻', '💀', '🤡', '👹', '👺', '🎃', '🔥', '💧', '💨', '💥', '💫', '🌟', '✨', '🌈', '💯', '🎉', '🎊'];

  function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emojiContainer.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 5000);
  }

  setInterval(createEmoji, 200);
});
