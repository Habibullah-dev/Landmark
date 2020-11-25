async function getPost() {
   return await fetch('http://localhost:3000/posts')
   .then((res) => res.json())
   .then((data) => data);

}