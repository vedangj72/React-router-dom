// using of API from fakestore API product.....
import React, { useEffect, useState } from "react";

export default function APIFun() {
  const [savemain, setmain] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setmain(data);
      });
  }, []);

  return (
    <div className="container">
      <ol>
        {savemain.map((product) => (
          <li key={product.id}>{product.price}</li>
        ))}
      </ol>
    </div>
  );
}
