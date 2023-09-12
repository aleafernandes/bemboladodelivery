import Image from 'next/image'
import Link from 'next/link'

export default function Head() {
  return (
    <header className="flex justify-around pt-20 items-center container">
      <div className="self-start">
        <h1 className="text-4xl font-extrabold text-amber-800">
          Que tal um lanche Bem Bolado?
        </h1>
        <p className="font-semibold uppercase">
          <button className=" p-3  bg-[#820000] rounded-2xl text-white font-medium">
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
