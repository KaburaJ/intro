console.log("");

items_url = "https://jsonplaceholder.typicode.com/posts";

async function dataGet(items_url){
    try{
        let items_init = await fetch(items_url);
        let items = await items_init.json();
        console.log("LISTING...")
        console.log(items);
    }
    catch(error){
        console.log(error.name);
        console.log("Error caught")
    }
}

dataGet(items_url);