import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Container from "../../Components/Container";
import { useNavigate } from "react-router-dom";

function BlogDetail() {
  let navigate = useNavigate();

  return (
    <Container>
      <div className="px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[180px]">
        <div className="flex flex-wrap items-center mt-8 mb-6 gap-4 sm:gap-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="flex items-center gap-2 bg-[#F0F0F0] py-2.5 px-5 rounded-md"
          >
            <FaAngleLeft />
            <span className="text-sm sm:text-[15px] font-light text-[#737376]">
              Назад
            </span>
          </button>
          <h1 className="text-sm sm:text-[14px] font-medium text-white bg-[#283A61] py-1 px-5 rounded-sm">
            О стабилизаторах
          </h1>
        </div>

        <div>
          <h1 className="text-[24px]  md:text-[42px] lg:text-[46px] font-bold mb-4">
            Для каких целей используется стабилизатор напряжений?
          </h1>

          <img
            src="/Blogs/Detail.svg"
            alt=""
            className="w-full h-auto rounded-md"
          />

          <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-medium text-[#434343] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis
            lectus...
          </p>

          <p className="text-base sm:text-lg lg:text-[20px] font-normal mt-10">
            Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec
            mus...
          </p>

          <div className="bg-[#F0F0F0] px-6 py-8 rounded-md mt-10">
            <h1 className="text-xl sm:text-[22px] lg:text-[24px] font-bold">
              В этой статье:
            </h1>
            <ul className="mt-4 space-y-2 text-lg sm:text-xl">
              <li>
                <span className="font-semibold">1.</span> Почему настенные
                стабилизаторы безопасные?
              </li>
              <li>
                <span className="font-semibold">2.</span> Меры безопасность при
                использовании стабилизаторов
              </li>
            </ul>
          </div>

          <p className="text-base sm:text-lg lg:text-[20px] font-normal text-[#434343] mt-6">
            Amet aliquet at a aliquam ac suspendisse euismod...
          </p>

          {/* Section 1 */}
          <h2 className="text-lg sm:text-xl lg:text-[24px] font-bold mt-6">
            <span className="font-semibold">1.</span> Почему настенные
            стабилизаторы безопасные?
          </h2>
          <p className="text-base sm:text-lg text-[#434343] mt-4">
            Dignissim lacus sit congue lacus aliquam...
          </p>
          <p className="text-base sm:text-lg text-[#434343] mt-4">
            Leo id aliquet potenti enim sed maecenas...
          </p>

          {/* Section 2 */}
          <h2 className="text-lg sm:text-xl lg:text-[24px] font-bold mt-6">
            <span className="font-semibold">2.</span> Меры безопасность при
            использовании стабилизаторов
          </h2>
          <p className="text-base sm:text-lg text-[#434343] mt-4">
            Dignissim lacus sit congue lacus aliquam...
          </p>
          <p className="text-base sm:text-lg text-[#434343] mt-4">
            Leo id aliquet potenti enim sed maecenas...
          </p>

          {/* Continue Reading */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Продолжайте читать</h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <img
                  src="/Blogs/photo2.svg"
                  alt=""
                  className="w-full sm:w-[150px] h-auto rounded"
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Меры безопасность при использовании стабилизаторов
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <img
                  src="/Blogs/photo.svg"
                  alt=""
                  className="w-full sm:w-[150px] h-auto rounded"
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Меры безопасность при использовании стабилизаторов
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BlogDetail;
