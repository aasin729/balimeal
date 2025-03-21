export default function Footer() {
  return (
      <footer className="w-full bg-white text-gray-500 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
              {/* 회사 정보 */}
              <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-700">D:IF</h2>
                  <p className="text-sm mt-1">Leading Data Food Company</p>
                  <p className="text-sm mt-2 font-semibold">ADDRESS <span className="font-normal">경기도 용인시 기흥구 흥덕1로 13, 흥덕IT밸리 타워 A동 2906호</span></p>
                  <p className="text-sm font-semibold">TEL <span className="font-normal">031 895 5123</span> &nbsp; FAX <span className="font-normal">0505 870 5123</span></p>
                  <p className="text-sm font-semibold">EMAIL <span className="font-normal">info@d-if.kr</span></p>
                  <div className="flex justify-between items-center mt-2 text-sm font-semibold">
                      <a href="#" className="text-gray-500">iF® API 서비스 이용 약관</a>
                      <p className="text-xs">© 2025 D.iF, INC. ALL RIGHTS RESERVED.</p>
                  </div>
              </div>
              
              {/* 패밀리 사이트 */}
              <div className="hidden md:block mt-6 md:mt-0 md:self-start">
                  <select className="border border-gray-300 bg-white py-3 px-5 rounded-lg cursor-pointer shadow-md text-base">
                      <option>Family Site</option>
                      <option>iFood Gene</option>
                      <option>GenoLifeCare</option>
                      <option>GenoBodyCare</option>
                  </select>
              </div>
          </div>
      </footer>
  );
}