async function getEmail() {
    return await fetch('http://localhost:3000/emails')
    .then((res) => res.json())
    .then((data) => data);
 
 }