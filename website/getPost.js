// Async POST
const postData = async ( url = '', data = {})=>{
  console.log(data);
  const response = await fetch(url, {
  method: 'POST', 
  credentials: 'same-origin', 
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header        
});

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error) {
  console.log("error", error);
  }
}

// TODO-Async GET
const retrieveData = async (url='') =>{ 
const request = await fetch(url);
try {
// Transform into JSON
const allData = await request.json()
}
catch(error) {
  console.log("error", error);
  // appropriately handle the error
}
}

postData('/animal', {animal:'Racoon', score: 5})