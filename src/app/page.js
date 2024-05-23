"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/api/rad")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          let objt = result.pets.rows;
          setData(JSON.stringify(objt));
          // console.log(result.pets.rows);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello: {data}</h1>
    </div>
  );
}
