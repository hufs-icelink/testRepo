ScrollOut({
  onShown: (element) => {
    new TypeIt(element.querySelector('.title'), {
      startDelay: 500,
      cursor: false,
    })
      .pause(2000)
      .go();
  },
});