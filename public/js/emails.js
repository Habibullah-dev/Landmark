
 let mailform  = document.querySelector('.mail-form');

 mailform.addEventListener('submit', function(e) {
     e.preventDefault();
     fetch('http://localhost:3000/emails', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             name: document.querySelector('#name-mail').value,
             email:document.querySelector('#email-mail').value,
             text:document.querySelector('#message-mail').value
         })
     }).then((resp) => resp.text()).then((data) => console.log(data));
 })