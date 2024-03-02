import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Modal from "./Modal";
import NextArrow from "../assets/forwardArrow.svg";
import BackArrow from "../assets/backArrow.svg";

function Items({ currentItems, setOpenModal, setModalData }) {
  const handleProductClick = (item) => {
    setModalData(item);
    setOpenModal(true);
  };
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  justify-between px-5">
        {currentItems &&
          currentItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(item)}
              className={`relative cursor-pointer flex flex-col mb-10 items-center m-4 hover:m-1  bg-white rounded-2xl shadow-xl`}
            >
              <img
                className={` w-full rounded-2xl`}
                src={`https://picsum.photos/id/${index}/350/250`}
              />
              <div className=" w-10/12 flex-col flex gap-1 pt-4 pb-8">
                <div className="font-semibold text-black text-center line-clamp-1 text-lg flex justify-center">
                  {item.name}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="font-semibold  text-lightgreen">Height</div>
                  <div className="font-medium">{item.height}</div>
                </div>
                <div className="flex items-center text-sm font-semibold  justify-between">
                  <div className="font-semibold  text-lightgreen">Gender</div>
                  <div className="capitalize">{item.gender}</div>
                </div>
                <div className="flex items-center text-sm font-semibold  justify-between">
                  <div className="font-semibold  text-lightgreen">
                    Hair Color
                  </div>
                  <div className="capitalize">{item.hair_color}</div>
                </div>
                <div className="flex items-center text-sm font-semibold  justify-between">
                  <div className="font-semibold  text-lightgreen">
                    Skin Color
                  </div>
                  <div className="capitalize">{item.skin_color}</div>
                </div>
                <div className="flex items-center text-sm font-semibold  justify-between">
                  <div className="font-semibold  text-lightgreen">
                    Eye Color
                  </div>
                  <div className="capitalize">{item.skin_color}</div>
                </div>
                <div className="flex items-center text-sm font-semibold  justify-between">
                  <div className="font-semibold  text-lightgreen">
                    Birth Year
                  </div>
                  <div className="capitalize">{item.birth_year}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage, items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {items ? (
        <>
          <Modal
            showModal={openModal}
            setOpenModal={setOpenModal}
            data={modalData}
          />
          <Items
            currentItems={currentItems}
            showModal={openModal}
            setOpenModal={setOpenModal}
            setModalData={setModalData}
          />
          <ReactPaginate
            breakLabel="..."
            nextLabel={<img src={NextArrow} alt="" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<img src={BackArrow} alt="" />}
            containerClassName="flex col-span-12 items-center gap-5 mt-10 mb-20 justify-center border-black text-black font-semibold text-[15px]"
            activeClassName="bg-[#01A664] w-[30px] h-[30px] items-center flex justify-center rounded-full"
            renderOnZeroPageCount={null}
          />
        </>
      ) : (
        <div>Data Not Found</div>
      )}
    </>
  );
}
export default PaginatedItems;
