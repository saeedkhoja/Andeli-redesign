import React from "react";
import Container from "./Container";

function Header() {
  return (
    <div className="bg-[#0067B3]">
      <Container>
        <div className="flex justify-center items-center py-[10px] md:py-[14px] text-white text-[12px] md:text-[14px]">
          <div className="font-normal max-md:px-[10px]">
            <h1>Here we can write the urgent information or the link !</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
