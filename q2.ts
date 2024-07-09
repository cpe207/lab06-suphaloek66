// const axios = require("axios");
import axios from "axios";
import { todo } from "node:test";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => { try{
  const todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  try{
    const number_user = todo.data.userId;
    const owner = await axios.get(`https://jsonplaceholder.typicode.com/users/${number_user}`)
    const return_result = {
      "owner ":  owner.data.name,
      "Title ":  todo.data.title,
      "Complete ":  todo.data.completed
    }; return return_result;
  }catch(err) {return "INVALID TODO ID"}
}catch(err) {return "INVALID TODO ID"}
};
  /* Your code here */

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
