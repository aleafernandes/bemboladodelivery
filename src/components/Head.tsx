import Image from 'next/image'
import Link from 'next/link'

export default function Head() {
  return (
    <header className="container flex flex-col items-center justify-around pt-20 md:flex-row">
      <div className="self-start">
        <h1 className="text-4xl font-extrabold text-amber-800">
          Que tal um lanche Bem Bolado?
        </h1>
        <p className="font-semibold uppercase">
          <button className=" rounded-2xl  bg-[#820000] p-3 font-medium text-white">
            <Link href="/pedidos">Faça já o seu pedido</Link>
          </button>
        </p>
      </div>
      <div>
        <Image
          src="/assets/foto-banner1.png"
          alt="banner primeira promo"
          width={600}
          height={600}
        />
      </div>
    </header>
  )
}
