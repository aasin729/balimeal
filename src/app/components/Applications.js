"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Applications() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const features = [
    { title: "고객화", subtitle: "Customizable", description: "고객사 개발 환경에 맞추어 다양한 데이터에서 제한없이 식품 추천 서비스를 제공합니다.", icon: "/icon1.png" },
    { title: "맞춤형", subtitle: "Personalized", description: "식품이 아닌 다른 신뢰성으로 추천하여 콘텐츠를 맞춤으로 구현 가능합니다.", icon: "/icon2.png" },
    { title: "안전한", subtitle: "Secure", description: "최첨단 암호화 기술을 활용하여 높은 보안 수준을 갖추고 있습니다.", icon: "/icon3.png" },
    { title: "검증된", subtitle: "Validated", description: "실제 건강관리 앱에서 사용되고 있으며, 알고리즘의 검증을 다방면에서 신뢰할 수 있는 기관과 함께 진행하였습니다.", icon: "/icon4.png" },
    { title: "유연한", subtitle: "Adaptable", description: "고객의 건강에 도움이 되는 식품을 기업의 다양한 특성을 유연하게 적용 가능합니다.", icon: "/icon5.png" },
    { title: "신뢰할 수 있는", subtitle: "Reliable", description: "국민건강영양조사를 바탕으로 만든 신뢰성 높은 건강전문용을 제공합니다.", icon: "/icon6.png" }
  ];

  const companies = [
    { name: "K-Food 맞춤식이", description: "한식 건강 지표를 활용한 한국인 맞춤형 건강식이 추천", image: "/company1.png" },
    { name: "iFOOD Gene", description: "내 유전자 이대로 괜찮은걸까?", image: "/company2.png" },
    { name: "케어바이 Q", description: "AI 건강 알고리즘으로 추천해주는 맞춤형 건강기능식품!", image: "/company3.png" },
    { name: "과일곰탕", description: "섭섭, 유전자, 라이프로그 기반  개인 맞춤형 과일 추천 서비스", image: "/company4.png" }
  ];

  const processSteps = [
    { step: "Step 01", title: "견적 의뢰", description: <>견적 의뢰 서식을 참고하여 항목을 작성 후 메일로 발송해주세요.<br /> 1영업일 이내에 담당자가 상담을 통해 고객님의 서비스에 가장 알맞은 상품을 소개해 드립니다.</>, icon: "/icon7.png" },
    { step: "Step 02", title: "계약 진행", description: <>고객님의 서비스에 가장 적합한 상품을 선택 후 계약합니다. 계약 후 API 테스트 Key와 개발 문서를 전달해 드립니다. <br />(테스트 횟수와 기간에 제한이 있습니다.)</>, icon: "/icon8.png" },
    { step: "Step 03", title: "테스트 및 개발", description: <>테스트 API Key와 개발 문서를 활용하여 서비스를 개발합니다.<br /> 개발 중 문의 사항은 이메일을 통해 접수해주시면 담당자가 신속하게 답변해드립니다.</>, icon: "/icon9.png" },
    { step: "Step 04", title: "API Key 교체", description: <>개발 완료 후 정식 서비스 운영전, 운영 API Key를 발급받습니다.<br /> 개발된 서비스의 API Key를 새로운 운영 API Key로 교체 후 서비스를 론칭합니다.</>, icon: "/icon10.png" },
    { step: "Step 05", title: "서비스 론칭 및 운영지원", description: <>견적 의뢰 서식을 참고하여 항목들을 작성 후 메일로 발송해주세요.<br /> 1영업일 이내에 담당자가 고객님의 서비스에 적합한 상품을 안내해 드립니다.</>, icon: "/icon11.png" }
  ];

  return (
    <div className="bg-white w-full">
      {/* Key Features */}
      <section className="max-w-6xl mx-auto text-center mt-14 p-12">
        <h2 className="text-xl font-bold mb-6 text-left text-purple-700">Key Features</h2>
        <p className="text-left text-3xl text-black mb-12 font-semibold">
          복잡한 식품 추천은 iF® API에게 맡기고,<br />기업은 브랜드 가치를 높이는데 집중할 수 있습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => {
            // 그룹화된 딜레이 설정 (0ms 또는 300ms)
            const delay = index < 3 ? 0 : 300;
          
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="mb-2"
                  data-aos="zoom-in"
                  data-aos-delay={delay}
                  data-aos-duration="600"
                />
                <h3 className="font-bold text-black text-lg">{feature.title}</h3>
                <p className="text-purple-500 text-sm font-semibold">{feature.subtitle}</p>
                <p className="text-gray-700 text-sm mt-1">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Applications */}
      <section className="max-w-6xl mx-auto text-center p-12">
        <h2 className="text-xl font-bold mb-6 text-left text-purple-700">Applications</h2>
        <p className="text-left text-3xl text-black mb-12 font-semibold">
          이미 여러 기업이 iF® API를 사용하고 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-aos="fade-up">
          {companies.map((company, index) => (
            <div
              key={index}
              className="p-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="w-full h-40">
                <Image
                  src={company.image}
                  alt={company.name}
                  width={300}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-start text-left">
                <h3 className="font-bold text-lg text-gray-900">{company.name}</h3>
                <p className="text-sm mt-2 text-gray-600">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Process */}
      <section className="max-w-6xl mx-auto text-center p-12 mb-16">
        <h2 className="text-xl font-bold mb-6 text-left text-purple-700">Integration Process</h2>
        <p className="text-left text-3xl text-black mb-12 font-semibold">
          iF® API는 체계적인 적용 프로세스를 갖추고 있습니다.
        </p>
        <div className="flex flex-col gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center p-6 bg-white border border-gray-300 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* 아이콘 */}
              <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                <Image src={step.icon} alt={step.title} width={80} height={80} />
              </div>
          
              {/* 텍스트 컨테이너 */}
              <div className="md:ml-7 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                  <span className="bg-purple-100 text-purple-600 rounded-full px-3 py-2 text-base font-semibold">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-black text-lg mt-2 md:mt-0">{step.title}</h3>
                </div>
                <p className="text-gray-600 font-semibold text-[12px] md:text-base mt-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
