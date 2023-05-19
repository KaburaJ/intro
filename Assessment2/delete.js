
items_url = "https://jsonplaceholder.typicode.com/posts/1";

async function dataDeleted(items_url){
    try{
        let items_init = await fetch(items_url, {
            method: 'DELETE',
        });
        let items = await items_init.json();
        console.log("");
        console.log("");
        console.log("DELETEING...")
        console.log(`${items} deleted`);
    }
    catch(error){
        console.log(error.name);
        console.log("DELETEING...Error caught ")
    }
}

dataDeleted(items_url);