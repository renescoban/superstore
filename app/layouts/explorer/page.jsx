import Image from "next/image"
import Link from "next/link"
import pic1 from "@public/assets/images/explorer/1.png"

async function page() {

  const data = await getAllChamps()
  const Champions = data.data

  return (
    <div className='flex flex-col w-full'>
      <div>
        Alld thee
      </div>
      <div className="flex flex-col bg-white">
        <nav>

        </nav>
        <main className="grid items-start grid-cols-[repeat(auto-fill,minmax(180px,1fr))] p-2 gap-4">

          {Object.values(Champions).map((champ, i) => (
            <CharCard key={i} name={champ.name} title={champ.title} sprite={champ.id} />
          ))
          }

        </main>
      </div>
    </div>
  )
}

function CharCard({ name, title, sprite }) {
  return (
    <div className="shadow-sm shadow-black">
      <Link href="#" className="explorer_link_1"><Image src={`https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/${sprite}.png`} alt="name" width={40} height={40} />
        <div className="">
          <span className="block font-semibold leading-">{name}</span>
          <span className="line-clamp-1 text-xs leading-3">{title}</span>
        </div>

      </Link >
    </div>
  )
}

async function getAllChamps() {
  const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/champion.json')

  return res.json()
}




export default page

