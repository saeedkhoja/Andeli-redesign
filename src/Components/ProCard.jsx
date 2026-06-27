import React from "react";

function ProCard({ prod, setIsOpenModal, setSelectedProductId }) {
  function handleClick() {
    setSelectedProductId(prod.id);
    setIsOpenModal(true);
  }

  return (
    <div
      onClick={handleClick}
      className="w-full md:w-[250px] md:max-h-[356px] rounded-[16px] border-1 border-[#EDEDED] hover:shadow-2xl hover:scale-105 hover:transition-all cursor-pointer"
    >
      <div className="bg-[#F0EEED] h-fit md:h-[280px] flex justify-center items-center rounded-t-[16px]">
        <img
          src={`${prod.image}`}
          alt=""
          className="md:w-[90%] md:h-[90%] w-full h-full max-md:p-2"
        />
      </div>
      <div className="py-[14px] px-[9px]">
        <h3
          className={` text-[14px] font-semibold ${
            prod.type === "Настенный" ? "text-[#008ECC]" : "text-[#F5A623]"
          } `}
        >
          {prod.type}
        </h3>

        <h1 className="md:text-[20px] text-[14px] font-normal ">{prod.name}</h1>
      </div>
    </div>
  );
}

export default ProCard;
