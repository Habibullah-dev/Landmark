{
let updateForm = document.querySelector('.edit-form')
let articleBlock = document.querySelector('.articles');
let titleUpdate = document.querySelector('#title-edit');
let placeUpdate = document.querySelector('#place-edit');
let textUpdate = document.querySelector('#text-edit');
let id;

articleBlock.addEventListener('click' , async function(e) {
    if(e.target.classList.contains('edit-button')){
        id = e.target.parentNode.parentNode.querySelector('.id').value;
        let postInfo = await fetch('http://localhost:3000/posts/' + id)
          .then((resp) => resp.json())
          .then((data) => data);
     
        titleUpdate.value = postInfo.title;
        textUpdate.value = postInfo.text;
        placeUpdate.value = postInfo.place;
        displayUpdateForm();
 }
})

updateForm.addEventListener('submit' , function(){
    fetch('http://localhost:3000/posts/' + id , {
            method : 'PUT' ,
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify({
                title : titleUpdate.value,
                place : placeUpdate.value,
                text : textUpdate.value ,
                description : textUpdate.value.substring( 0 , textUpdate.value.indexOf('.'))
            })

        }).then((res) => res.text()).then((data) = window.history.go())


})

function displayUpdateForm() {
    let homeTab = document.getElementById('v-pills-home');
        let postTab = document.getElementById('v-pills-edit');
        homeTab.classList.remove('show');
        homeTab.classList.remove('active');
         postTab.classList.add('show');
         postTab.classList.add('active');
}

}






    