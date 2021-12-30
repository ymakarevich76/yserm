const buttons = document.querySelectorAll('button');

if(buttons) {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseup', function() {
      this.blur();
    })
  }
}