const express = require("express");
const app = express();
const fs=require('fs');
const listaprocutos=fs.readFileSync('./productos.txt',"utf-8")
const array_productos=JSON.parse(listaprocutos)
const total_items=array_productos.length-1
app.get("/productos", (req, res) => {
    try{
        
        res.send(array_productos);
    } catch(err){
        res.send(`${err}`);
    }

    
  });

  app.get("/productoRandom", (req, res) => {
    const min = 0;
    const max = total_items;
    let x = (Math.floor(Math.random()*(max-min+1)+min).toFixed());
    console.log(array_productos[x])  
     res.send(`${JSON.stringify(array_productos[x])}`);
  });  


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto 8080`);
});
