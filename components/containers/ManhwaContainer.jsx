import Image from "next/image"
import manhwaImage from "../../public/assets/images/manhwa/04.png"
import manhwaJsonSS from "/data/manhwas.json"
import { promises as fs } from 'fs';


export default async function ManhwaContainer() {

    const file = await fs.readFile(process.cwd() + '/data/manhwas.json', 'utf8');
    const data = JSON.parse(file);
    console.log(data.title);
    console.log(manhwaJsonSS.chapters[0].number);

    const chapterLists = manhwaJsonSS.chapters.map((chapter) => chapter.number);
    console.log(chapterLists);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 bg">

            <div className="">
                <div>
                    <Image src={data.href} width={175}  height={260} className="rounded"/>
                </div>
                <div className=" px-1 py-4">
                    <h4 className="break-words font-bold text-xl mb-2"> {data.title} </h4>
                    <div className=" mb-2">{data.rating} STARS</div>
                    <div className="mb-2 text-sm">
                        <span className="p-1"><a className=" px-1 bg-slate-200 rounded-lg hover:bg-emerald-300" href="">Chapter {chapterLists.at(-1)}</a></span>
                        <span className=""> {manhwaJsonSS.chapters[manhwaJsonSS.chapters.length - 1].date} </span>
                    </div>
                    <div className="mb-2 text-sm">
                        <span className="p-1"><a className=" px-1 bg-slate-200 rounded-lg hover:bg-emerald-300" href="">Chapter {chapterLists.at(-2)}</a></span>
                        <span className="">9 Jan 2024</span>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <Image src={manhwaImage} width={175} />
                </div>
                <div className=" px-1 py-4">
                    <h4 className="break-words font-bold text-xl mb-2">loreasdAgedaodĞOnadfoıaoıdf</h4>
                    <div className=" mb-2">STARS</div>
                    <div className="mb-2 text-sm">
                        <span className="p-1"><a className=" px-1 bg-slate-200 rounded-lg hover:bg-emerald-300" href="">Chapter </a></span>
                        <span className="">9 Jan 2024</span>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <Image src={manhwaImage} width={175} />
                </div>
                <div className=" px-1 py-4">
                    <h4 className="break-words font-bold text-xl mb-2">loreasdAgedaodĞOnadfoıaoıdf</h4>
                    <div className=" mb-2">STARS</div>
                    <div className=" mb-2 text-sm ">
                        <span className="p-1"><a className=" px-1 bg-slate-200 rounded-lg hover:bg-emerald-300" href="">Chapter 1</a></span>
                        <span className="">9 Jan 2024</span>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <Image src={manhwaImage} width={175} />
                </div>
                <div className=" px-1 py-4">
                    <h4 className="break-words font-bold text-xl mb-2">loreasdAgedaodĞOnadfoıaoıdf</h4>
                    <div className=" mb-2">STARS</div>
                    <div className=" mb-2 text-sm">
                        <span className="p-1"><a className=" px-1 bg-slate-200 rounded-lg hover:bg-emerald-300" href="">Chapter 1</a></span>
                        <span className="">9 Jan 2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
