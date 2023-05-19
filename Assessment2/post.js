
items_url = "https://jsonplaceholder.typicode.com/posts";

async function dataGet(items_url){
    try{
        let items_init = await fetch(items_url, {
            method: 'POST',
            body: JSON.stringify(dataToBeAdded),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        });
        let items = await items_init.json();
        console.log("");
        console.log("");
        console.log("POSTING...")
        console.log(items);
    }
    catch(error){
        console.log(error.name);
        console.log("Error caught")
    }
    
}

const dataToBeAdded = {
    title: 'Cairo',
    body: 'city',
    userId: 6,
}

dataGet(items_url);