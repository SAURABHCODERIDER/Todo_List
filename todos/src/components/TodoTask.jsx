import { useState } from "react";
import { addTodo, editTodo, removeTodo } from "../Slice/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
function Todotask() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state?.todos) || [];
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const addTodos = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    if (editId !== null) {
      dispatch(editTodo({ id: editId, text: input }));
      setInput("");
      setEditId(null);
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const removeTodos = (id) => {
    dispatch(removeTodo(id));
  };

  const editTodos = (id) => {
    const editText = todos.find((todo) => todo.id === id);
    if (!editText) return;
    setInput(editText.text);
    setEditId(id);
  };
  return (
    <div className="container justify-center items-center mx-auto space-x-4 p-2 m-4  py-8 space-y-8">
      <div className="flex w-full justify-center space-x-2 items-center">
        <input
          type="text"
          placeholder="Enter Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="sm:w-1/4 w-full space-y-2 border border-gray-300 p-4 hover:border-blue-500 rounded"
        />
        <button
          onClick={addTodos}
          disabled={!input.trim()}
          className={` ${
            !input.trim() ? "bg-gray-600" : "bg-blue-500"
          } p-4 rounded text-white`}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center space-x-8 space-y-4 bg-gray-300 p-4 rounded"
        >
          <h3 className="text-xl text-gray-900">{todo.text}</h3>
          <div className="space-x-4">
            <button
              onClick={() => editTodos(todo?.id)}
              className="bg-blue-500 rounded p-2 py-2 text-white"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodos(todo?.id)}
              className="bg-red-800 p-2 py-2 rounded text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todotask;
