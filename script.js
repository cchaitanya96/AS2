const userMessages = [];

const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');


function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector('textarea');//username
  console.log(userMessageInput);
  const messageImageInput = event.target.querySelector('input');//password
  console.log(messageImageInput);
  const userMessage = userMessageInput.value;
  console.log(userMessage);
  const imageUrl = messageImageInput.value;
  console.log(imageUrl);

  if (  
    !userMessage ||
    !imageUrl ||
    userMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert('Please insert a valid Username or Password.');
    return;
  } else if(userMessage=="admi" || imageUrl=="pass") {
    alert('Login');
  } else{
    alert('Try again');
  }

  userMessages.push({
    text: userMessage,//username
    image: imageUrl,
  });

  userMessageInput.value = '';
  messageImageInput.value = '';

  renderMessages();
}

function renderMessages() {
  let messageItems = '';
  for (const message of userMessages) {
    messageItems = `${messageItems} <img src="${message.image}" alt="${message.text}">`;
  }

  userMessagesList.innerHTML = messageItems;
 
  
}


userMessageForm.addEventListener('submit', formSubmitHandler);



//cheese-image.come/no-image.jpg" onerror ="alert('Web Page in Hacked !')" 