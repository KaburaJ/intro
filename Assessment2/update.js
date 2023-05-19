
items_url = "https://jsonplaceholder.typicode.com/posts/12";

async function dataGet(items_url){
    try{
        let items_init = await fetch(items_url, {
            method: 'PUT',
            body: JSON.stringify(dataToBeUpdated),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        });
        let items = await items_init.json();
        console.log("");
        console.log("");
        console.log("UPDATING...")
        console.log(items);
    }
    catch(error){
        console.log(error.name);
        console.log("UPDATING...Error caught")
    }
}

const dataToBeUpdated = {
    id: 12,
    title: 'Moscow',
    body: 'city',
    userId: 12,
}

dataGet(items_url);