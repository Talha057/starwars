import React, { useEffect, useState } from "react";
import PaginatedItems from "./components/Pagination";
import axios from "axios";
import { Audio } from "react-loader-spinner";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setItems(res.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="mx-5 text-lightgreen lg:text-[43px] text-[40px]  font-semibold text-center m-16">
        Star Wars Character
      </div>
      <div className="mx-5">
        {loading ? (
          <div className="justify-center items-center flex h-full">
            <Audio
              height="60"
              width="60"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          <PaginatedItems items={items} itemsPerPage={4} />
        )}
      </div>
    </>
  );
};

export default App;
