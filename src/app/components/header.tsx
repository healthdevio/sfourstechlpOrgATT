import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 bg-blue-600 text-white flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="w-20 h-8 mr-4" />
      </div>
      <nav className="flex gap-4">
        <Link href="/inicio" legacyBehavior>
          <a className="hover:text-gray-300">Inicio</a>
        </Link>
        <Link href="/quem-somos" legacyBehavior>
          <a className="hover:text-gray-300">Quem Somos</a>
        </Link>
        <Link href="/cases" legacyBehavior>
          <a className="hover:text-gray-300">Cases</a>
        </Link>
        <Link href="/servicos" legacyBehavior>
          <a className="hover:text-gray-300">Serviços</a>
        </Link>
        <Link href="/workflow" legacyBehavior>
          <a className="hover:text-gray-300">Workflow</a>
        </Link>
      </nav>
      <Link href="/iniciar-projeto" legacyBehavior>
        <a className="bg-[#E19322] text-white rounded-full" style={{ borderRadius: '100px', padding: '8px 24px', gap: '10px' }}>
          Iniciar Projeto
        </a>
      </Link>
    </header>
  );
}
