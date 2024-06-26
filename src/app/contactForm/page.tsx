'use client'
import React from 'react';
import Footer from '../components/footer/Footer';
import StrokeIcon from '../components/icons/stroke';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../components/ui/Select';
import Input from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import Image from 'next/image';
import GenericImage from '../components/images/genericPhoto.jpg';
import Link from 'next/link';
import S4sLogoIcon from '../components/icons/s4sLogo';
import emailJs from "@emailjs/browser"

import MobileHeader from '../components/MobileHeader';
import MobileFooter from '../components/MobileFooter';
import { Toaster, toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [clientName, setClientName] = React.useState<string>('')
  const [clientEmail, setClientEmail] = React.useState<string>('')
  const [clientPhone, setClientPhone] = React.useState<string>('')
  const [clientCompany, setClientCompany] = React.useState<string>('')
  const [projectStage, setProjectStage] = React.useState<string>('')
  const [projectDevelopmentTime, setProjectDevelopmentTime] = React.useState<string>('')
  const [projectDescription, setProjectDescription] = React.useState<string>('')
  const [privacityPolicy, setPrivacityPolicy] = React.useState<boolean>(false)

  const projectTime = [
    {
      label: "0 - 2 meses"
    },
    {
      label: "2 - 4 meses"
    },
    {
      label: "4 - 8 meses"
    },
  ]

  function formatPhone(phoneNumber: string) {
    const maskedNumber = phoneNumber
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
    return maskedNumber.length > 15 ? maskedNumber.substring(0, 15) : maskedNumber;
  }

  async function sendEmail() {
    if (clientName === '' || clientEmail === '' || clientPhone === '' || clientCompany === '' || projectStage === '' || projectDevelopmentTime === '' || projectDescription === '') {
      toast.warning('Preencha todos os campos para enviar o formulário');
      return;
    }

    if (!privacityPolicy) {
      toast.warning('Aceite a politica de privacidade para enviar o formulário');
      return;
    }

    try {
      emailJs.send('service_f51bo06', 'template_0buumkx', {
        from_name: clientName,
        from_email: clientEmail,
        from_phone: clientPhone,
        from_company: clientCompany,
        project_stage: projectStage,
        project_development_time: projectDevelopmentTime,
        message: projectDescription,
      }, '0GGNCQMZt2YTxATct')
      toast.success('Formulário enviado com sucesso');
      setClientName('')
      setClientEmail('')
      setClientPhone('')
      setClientCompany('')
      setProjectStage('')
      setProjectDevelopmentTime('')
      setProjectDescription('')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='w-full h-sreen'>
      <Toaster
        position='top-right'
        richColors
      />
      <div className='xs:hidden md:block'>
        <div className='w-full h-sreen flex pt-8 pb-8 px-0 bg-[#121214]'>
          <div className='min-w-[30rem] flex flex-col justify-between h-screen ml-8 px-11 py-14 bg-[#0A0A0B] rounded-lg'>
            <div className='mb-32'>
              <S4sLogoIcon />
            </div>
            <div>
              <h1 className='text-white text-3xl font-medium'>
                Comece sua <br />
                jornada conosco.
              </h1>
              <p className='text-[#7B7B7B] mt-8 text-base'>
                Juntos transformaremos sua ideia<br />
                em produto real e acessível ao<br />
                mercado de startups!
              </p>
            </div>

            <div className='w-full h-40 bg-white/[2%] mt-24 px-6 py-8'>
              <div className='flex items-center justify-between'>
                <div className='flex'>
                  <div className='w-14 h-14 rounded-full bg-red-500 flex items-center justify-center overflow-hidden'>
                    <div className='h-full w-full'>
                      <Image
                        alt='Sofia Prado'
                        className='object-cover w-full h-full rounded-full'
                        width={56}
                        height={56}
                        src={GenericImage}
                      />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h1>Sofia Prado</h1>
                    <p>CTO Dribble</p>
                  </div>
                </div>
                <StrokeIcon />
              </div>
              <p className='text-[#B3B3B3] text-sm mt-3'>
                Juntos transformaremos sua ideia em produto real e
                acessível ao mercado de startups!
              </p>
            </div>
          </div>

          <div className='w-full'>
            <div className='flex justify-end gap-14 mt-6 mr-14'>
              <Link
                href='/'
              >
                <p className='text-[#909090] text-base cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>Home</p>
              </Link>
              <Link href="/?scrollTo=ourServices">
                <p className='text-[#909090] text-base cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>O que fazemos</p>
              </Link>
              <Link
                href="/?scrollTo=Opnions"
              >
                <p className='text-[#909090] text-base cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>Depoimentos</p>
              </Link>
              <Link
                href='/?scrollTo=Us'
              >
                <p className='text-[#909090] text-base cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>Quem somos</p>
              </Link>
            </div>

            <div className='mt-16 px-14'>
              <h1 className='mb-10'>Informações para contato</h1>

              <div className='grid grid-cols-2 gap-8'>
                <Input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder='Seu nome' />
                <Input
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder='Seu e-mail' />
                <Input
                  value={clientPhone}
                  maxLength={15}
                  onChange={(e) => {
                    const formattedPhone = formatPhone(e.target.value);
                    setClientPhone(formattedPhone);
                  }}
                  placeholder='Seu telefone'
                />
                <Input
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  placeholder='Sua empresa' />
              </div>
            </div>

            <div className='w-full px-14 mt-14 flex gap-8'>
              <div className='w-full'>
                <h1 className='mb-10'>Em qual etapa está o seu projeto</h1>
                <Select
                  value={projectStage}
                  onValueChange={
                    (value) => setProjectStage(value)
                  }
                >
                  <SelectTrigger
                  >
                    <SelectValue
                      placeholder="Selecionar"
                    />
                    <SelectContent>
                      <SelectGroup>
                        {
                          projectTime.map((time, index) => (
                            <SelectItem
                              key={index}
                              value={time.label}
                              className='hover:bg-white/10 cursor-pointer p-2 rounded-lg transition-colors duration-100'
                            >
                              <p>{time.label}</p>
                            </SelectItem>
                          ))
                        }
                      </SelectGroup>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>

              <div className='w-full'>
                <h1 className='mb-10'>Quanto tempo você tem para desenvolver?</h1>
                <Select
                  value={projectDevelopmentTime}
                  onValueChange={
                    (value) => setProjectDevelopmentTime(value)
                  }
                >
                  <SelectTrigger
                  >
                    <SelectValue
                      placeholder="Selecionar"
                    />
                    <SelectContent>
                      <SelectGroup>
                        {
                          projectTime.map((time, index) => (
                            <SelectItem
                              key={index}
                              value={time.label}
                              className='hover:bg-white/10 cursor-pointer p-2 rounded-lg transition-colors duration-100'
                            >
                              <p>{time.label}</p>
                            </SelectItem>
                          ))
                        }
                      </SelectGroup>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>
            </div>

            <div className='mt-14 px-14'>
              <h1 className='mb-10'>Descrição do projeto</h1>

              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder='Conte-nos sobre seu projeto'
                className='bg-transparent border hover:border-[#434343] border-[#2B2B2B] h-32 rounded-lg w-full px-3 focus:border-[#F19C1C] py-3 placeholder:text-[#707070] outline-none resize-none'
                style={{ overflowY: 'auto' }}
              />
            </div>

            <div className='mt-16 px-14'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Checkbox
                    checked={privacityPolicy}
                    onCheckedChange={() => setPrivacityPolicy(!privacityPolicy)}
                    className='size-4' />
                  <p className='text-[#909090] ml-3 text-base'>Li e aceito a <span className='text-[#F19C1C] cursor-pointer'>politica de privacidade</span></p>
                </div>

                <button
                  onClick={sendEmail}
                  className='w-40 h-14 bg-[#F19C1C] text-[#1F1F1F]'>
                  <p className='font-medium text-sm'>ENVIAR</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className='xs:block md:hidden'>
        <MobileHeader />
        <div className='w-full h-sreen flex flex-col pb-8 px-0 bg-[#121214]'>
          <div className='w-full mt-16 px-6'>
            <h1 className='mb-10'>Informações para contato</h1>
            <div className='w-full flex flex-col gap-6'>
              <Input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder='Seu nome' />
              <Input
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder='Seu e-mail' />
              <Input
                value={clientPhone}
                maxLength={15}
                onChange={(e) => {
                  const formattedPhone = formatPhone(e.target.value);
                  setClientPhone(formattedPhone);
                }}
                placeholder='Seu telefone'
              />
              <Input
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                placeholder='Sua empresa' />
            </div>
          </div>

          <div className='w-full px-6 mt-14 flex flex-col gap-8'>
            <div className='w-full'>
              <h1 className='mb-10'>Em qual etapa está o seu projeto</h1>
              <Select
                value={projectStage}
                onValueChange={
                  (value) => setProjectStage(value)
                }
              >
                <SelectTrigger
                >
                  <SelectValue
                    placeholder="Selecionar"
                  />
                  <SelectContent>
                    <SelectGroup>
                      {
                        projectTime.map((time, index) => (
                          <SelectItem
                            key={index}
                            value={time.label}
                            className='hover:bg-white/10 cursor-pointer p-2 rounded-lg transition-colors duration-100'
                          >
                            <p>{time.label}</p>
                          </SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>

            <div className='w-full'>
              <h1 className='mb-10'>Quanto tempo você tem para <br/> desenvolver?</h1>
              <Select
                value={projectDevelopmentTime}
                onValueChange={
                  (value) => setProjectDevelopmentTime(value)
                }
              >
                <SelectTrigger
                >
                  <SelectValue
                    placeholder="Selecionar"
                  />
                  <SelectContent>
                    <SelectGroup>
                      {
                        projectTime.map((time, index) => (
                          <SelectItem
                            key={index}
                            value={time.label}
                            className='hover:bg-white/10 cursor-pointer p-2 rounded-lg transition-colors duration-100'
                          >
                            <p>{time.label}</p>
                          </SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>

            <div>
              <h1 className='mb-10'>Descrição do projeto</h1>

              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder='Conte-nos sobre seu projeto'
                className='bg-transparent border hover:border-[#434343] border-[#2B2B2B] h-32 rounded-lg w-full px-3 focus:border-[#F19C1C] py-3 placeholder:text-[#707070] outline-none resize-none'
                style={{ overflowY: 'auto' }}
              />

              <div className='flex items-center mt-8'>
                <Checkbox
                  checked={privacityPolicy}
                  onCheckedChange={() => setPrivacityPolicy(!privacityPolicy)}
                  className='size-4' />
                <p className='text-[#909090] ml-3 text-sm'>Li e aceito a <span className='text-[#F19C1C] cursor-pointer'>politica de privacidade</span></p>
              </div>
              <button
                onClick={sendEmail}
                className='w-full h-16 bg-[#F19C1C] mt-14'>
                <p className='text-[#1F1F1F] font-medium text-xl'>ENVIAR</p>
              </button>
            </div>
          </div>
        </div>
        <MobileFooter />
      </div>
    </div>
  )
}

export default ContactForm;