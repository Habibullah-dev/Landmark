let articleBlock = document.querySelector('.articles');

articleBlock.addEventListener('click' , function(e) {
    if(e.target.classList.contains('remove-button')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/posts/' + id , {
            method : 'DELETE'
        }).then((res) => res.text()).then((data) = window.history.go())
    }
})


let requestBlock = document.querySelector('#v-pills-mails'); 

requestBlock.addEventListener('click' , function(e) {
    if(e.target.classList.contains('remove-button')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/emails/' + id , {
            method : 'DELETE'
        }).then((res) => res.text()).then((data) = window.history.go())
    }
})

let callBlock = document.querySelector('#v-pills-callbacks');
callBlock.addEventListener('click' , function(e) {
    if(e.target.classList.contains('remove-button')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/callbacks/' + id , {
            method : 'DELETE'
        }).then((res) => res.text()).then((data) = window.history.go())
    }
})
