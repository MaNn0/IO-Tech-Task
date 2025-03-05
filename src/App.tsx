import React, { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Filter from "./components/Filter";

// import Pagination from "./components/Pagination";

interface Company {
  catchPhrase: string;
}
interface Item {
  id: number;
  name: string;
  company: Company
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  // console.log(sortOrder);
  useEffect(() => {
    const alreadySavedData = localStorage.getItem("items");
    if (alreadySavedData) {
      try {
        const parsedData = JSON.parse(alreadySavedData);
        if (Array.isArray(parsedData)) {
          setItems(parsedData);
          return;
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }

    const getData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: Item[] = await response.json();

        setItems(data);
        localStorage.setItem("items", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  function handleDeleteItem(id: number) {
    const newItems = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  }

  const handleUpdateItem = (updatedItem: Item) => {
    const newItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  };

  const handleAddItem = (newItem: Item) => {
    const newItems = [...items, newItem];
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  };

  const handleSort = (order: "asc" | "desc") => {
    setSortOrder(order);
    const sortedItems = [...items].sort((a, b) =>
      order === "asc" ? a.id - b.id : b.id - a.id
    );
    setItems(sortedItems);
  };

  return (
    <div className="container mx-auto text-center p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          CRUD ReactJS Application with Mock API
        </h1>
        <Filter onSort={handleSort} />
        <Add items={items} onAdd={handleAddItem} />
      </div>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-xl">
        <thead className="bg-gradient-to-r from-green-500 to-green-600">
          <tr>
            <th className="p-4 border-b border-gray-200 text-white font-semibold">#</th>
            <th className="p-4 border-b border-gray-200 text-white font-semibold">Title</th>
            <th className="p-4 border-b border-gray-200 text-white font-semibold">Description</th>
            <th className="p-4 border-b border-gray-200 text-white font-semibold">Modify</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
              <td className="p-4 border-b border-gray-200 text-gray-700">{item.id}</td>
              <td className="p-4 border-b border-gray-200 text-gray-700">{item.name}</td>
              <td className="p-4 border-b border-gray-200 text-gray-700">{item.company.catchPhrase}</td>
              <td className="p-4 border-b border-gray-200">
                <div className="flex justify-evenly items-center">
                  <Delete id={item.id} onDelete={handleDeleteItem} />
                  <Update item={item} onUpdate={handleUpdateItem} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;
