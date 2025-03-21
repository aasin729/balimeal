"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full py-12 bg-[#162146] text-white">
      {/* Service 01 - bodyFit */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-stretch gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold text-purple-400" data-aos="fade-down" data-aos-delay="100">
            Service 01
          </h3>
          <div className="flex items-center gap-2 mt-2" data-aos="fade-down" data-aos-delay="100">
            <span className="px-3 py-1 bg-white text-[#0F172A] font-bold text-sm rounded-full">iF API</span>
            <h4 className="text-3xl font-bold">
              body<span className="text-gray-300">Fit</span>
            </h4>
          </div>
          <p className="text-gray-400 mt-4" data-aos="fade-down" data-aos-delay="100">
            성인의 체지방 관리를 통해서 건강한 체형 유지에 도움이 되는
            개인화 식품 추천 목록을 제공합니다.
          </p>

          {/* Input & Output */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Input */}
            <div className="bg-[#00000026] p-10 rounded-lg min-h-72">
              <h5 className="text-lg font-semibold text-purple-400">Input</h5>
              <p className="mt-4 text-sm">설문<br /><span className="text-white text-xl font-bold">42개+</span></p>
              <p className="mt-4 text-sm">건강검진<br /><span className="text-white text-xl font-bold">별도 협의 필요</span></p>
              <p className="mt-4 text-sm">유전자 검사<br /><span className="text-white text-xl font-bold">별도 협의 필요</span></p>
              <p className="mt-4 text-sm">라이프 로그<br /><span className="text-white text-xl font-bold">1개+</span></p>
            </div>

            {/* Output */}
            <div className="bg-[#00000026] p-10 rounded-lg min-h-72">
              <h5 className="text-lg font-semibold text-purple-400">Output</h5>
              <p className="mt-4 text-sm">
                식품재료<br />(식품 설명, 식품 이미지 포함)<br />
                <span className="text-white text-xl font-bold">800개+</span>
              </p>
              <p className="mt-4 text-sm">건강 기능성 원료<br /><span className="text-white text-xl font-bold">별도 협의 필요</span></p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 hidden md:flex justify-center items-center">
          <img
            src="/service1.png"
            alt="bodyFit"
            className="max-h-[500px] w-auto object-contain"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </div>
      </section>

      {/* Service 02 - innerFit */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-stretch gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 hidden md:flex justify-center items-center">
          <img
            src="/service2.png"
            alt="innerFit"
            className="max-h-[500px] w-auto object-contain"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold text-green-400" data-aos="fade-down" data-aos-delay="100">
            Service 02
          </h3>
          <div className="flex items-center gap-2 mt-2" data-aos="fade-down" data-aos-delay="100">
            <span className="px-3 py-1 bg-white text-[#0F172A] font-bold text-sm rounded-full">iF API</span>
            <h4 className="text-3xl font-bold">
              inner<span className="text-gray-300">Fit</span>
            </h4>
          </div>
          <p className="text-gray-400 mt-4" data-aos="fade-down" data-aos-delay="100">
            다양한 성인병에 노출되는 중장년을 위한 서비스이며,
            건강검진과 유전자 검사 정보를 바탕으로 이너케어를 제공합니다.
          </p>

          {/* Input & Output */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Input */}
            <div className="bg-[#00000026] p-6 rounded-lg min-h-72">
              <h5 className="text-lg font-semibold text-green-400">Input</h5>
              <p className="mt-4 text-sm">설문<br /><span className="text-white text-xl font-bold">65개+</span></p>
              <p className="mt-4 text-sm">건강검진<br /><span className="text-white text-xl font-bold">별도 협의 필요</span></p>
              <p className="mt-4 text-sm">유전자 검사<br /><span className="text-white text-xl font-bold">별도 협의 필요</span></p>
              <p className="mt-4 text-sm">라이프 로그<br /><span className="text-white text-xl font-bold">1개+</span></p>
            </div>

            {/* Output */}
            <div className="bg-[#00000026] p-6 rounded-lg min-h-72">
              <h5 className="text-lg font-semibold text-green-400">Output</h5>
              <p className="mt-4 text-sm">
                식품재료<br />(식품 설명, 식품 이미지 포함)<br />
                <span className="text-white text-xl font-bold">800개+</span>
              </p>
              <p className="mt-4 text-sm">생애주기별<br /><span className="text-white text-xl font-bold">영양정보</span></p>
              <p className="mt-4 text-sm">이너케어<br /><span className="text-white text-xl font-bold">상세정보</span></p>
              <p className="mt-4 text-sm">건강 기능성 원료<br /><span className="text-white text-xl font-bold">별도 협의 필요</span></p>
              <p className="mt-4 text-sm">건강 기능성 제품<br /><span className="text-white text-xl font-bold">별도 협의 후 커스텀 프로젝트 필요</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
