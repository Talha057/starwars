import axios from "axios";
import React, { useEffect, useState } from "react";

function Modal({ showModal, setOpenModal, data }) {
  const [homeworldData, setHomeworldData] = useState({});
  const toggleModal = () => {
    setOpenModal(!showModal);
  };
  if (data) {
    var date = data.created.split("T")[0].split("-");
    date = `${date[2]}-${date[1]}-${date[0]}`;
  }
  useEffect(
    () => {
      if (data) {
        axios
          .get(data.homeworld)
          .then((res) => setHomeworldData(res.data))
          .catch((err) => console.log(err));
      }
    },
    [data],
    []
  );

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-30"></div>
          <div className="relative p-4 w-10/12 max-w-2xl max-h-full z-50 overflow-y-auto overflow-x-hidden bg-white rounded-xl border">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-bold text-black">{data.name}</h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="py-4">
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Height</div>
                <div>{data.height} m</div>
              </div>
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Mass</div>
                <div>{data.mass} kg</div>
              </div>
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Date Created</div>
                <div>{date}</div>
              </div>

              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Birth Year</div>
                <div>{data.birth_year}</div>
              </div>
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Number of films</div>
                <div>
                  {data.films.length < 10
                    ? `0${data.films.length}`
                    : data.films.length}
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 border-b border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-bold text-gray-900">
                Homeworld Information
              </h3>
            </div>
            <div className="py-2">
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Name</div>
                <div>{homeworldData.name}</div>
              </div>
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Terrain</div>
                <div>{homeworldData.terrain}</div>
              </div>
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Climate</div>
                <div>{homeworldData.climate}</div>
              </div>
              <div className="flex justify-between mx-10 text-md font-medium text-gray-900">
                <div className="text-lightgreen">Number of Resident</div>
                <div>{homeworldData?.residents?.length}</div>
              </div>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={toggleModal}
                type="button"
                className="text-white bg-lightgreen hover:bg-lightgreen-800 focus:ring-4 focus:outline-none focus:ring-lightgreen-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Ok
              </button>
              <button
                onClick={toggleModal}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
