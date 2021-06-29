import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Shampoo",
      amount: 94.67,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e2",
      title: "Mobile Phone",
      amount: 123.67,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 12),
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
