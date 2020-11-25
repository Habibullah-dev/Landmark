let articles = document.querySelector('.articles');
document.addEventListener('DOMContentLoaded' , async function() {
    let postData = await getPost();
    postData.forEach( post => {
        let postHtml = ` 
        <div class="col-6 col-md-4 item">
        <div class="card">
          <img src="${post.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4>${post.title}</h4>
          <p class="card-text">${post.description}</p>
          <a href="/sight?id=${post.id}"class="btn btn-outline-primary">Details</a>
        </div>
        </div>          
      </div>`;

        articles.insertAdjacentHTML('beforeend' , postHtml);
    });
   
});

