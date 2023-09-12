import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-2 bg-black w-full h-60 text-white justify-center items-center">
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
