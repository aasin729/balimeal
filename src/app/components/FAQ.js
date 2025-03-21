"use client";

import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    category: "개발",
    question: "테스트 API key를 이용하는 데 어떤 제약사항이 있나요?",
    answer:
      "테스트 API key는 API 활용 기능 개발을 지원하기 위해 제공되는 key입니다. 계약된 서비스에 허용된 모든 Life Record를 입력 데이터로 전달할 수 있습니다. 단, 테스트 API key의 만료 기간은 1주 단위로 재발급(최대 4회 갱신 가능) 되며 매 주 최대 500건의 요청을 보낼 수 있습니다. 테스트 API key의 제한 사항은 별도 협의에 따라 조정할 수 있습니다.",
  },
  {
    category: "개발",
    question: "if API를 활용하기 위해 개발 예제를 확인할 수 있나요?",
    answer:
      "계약 후 테스트 API key와 함께 API 개발문서 및 POSTMAN(API 테스트 도구) 파일(.collection)을 제공해 드립니다.",
  },
  {
    category: "서비스",
    question: "추천 결과를 바탕으로 자사의 제품을 판매해도 되나요?",
    answer: "추천 결과를 활용하여 자유롭게 제품을 판매할 수 있습니다.",
  },
  {
    category: "개발",
    question: "다른 경쟁사에서도 같은 추천 API를 사용하면 차별화된 서비스 제공이 어렵지 않나요?",
    answer: "API를 활용하는 방법에 따라 차별화된 서비스를 제공할 수 있습니다.",
  },
  {
    category: "개발",
    question: "밀키트를 판매하는 기업입니다. if API에서 정의한 식품은 무엇인가요?",
    answer: "if API에서 정의한 식품은 사용자의 라이프스타일을 반영한 맞춤형 추천을 제공합니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#F4F1FC] py-10 px-4">
      <section
        className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 rounded-2xl"
        data-aos="fade-up"
      >
        <h2 className="text-xl font-bold mb-2 text-left text-purple-700">FAQ</h2>
        <p className="text-left text-3xl text-black mb-8 font-semibold">자주 묻는 질문</p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 w-full rounded-xl overflow-hidden"
            >
              <button
                className="flex flex-col sm:flex-row sm:items-center items-start gap-3 w-full p-5 text-left text-lg font-semibold border border-gray-300 cursor-pointer focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200 rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-purple-600 text-2xl">Q</span>
                  <span className="bg-[#F4F1FC] text-purple-600 rounded-full px-4 py-1 text-sm font-bold shrink-0">{faq.category}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="flex-1 text-gray-800 text-[15px]">{faq.question}</span>
                  {openIndex === index ? (
                    <FaMinus className="text-purple-600 ml-3" />
                  ) : (
                    <FaPlus className="text-purple-500 ml-3" />
                  )}
                </div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-5 text-gray-700 bg-gray-100">
                  <span className="text-base font-semibold text-gray-500">A :</span> {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
