import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex h-60 w-full flex-col items-center justify-center gap-y-2 bg-black text-white">
      <div>
        <Image
          src="/assets/logo-icone.svg"
          width={80}
          height={80}
          alt="apenas icone da logo"
        />
      </div>
      <div>
        <p>Bem Bolado Burguer - CNPJ: 000.000.000/0001-00</p>
      </div>
    </footer>
  )
}
