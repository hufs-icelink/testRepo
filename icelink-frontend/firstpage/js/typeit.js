document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('#subtitle')
        .pause(1000)
        .delete(10, {delay:300})
        .type('JUNIOR DEVLOPER')
        .go()
  });