async function getCall() {
    return await fetch('http://localhost:3000/callbacks')
    .then((res) => res.json())
    .then((data) => data);
 
 }