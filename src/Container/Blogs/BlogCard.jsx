import React from "react";

function BlogCard({ data }) {
  return (
    <div key={data.id} className="flex flex-col">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-auto object-cover rounded-md"
      />
      <div className="flex items-center gap-[12px] mt-[12px] flex-wrap">
        <h1 className="text-[12px] sm:text-[14px] font-medium text-white bg-[#283A61] py-[3px] px-[16px] rounded-[3px]">
          О стабилизаторах
        </h1>
        <h2 className="text-[12px] sm:text-[14px] font-normal text-black">
          {data.date}
        </h2>
      </div>
      <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] mt-2">
        {data.title}
      </h1>
      <p className="text-[14px] sm:text-[16px] font-normal text-[#434343] mt-1">
        {data.description}
      </p>
    </div>
  );
}

export default BlogCard;
