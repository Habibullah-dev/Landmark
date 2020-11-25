
let postBtn = document.querySelector('.post-button');
let logoutBtn = document.querySelector('.logout-btn');

document.addEventListener('DOMContentLoaded' , async function(){
    displayPost();
    displayEmail();
    displayCall();
});

postBtn.addEventListener('click' , function(){
  let homeTab = document.getElementById('v-pills-home');
  let postTab = document.getElementById('v-pills-posts');
  homeTab.classList.remove('show');
  homeTab.classList.remove('active');
  postTab.classList.add('show');
  postTab.classList.add('active');
});

logoutBtn.addEventListener('click' , function() {
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  window.location.href = '/';
})



async function displayPost() {
  let num = 1;
  let articles = document.querySelector('.articles');
    articles.innerHTML = '';
   let postData = await getPost();
   postData.forEach( post => {
     let postHtml =  
     ` <article class="outline-article">
       <div class="num w5">${num++}</div>
       <input type="text" class="id" value ="${post.id}"hidden>
       <div class="title w20">${post.title}</div>
       <div class="place w20">${post.place}</div>
       <div class="date w40">${post.date}</div>
       <div class="edit w10"><button class="btn btn-link edit-button">Edit</button></div>
       <div class="remove w5"><button class="btn btn-link remove-button">X</button></div>             
     </article>` ;

     articles.insertAdjacentHTML('beforeend' , postHtml);
   });
}

async function displayEmail() {
  let requestBlock = document.querySelector('#v-pills-mails');
  requestBlock.innerHTML = '';
  let i = 1;
   let requestData = await getEmail();
   requestData.forEach( request => {
    let requestHTML = `
    <article class="d-flex justify-content-between align-items-center outline-article  wrap-article">
        <div class="num w5">${i++}</div>
        <input class="id" type="hidden" value="${request.id}">
        <div class="name w20">${request.name}</div>
        <div class="email w30">${request.email}</div>
        <div class="date w40">${request.date}</div>
        <div class="remove w5"><button class="btn btn-link remove-button">X</button></div>
        <div class="text w100"> Message: ${request.message}</div>
    </article>`;

     requestBlock.insertAdjacentHTML('beforeend' , requestHTML);
   });
}

async function displayCall() {
  let callBlock = document.querySelector('#v-pills-callbacks');
   callBlock.innerHTML = '';
  let i = 1;
   let callData = await getCall();
   callData.forEach( call => {
    let callHTML = `
    <article class="d-flex justify-content-between align-items-center outline-article  wrap-article">
        <div class="num w5">${i++}</div>
        <input class="id" type="hidden" value="${call.id}">
        <div class="email w30">${call.phone}</div>
        <div class="date w60">${call.date}</div>
        <div class="remove w5"><button class="btn btn-link remove-button">X</button></div>
    </article>`;

     callBlock.insertAdjacentHTML('beforeend' , callHTML);
   });
}

