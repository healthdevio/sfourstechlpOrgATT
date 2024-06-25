export default function TopFooter() {
    return (
        <div className="bg-[#111111] text-white w-full h-auto py-12 md:h-96">
            <div className="flex flex-col md:flex-row justify-between ml-6 md:ml-24">
                <div className="gap-2">
                    <h1 className="font-bold text-3xl md:text-4xl w-auto md: pt-8 pl-6 md:pl-10 leading-normal">
                        Venha fazer parte do <br /> nosso time.
                    </h1>
                    <br />
                    <h4 className="mt-6 md:mt-4 ml-6 md:ml-10 opacity-40">
                        Informe o seu e-mail para receber notícias de futuras vagas.
                    </h4>
                </div>
                <div className=" md: mt-20 mr-6 md:mr-20">
                    <h4 className="h-12 w-full md:w-80 font-semibold text-white text-2xl md:text-3xl  ">
                        Conheça <br /> nossas vagas
                    </h4>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-0">
                <div className="flex flex-col md:flex-row gap-2 ml-6 md:ml-24">
                    <input
                        type="email"
                        className="mt-4  md:mt-3 ml-0 md:ml-10 w-full md:w-96 h-12 bg-zinc-800 text-white rounded-sm p-6 text-xs"
                        placeholder="Entre com o seu endereço de e-mail"
                    />
                    <button className="mt-4 md:mt-3 h-12 w-full md:w-36 font-semibold text-black bg-[#f19c1c] rounded-sm text-sm">
                        Enviar
                    </button>
                </div>
                <div className="mt-2 md:mt-2 mr-6 md:mr-64">
                    <button className="h-10 w-36 md: w-40 font-semibold bg-[#f19c1c] text-black rounded-sm text-sm ">
                        Conhecer
                    </button>
                </div>
            </div>
        </div>
    );
}
