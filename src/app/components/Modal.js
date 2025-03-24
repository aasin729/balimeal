import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setAnimationClass("opacity-100 scale-100"), 10);
    } else {
      setAnimationClass("opacity-0 scale-95");
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (shouldRender) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shouldRender, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 bg-black/60 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white text-black w-[90%] md:max-w-5xl p-6 md:p-10 rounded-xl relative 
          transform transition-all duration-300 ${animationClass}
          max-h-[60vh] overflow-y-auto scrollbar-hide`}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* 타이틀 */}
        <h2 className="text-xl md:text-2xl font-bold mb-2">서비스 문의하기</h2>
        <p className="text-xs md:text-sm mb-6 md:mb-8 text-gray-600">
          아래 서식을 작성 후 보내주시면 담당자가 빠르게 회신하겠습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* 왼쪽 입력 폼 */}
          <div className="space-y-3 md:space-y-4">
            {/* 이름 */}
            <div>
              <label className="block text-xs md:text-sm font-semibold mb-1 text-gray-500">
                이름<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                  className="w-full border border-gray-300 p-2 md:p-3 rounded-md text-xs md:text-sm 
                  focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
                required
              />
            </div>

            {/* 소속기관명 */}
            <div>
              <label className="block text-xs md:text-sm font-semibold mb-1 text-gray-500">
                소속기관명<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="소속기관명을 입력하세요"
                 className="w-full border border-gray-300 p-2 md:p-3 rounded-md text-xs md:text-sm 
                 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
                required
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-xs md:text-sm font-semibold mb-1 text-gray-500">
                이메일<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                  className="w-full border border-gray-300 p-2 md:p-3 rounded-md text-xs md:text-sm 
                  focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
                required
              />
            </div>

            {/* 연락처 */}
            <div>
              <label className="block text-xs md:text-sm font-semibold mb-1 text-gray-500">
                연락처<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="연락처를 입력하세요"
                  className="w-full border border-gray-300 p-2 md:p-3 rounded-md text-xs md:text-sm 
                  focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
                required
              />
            </div>

            {/* 개인정보 동의 */}
            <div className="flex items-center space-x-2 pt-2">
              <input type="checkbox" className="cursor-pointer" required />
              <label className="text-xs md:text-sm text-gray-500 font-bold">
                [필수] 개인정보 수집에 동의합니다.
              </label>
            </div>
          </div>

          {/* 오른쪽 textarea + 안내문 */}
          <div>
            <label className="text-xs md:text-sm font-semibold text-gray-500 block mb-1">
              문의 내용 <span className="text-red-500">*</span>
            </label>
            <p className="text-[10px] md:text-[11px] text-red-500 font-semibold mb-2">
              [필수] 견적 문의 시 활동 목적, 대상 유저 수, 최대 동시 요청 수를 반드시 기재해 주세요.
            </p>
            <textarea
              className="w-full h-[200px] md:h-[275px] border border-gray-300 p-2 md:p-3 rounded-md text-xs md:text-sm resize-none 
              focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
              placeholder="견적 문의 시 활용 목적, 대상 유저 수, 최대 동시 요청 수를 반드시 기재해 주세요."
              required
            />
          </div>
        </div>

        {/* 전송 버튼 */}
        <div className="mt-6 md:mt-8 flex justify-end">
          <button
            type="submit"
            className="cursor-pointer bg-purple-500 text-white py-2 px-6 md:py-3 md:px-8 rounded-full text-sm md:text-base font-semibold hover:bg-purple-600"
          >
            전송하기
          </button>
        </div>
      </div>
    </div>
  );
}
