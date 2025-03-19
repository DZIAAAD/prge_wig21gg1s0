import React, { useState } from "react";
import TodoList from "./TodoList/Todolist";
import TodoNewTodo from "./TodoList/TodoNewTodo";

function NewApp() {
  const [listaZadan, setListaZadan] = useState([
    "wstac rano",
    "isc na zaprawe",
    "zjesc sniadanie",
  ]);
  const [newItem, setNewItem] = useState("");
  const [listFiltered, setlistFiltered] = useState(listaZadan);

  const listHandler = (e) => {
    setNewItem(e.target.value);
    setNewItem("");
  };

  const itemHandler = (e) => {
    setNewItem(e.target.value);
  };

  const listFilter = (e) => {
    console.log(e.target.value);
    setlistFiltered(listaZadan.filter((item) => item.includes(e.target.value)));
  };

  const listItemRemover = (id) => {
    console.log(id);
    setListaZadan(listaZadan.filter((item) => (item, index) => index !== id));
  };

  return (
    <div>
      {/* 1. Opracowanie listy zadań do zrobienia przez użytkownika */}
      <TodoList listaZadan={listFiltered} listItemRemover={listItemRemover} />

      {/* 2. dodawanie nowego zadania do listy zadań użytkownika */}
      <TodoNewTodo listHandler={listHandler} itemHandler={itemHandler} />

      {/* 3. filtrowanie zadań użytkownia */}
      <div>
        <h5>Wyszukaj</h5>
        <input onChange={(e) => listFilter(e)}></input>
      </div>

      {/* 4. usuwanie zadania użytkownika  */}
    </div>
  );
}

export default NewApp;
