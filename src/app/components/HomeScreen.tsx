export default function HomeScreen(){
    return (
        <div className="pt-20">
            <div className="flex justify-center items-center">
                <div className="border-[1px] border-[#222222] rounded-full pt-[16px] pb-[16px] pl-[6px] pr-[80px] text-center">
                    <span className="text-base/[16px] text-center font-semibold text-[#1F1F1F] bg-[#E19322] rounded-full pt-[12px] pb-[12px] pl-[34px] pr-[34px] font-WorkSans">Olá!</span>
                    <span className="text-base/[16px] text-center font-normal text-[#FFFFFF] ml-[71px] font-WorkSans">No que podemos ajudar?</span>
                </div>
            </div>
            <div className="pt-[80px]">
                <div className="text-center">
                    <h1 className="font-WorkSans text-[100px] font-medium leading-[120px]">Transforme <span className="text-[#FF9700] font-semibold">sua</span> <br/> <span className="text-[#FF9700] font-medium">idea</span> em realidade.</h1>
                </div>
                <div className="text-center pt-[32px]">
                    <span className="font-WorkSans text-[24px] leading-[36px] text-[#E4E4E4]">Somos fábrica de software de alta velocidade. Da ideia ao MVP,<br/> oferecemos agilidade e tecnologia dentro do orçamento.</span>
                </div>
            </div>
            <div className="pt-[56px]">
                <div className="flex justify-center items-center">
                    <button className=" py-2 px-4 rounded-full flex items-center space-x-2">
                        <span className="font-WorkSans text-[16px] text-[#1F1F1F] bg-[#FF9700] leading-[28px] font-medium px-4 rounded-full flex space-x-2 py-2">
                            Iniciar projeto
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </button>
                    <button className="border border-[#FFFFFF] font-bold py-2 px-4 rounded-full flex items-center space-x-2">
                        <span className="font-WorkSans text-[16px] text-[#FFFF] leading-[28px] font-medium">Assista ao vídeo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197 1.925c-.433.262-.556.833-.279 1.24.256.38.769.482 1.154.246l3.197-1.925c.433-.262.556-.833.279-1.24-.256-.38-.769-.482-1.154-.246z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}