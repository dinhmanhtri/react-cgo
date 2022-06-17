import axios from "axios";

const getTodo = async (id) => {
  try {
    return await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  } catch (err) {
    throw new Error(err);
  }
};

const createTodo = async (title, body, userId) => {
  try {
    return await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        title,
        body,
        userId,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  } catch (err) {
    throw new Error(err);
  }
};

const response = await getTodo(20);
console.log(response);
