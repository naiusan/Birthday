function checkPassword() {
  const input = document.getElementById('passwordInput');
  const message = document.getElementById('message');
  const firstPage = document.getElementById('firstPage');
  const secondPage = document.getElementById('secondPage');
  const correctPassword = 'tine';

  if (input.value.trim() === correctPassword) {
    firstPage.style.opacity = '0';
    firstPage.style.transform = 'scale(0.9)';
    setTimeout(() => {
      firstPage.style.display = 'none';
      secondPage.classList.add('active');
      secondPage.style.display = 'block';
    }, 600);
  } else {
    message.textContent = '❌ Wrong password. Hint: tawag ko sayo';
    message.style.color = '#e57373';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  }
}

function cardClicked(cardName) {
  const secondPage = document.getElementById('secondPage');
  const thirdPage = document.getElementById('thirdPage');
  const messageElement = document.getElementById('typedMessage');

  if (cardName === 'Message') {
    // Reset message content each time
    messageElement.textContent = '';

    // Smooth transition to message page
    secondPage.style.opacity = '0';
    secondPage.style.transform = 'scale(0.9)';

    setTimeout(() => {
      secondPage.style.display = 'none';
      thirdPage.style.display = 'block';

      // Force a reflow to fix mobile rendering glitch
      void thirdPage.offsetWidth;

      thirdPage.classList.add('active');
      thirdPage.style.opacity = '1';
      thirdPage.style.transform = 'scale(1)';

      typeMessage();
    }, 600);
  }
  
  else if (cardName === 'Picture') {
  secondPage.style.opacity = '0';
  secondPage.style.transform = 'scale(0.9)';
  setTimeout(() => {
    secondPage.style.display = 'none';
    document.getElementById('fourthPage').classList.add('active');
  }, 600);
}


  else {
    alert("You clicked " + cardName + " 🎁");
  }
}

function typeMessage() {
  const messageElement = document.getElementById('typedMessage');
  messageElement.textContent = ''; // reset before typing

  const text = `Hi naaaak! Happy birthday sa maganda kong anak, sensya na eto lang keri kong gift sayo ngayon, i know marami nakong mga pag kukulang sayo, di na din tayo gaanong nakakapag usap lately well parehas na din naman na tayong na busy sa sari-sarili nating buhay, i just want you to know na andito lang ako palagi kung may problema ka man pwede mo ko lapitan and always remember na I'm so so so so proud of you, i know super duper pagod ka na sa life, just don't forget na we are always here for you keri yan nak gold tayo diba, I believe in you, anyway enough na sa drama Happy happy birthday sayo nak, more blessings to come kita kits soon.`;

  let index = 0;
  const typingSpeed = 35;

  function type() {
    if (index < text.length) {
      messageElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    }
  }

  type();
}

function goBack() {
  const secondPage = document.getElementById('secondPage');
  const thirdPage = document.getElementById('thirdPage');
  const messageElement = document.getElementById('typedMessage');

  thirdPage.style.opacity = '0';
  thirdPage.style.transform = 'scale(0.95)';

  setTimeout(() => {
    thirdPage.classList.remove('active');
    thirdPage.style.display = 'none';

    // Clear text for next animation
    messageElement.textContent = '';

    // Go back to second page
    secondPage.style.display = 'block';
    void secondPage.offsetWidth; // 🔧 fix mobile issue
    secondPage.classList.add('active');
    secondPage.style.opacity = '1';
    secondPage.style.transform = 'scale(1)';
  }, 600);
}

    