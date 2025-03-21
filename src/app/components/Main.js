"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <main className="relative w-full h-[45rem] flex justify-center items-center text-white px-6 md:px-24">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/main.png"
          alt="배경 이미지"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          priority
        />
        {/* 어두운 배경 오버레이 */}
        {/* <div className="absolute inset-0 bg-opacity-60"></div> */}
      </div>

      {/* 콘텐츠 래퍼 (수평 중앙 정렬) */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-start">
        {/* 로고 (상단 고정) */}
        <div className="absolute -top-16 left-0">
          <span className="inline-block bg-purple-500 text-white text-lg font-semibold px-4 py-2 rounded-full">
          iF® API
          </span>
        </div>

        {/* 제목 및 설명 */}
        <div className="mt-20 max-w-lg text-left">
          <h3
            className="text-2xl md:text-4xl font-bold leading-tight mb-6"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            건강 관리를 위한 <br className="hidden md:inline" /> 개인 맞춤 식품 추천 솔루션
          </h3>

          <p
            className="text-[11px] md:text-[14px] font-semibold  text-white mb-10 leading-relaxed"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            인체와 식품 영양 정보의 상호작용을 통해 구축한 2천 8백만 건의 식품 빅데이터로,{" "} 
            <br className="hidden md:inline" />
            건강 관리에 필요한 정밀한 맞춤 식품 정보를 제공합니다.
          </p>

          {/* 버튼 */}
          <div data-aos="fade-down" data-aos-duration="700" data-aos-delay="100">
            <a
              href="#"
              className="px-6 py-4 border border-white text-white font-semibold rounded-full 
                         transition-all duration-300 shadow-md 
                         hover:border-purple-500 hover:text-purple-500"
            >
              서비스 문의하기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
