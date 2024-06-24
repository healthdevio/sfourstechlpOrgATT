import Image from "next/image";
import Link from "next/link";
import footerLogoImage from "@/../public/logo-footer.svg"
import iconSocialImageFb from "@/../public/fb-icon.svg"
import iconSocialImageIg from "@/../public/ig-icon.svg"
import iconSocialImageBe from "@/../public/be-icon.svg"
import iconSocialImageIn from "@/../public/in-icon.svg"
import { ColumnFooter } from "./ColumnFooter";

export default function Footer() {
  return (
    <footer className="flex w-full px-[13rem] py-24 bg-blue-[#0A0A0B] text-[#A8A8B3] mt-auto gap-10">
      <div className="flex w-1/4 flex-col gap-8">
        <div className="flex gap-6">
          <Image
            src={footerLogoImage}
            alt="Logo da empresa S4S"
          />
          <div className="font-medium text-base">
            Startup para <br />
            Startups
          </div>
        </div>
        <div className="">
          s4S 2020 <br />
          Todos os direitos reservados
        </div>
        <div className="flex gap-6">
          <Link
            href={'#'}
          >
            <Image
              src={iconSocialImageFb}
              alt="Link para a rede social Facebook"
            />
          </Link>
          <Link
            href={'#'}
          >
            <Image
              src={iconSocialImageIn}
              alt="Link para a rede social Linkedin"
            />
          </Link>
          <Link
            href={'#'}
          >
            <Image
              src={iconSocialImageIg}
              alt="Link para a rede social Instagram"
            />
          </Link>
          <Link
            href={'#'}
          >
            <Image
              src={iconSocialImageBe}
              alt="Link para a rede social Behance"
            />
          </Link>
        </div>
      </div>

      <ColumnFooter
        title="Sobre"
        linksArray={[
          {
            label: "Startup para Statups",
            link: "#",
          },
          {
            label: "O que fazemos",
            link: "#",
          },
          {
            label: "Cases",
            link: "#",
          },
          {
            label: "Quem somos",
            link: "#",
          },
        ]}
      />

      <ColumnFooter
        title="Acessoria"
        linksArray={[
          {
            label: "E-mail: contato@healthdev.io",
            link: "#",
          },
        ]}
      />

      <ColumnFooter
        title="Telefone/WhastAPP"
        linksArray={[
          {
            label: "+55 85 99954-7116",
            link: "#",
          },
        ]}
      />

      <ColumnFooter
        title="Endereço"
        linksArray={[
          {
            label: "Avenida Dom Luís, 176, Mezanino - Aldeota",
            link: "#",
          },
        ]}
      />

      {/* <p>© 2024 S4STECHLP. Todos os direitos reservados.</p> */}
    </footer>
  );
}
