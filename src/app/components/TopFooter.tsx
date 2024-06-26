'use client'
import emailJs from "@emailjs/browser"
import { useState } from "react";
import { Toaster, toast } from "sonner";
export default function TopFooter() {
    const [email, setEmail] = useState('')

    async function sendEmail() {
        try {
            if (!email) {
                toast.error('Por favor, informe o seu e-mail')
                return
            }

            emailJs.send('service_cqcmq93', 'template_6prhpa9', {
                email: email,
            }, 'xnhpOv3KsfVFKJcio')

            emailJs.send('service_cqcmq93', 'template_gt9wvn2', {
                email: email,
            }, 'xnhpOv3KsfVFKJcio')

            toast.success('Email enviado com sucesso');
            setEmail('')
        } catch (error) {
            console.log('error', error)
        }
    }

  return (
      <div className="bg-[#111111] text-white w-full h-auto py-12 md:h-96">
          <Toaster
              position='top-right'
              richColors
          />
        <div className="flex flex-col  md:flex-row justify-between ml-6 md:ml-24">
            <div className="">
                <h1 className="font-bold font-WorkSans ml-4 leading-10  mt-4 text-3xl md:text-4xlmd:pt-8 md:pl-10 md:leading-10">
                    Venha fazer parte do <br /> nosso time.
                </h1>
                <br />
                <h4 className="mt-5 ml-4 pr-24 font-WorkSans text font-normal text-lg   md:text-base leading-10 md:leading-6  md:mt-2 md:mb-6 md:ml-14  opacity-40">
                    Informe o seu e-mail para receber notícias de  futuras vagas.
                </h4>
            </div>
            <div className="  mr-6 md:mr-20  md:mt-20">
                <h4 className="h-12 w-full max-md:hidden md:w-80 md:mr-5 font-semibold text-white text-2xl md:text-3xl  ">
                    Conheça <br /> nossas vagas
                </h4>
            </div>
        </div>
        <div className="flex flex-col ml-4 md:flex-row justify-between  ">
            <div className="flex flex-col   md:flex-row gap-2 ml-6 md:ml-24">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                      className=" w-11/12 h-20 outline-none focus:border-[#f19c1c] border border-[#222222] bg-[#272727]  pl-8  mt-8 text-lg md:mt-3 ml-0 md:ml-10  md:w-96  md:h-14 md:bg-zinc-800 text-white rounded-sm md:p-6 md:text-base"
                    placeholder="Entre com o seu endereço de e-mail"
                />
                <button
                    onClick={sendEmail}
                    className="mt-7 w-11/12 h-20  text-xl md:mt-3 md:h-14 md:ml-2   md:w-36 font-semibold text-black bg-[#f19c1c] rounded-sm md:text-sm">
                    ENVIAR
                </button>
            </div>
            <div className="mt-2 md:mt-2 mr-6 md:mr-64">
                <button
                    className="h-10  max-md:hidden md:mr-6 w-36 font-semibold bg-[#f19c1c] text-black rounded-sm text-sm">
                    Conhecer
                </button>
            </div>
        </div>
    </div>
  );
}
