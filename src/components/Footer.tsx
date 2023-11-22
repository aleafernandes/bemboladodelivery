import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="h-[11rem] bg-gradient-to-br from-[#18181B] to-[#27272A]">
      <div className="flex h-full flex-col items-center justify-center gap-6">
        <Image
          className="pointer-events-none"
          src="/assets/logo-icone.svg"
          width={80}
          height={80}
          alt="apenas icone da logo"
        />
        <span className="uppercase md:text-base">
          Bem Bolado Burguer - CNPJ: 000.000.000/0001-00
        </span>
      </div>
    </footer>
  )
}
