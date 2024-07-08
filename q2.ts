// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((result) => {
    return `${result.data.owner} ${result.data.title} ${result.data.completed}`;
  }).catch((err) =>{return "INVALID TODO ID"});
return result;
  /* Your code here */
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
