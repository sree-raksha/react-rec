var fetch=require.fetch
fetch("https://www.food2fork.com/api/search?key=3545db77375e68b0656e00e57cfed408&q=chicken%20breast&page=2").then(data=>console.log(data));