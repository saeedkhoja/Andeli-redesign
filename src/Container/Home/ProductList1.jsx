import React, { useState } from "react";
import Container from "../../Components/Container";
import ProCard from "../../Components/ProCard";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import DetailModal from "./DetailModal";
import AIChatModal from "./AIModal";
import { SlArrowDown } from "react-icons/sl";
import { products } from "../../../Data/Data";

const mountTypes = ["Напольный", "Настенный"];
const powerOptions = [
  "500 W",
  "1000 W",
  "1500 W",
  "2000 W",
  "2500 W",
  "3000 W",
  "5000 W",
  "7500 W",
  "10000 W",
  "15000 W",
  "20000 W",
  "30000 W",
];

// {
//   id: 10,
//   image: "/img/Stablizators/img3.svg",
//   name: "ANDELI SVC-D1000VA",

//   type: "Настенный",
// },

function ProductList1() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPowers, setSelectedPowers] = useState({
    Напольный: [],
    Настенный: [],
  });
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const filtered = products.filter((product) => {
    const hasTypeFilter = selectedTypes.length > 0;
    const hasPowerFilter = Object.values(selectedPowers).some(
      (arr) => arr.length > 0
    );
    if (!hasTypeFilter && !hasPowerFilter) return true;
    if (hasTypeFilter) {
      return selectedTypes.includes(product.type);
    }
    return selectedPowers[product.type]?.includes(product.power);
  });

  const toggleType = (type) => {
    let updatedTypes = [...selectedTypes];
    if (updatedTypes.includes(type)) {
      updatedTypes = updatedTypes.filter((t) => t !== type);
    } else {
      updatedTypes.push(type);
    }
    setSelectedTypes(updatedTypes);
    if (updatedTypes.length > 0) {
      setSelectedPowers([]);
    }
  };

  const togglePower = (type, power) => {
    const current = new Set(selectedPowers[type] || []);
    if (current.has(power)) {
      current.delete(power);
    } else {
      current.add(power);
    }

    setSelectedPowers({
      Напольный: type === "Напольный" ? Array.from(current) : [],
      Настенный: type === "Настенный" ? Array.from(current) : [],
    });
    setSelectedTypes([]);
  };

  const clearAll = () => {
    setSelectedTypes([]);
    setSelectedPowers([]);
  };
  const handleChatToggle = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <Container>
      <div className="relative md:my-[40px] my-[20px] max-md:px-[10px]">
        <div className=" flex md:flex-row flex-col-reverse items-center gap-[20px]">
          <button
            onClick={handleToggle}
            className={`flex items-center justify-between w-full md:w-[280px] bg-[#FAFAFA] py-[20px] px-[24px] ${
              isFilterOpen === true ? "rounded-t-[14px]" : "rounded-[14px]"
            } `}
          >
            <div className="flex items-center gap-[8px]">
              <img src="/img/Vector.svg" alt="" className="h-[24px] w-[24px]" />
              <h1 className="text-[20px] font-normal">Фильтры</h1>
            </div>
            <FaAngleDown className="" />
          </button>
          {selectedTypes.length > 0 ||
            (Object.values(selectedPowers).some((arr) => arr.length > 0) &&
              isFilterOpen === false && (
                <button
                  onClick={clearAll}
                  className="max-md:hidden flex items-center justify-center gap-[12px] py-[11px] px-[36px] mt-[12px] rounded-[8px] bg-[#FFE0E0]"
                >
                  <h1 className="text-[14px] font-normal">Очистить фильтр</h1>
                  <RxCross2 />
                </button>
              ))}

          <h1 className="text-black text text-[25px] font-normal md:text-[32px] md:font-normal max-md:text-center">
            Стабилизаторы напряжений
          </h1>
        </div>
        <div className="relative flex flex-row">
          {isFilterOpen && (
            <div>
              <div className="max-md:hidden mr-[15px]">
                {mountTypes.map((type) => {
                  const isChecked = selectedTypes.includes(type);

                  return (
                    <div
                      key={type}
                      className="w-[280px] bg-[#FAFAFA] px-[24px] py-[20px]"
                    >
                      <label className="flex items-center space-x-2 mb-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleType(type)}
                          className="h-[27px] w-[27px] border-none outline-none"
                        />
                        <span className="font-normal text-[20px]">{type}</span>
                      </label>

                      <div className="flex flex-col gap-2 pl-[32px]">
                        {powerOptions.map((power) => {
                          const isActive =
                            isChecked || selectedPowers[type]?.includes(power);
                          return (
                            <div>
                              {type === "Напольный" ? (
                                <button
                                  key={power}
                                  onClick={() => togglePower(type, power)}
                                  className={`px-[20px] py-[5.5px] text-[14px] font-normal rounded-md transition ${
                                    isActive
                                      ? "bg-[#F5A623] text-white border-[#F5A623]"
                                      : "bg-white text-[#000000]/60  hover:bg-gray-100"
                                  }`}
                                >
                                  {power}
                                </button>
                              ) : (
                                <button
                                  key={power}
                                  onClick={() => togglePower(type, power)}
                                  className={`px-[20px] py-[5.5px] text-[14px] font-normal rounded-md transition ${
                                    isActive
                                      ? "bg-[#0067B3] text-white border-[#0067B3]"
                                      : "bg-white text-[#000000]/60  hover:bg-gray-100"
                                  }`}
                                >
                                  {power}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <button
                  onClick={clearAll}
                  className="flex items-center justify-center gap-[12px] py-[11px] w-full mt-[12px] rounded-[8px] bg-[#FFE0E0]"
                >
                  <h1 className="text-[14px] font-normal">Очистить фильтр</h1>
                  <RxCross2 />
                </button>
              </div>
              {/* Mobile Filter Sidebar */}
              {isFilterOpen && (
                <div
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                  onClick={() => setIsFilterOpen(false)}
                />
              )}

              <div
                className={`fixed top-0 left-0 h-full w-[85%] max-w-[300px] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                  isFilterOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="p-[20px] bg-[#FAFAFA] flex flex-col space-y-4 overflow-y-auto h-full">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[20px] font-semibold">Фильтры</h1>
                    <RxCross2
                      size={24}
                      onClick={handleToggle}
                      className="cursor-pointer"
                    />
                  </div>

                  {mountTypes.map((type) => {
                    const isChecked = selectedTypes.includes(type);
                    return (
                      <div key={type}>
                        <label className="flex items-center space-x-2 mb-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleType(type)}
                            className="h-[22px] w-[22px]"
                          />
                          <span className="text-[18px]">{type}</span>
                        </label>

                        <div className="flex flex-wrap gap-2 pl-[10px]">
                          {powerOptions.map((power) => {
                            const isActive =
                              isChecked ||
                              selectedPowers[type]?.includes(power);
                            return (
                              <button
                                key={power}
                                onClick={() => togglePower(type, power)}
                                className={`px-[14px] py-[6px] text-[13px] rounded-md transition ${
                                  type === "Напольный"
                                    ? isActive
                                      ? "bg-[#F5A623] text-white"
                                      : "bg-white text-[#000000]/60 hover:bg-gray-100"
                                    : isActive
                                    ? "bg-[#0067B3] text-white"
                                    : "bg-white text-[#000000]/60 hover:bg-gray-100"
                                }`}
                              >
                                {power}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  <button
                    onClick={clearAll}
                    className="flex items-center justify-center gap-[12px] py-[11px] w-full mt-[12px] rounded-[8px] bg-[#FFE0E0]"
                  >
                    <h1 className="text-[14px] font-normal">Очистить фильтр</h1>
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="md:flex md:flex-wrap mt-[41px] md:gap-[32px] grid grid-cols-2 gap-3">
            {filtered.map((prod) => (
              <ProCard
                setIsOpenModal={setIsOpenModal}
                prod={prod}
                setSelectedProductId={setSelectedProductId}
              />
            ))}
          </div>
          <button
            onClick={handleChatToggle}
            className="md:bottom-[58px] md:right-[40px] bottom-[68px] right-[20px] shadow-md shadow-[#0067B3] hover:scale-110 transition-all duration-500 z-50 fixed md:w-[60px] md:h-[60px] w-[40px] h-[40px] flex items-center justify-center bg-[#0067B3] rounded-full"
          >
            {isChatOpen ? (
              <SlArrowDown
                color="white"
                className="md:h-[24px] md:w-[24px] w-[12px] h-[12px]"
              />
            ) : (
              <img
                src="/img/AIButton.svg"
                alt=""
                className="md:h-[24px] md:w-[24px] w-[20px] h-[20px]"
              />
            )}
          </button>
        </div>

        {isOpenModal && (
          <DetailModal
            setIsOpenModal={setIsOpenModal}
            selectedProduct={products.find((p) => p.id === selectedProductId)}
          />
        )}
        {isChatOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsChatOpen(false)}
          />
        )}

        {isChatOpen && <AIChatModal onClose={() => setIsChatOpen(false)} />}
      </div>
    </Container>
  );
}

export default ProductList1;
