"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
    });
  }, []);

  return (
    <div 
      className="relative w-full bg-no-repeat bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/contact.png')" }}
    >
      <section 
        className="w-full max-w-6xl mx-auto p-8 flex flex-col 
                   items-center md:items-start 
                   text-center md:text-left 
                   text-white"
        data-aos="fade-up"
      >
        <p className="text-2xl text-purple-300 mb-4">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          iF API와 함께 개인 맞춤 식품 서비스를 시작해 보세요.
        </h2>
        <p className="mb-6 font-semibold">연락처와 함께 문의 사항을 남겨주세요.</p>
        <button className="px-6 py-4 border border-white text-white font-semibold rounded-full 
                           transition-all duration-300 shadow-md cursor-pointer
                           hover:border-purple-500 hover:text-purple-500">
          서비스 문의하기
        </button>
      </section>
    </div>
  );
}
