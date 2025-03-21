"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto my-12 px-6">
        <div className="flex flex-col md:flex-row justify-center items-center lg:gap-16">
          {/* Algorithm Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-[45%] mb-12 md:mb-0">
            <h3 className="text-lg font-semibold text-purple-600">Algorithm</h3>
            <h2 className=" text-2xl  md:text-3xl font-bold text-black mt-2 mb-4">
              정확도와 실효성이 입증된 <br /> 식품 추천 알고리즘
            </h2>
            <Image
              src="/feature1.png"
              alt="API Representation"
              width={500}
              height={300}
              className="mt-4 w-full"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <p className="text-sm md:text-base text-gray-800 mt-6">
              식품 빅데이터의 구축에서 추천 알고리즘의 성능까지 임상연구자와 공동으로 검증하였고, 이를 소프트웨어에
              시험을 통해 공인받았습니다.
            </p>
          </div>

          {/* Value Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-[45%]">
            <h3 className="text-lg font-semibold text-purple-600">Value</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-black mt-2 mb-4">
              더 새롭고, 더 가치있는 <br /> 식품 추천 API
            </h2>
            <Image
              src="/feature2.png"
              alt="API Representation"
              width={500}
              height={300}
              className="mt-4 w-full"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <p className="text-sm md:text-base text-gray-800 mt-6">
              고객의 건강 설문 결과를 JSON 형식으로 if® API에 전달하면 현재 건강 상태에 가장 도움이 되는 식품을
              추천해 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
