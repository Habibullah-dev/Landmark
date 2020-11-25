let callForm = document.querySelector('.call-form');

callForm.addEventListener('submit' , function(e) {
    fetch('http://localhost:3000/callbacks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: callForm.querySelector('input').value,
        })
    }).then((res) => res.text()).then((data) =>  alert('Response sent successfully'));

    
})