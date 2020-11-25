let postForm = document.querySelector('.post-form');
let createTitle = document.getElementById('title');
let createplace = document.getElementById('place');
let createImageUrl = document.getElementById('imageUrl');
let createImageFile = document.getElementById('imageFile');
let createText = document.getElementById('text');


postForm.addEventListener('submit' , function(e){
    e.preventDefault();
    let text = createText.value;
    let data = new FormData();
    data.append('title' , createTitle.value);
    data.append('place',createplace.value);
    data.append('imageUrl',createImageUrl.value);
    data.append('imageFile',createImageFile.files[0]);
    data.append('text' , text);
    data.append('description' , text.substring(0 , text.indexOf('.') + 1) );

    fetch('http://localhost:3000/posts' , {
        method : 'POST' ,
        body : data
    }).then((res) => res.text()).then((data) => window.history.go())

});

function disbleImageField(input1,input2) {
    if(input1) {
      input2.disabled = true
    }else{
      input2.disabled = false
    }
  } 
  
  createImageUrl.addEventListener('change' , function() {disbleImageField(this , createImageFile)});
  createImageFile.addEventListener('change' , function() {disbleImageField(this , createImageUrl)});



