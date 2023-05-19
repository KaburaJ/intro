
items_url = "https://jsonplaceholder.typicode.com/posts?userId=1";

async function fetchData() {
    try {
      const response = await fetch(items_url);
      const json = await response.json();
      console.log("FILTERING...")
      console.log(json);
    }  catch(error){
        console.log(error.name);
        console.log("FILTERING...Error caught")
    }
  }
  
  fetchData();
  

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));