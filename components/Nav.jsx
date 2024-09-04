'use client'

import Link from 'next/link'
import NavItem from './NavItem';
import SubNav from './SubNav';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


const Nav = () => {

    const ItemAPIs = [
        {
            href: "/sm/weather",
            title: "Weather",
        }, {
            href: "/fetchTest",
            title: "Mock",
        },{
            href: "/database/awq",
            title: "awq",
        },{
            href: "/database/notes",
            title: "notes",
        },{
            href: "/database/todo-a",
            title: "todo",
        },
    ]
    const Gpt = [
        {
            href: "/list/duel",
            title: "Duel.",
        }, {
            href: "/list/filterlist",
            title: "Filter",
        }, {
            href: "/list/listpag",
            title: "List wpag.",
        }, {
            href: "/list/notes",
            title: "Notes",
        }, {
            href: "/list/order",
            title: "Order",
        }, {
            href: "/list/things",
            title: "Thing.",
        }, {
            href: "/list/todolist",
            title: "To do List",
        }
    ]
    const Layouts = [
        {
            href: "/layouts/chat-1",
            title: "Chat 1",
        },
        {
            href: "/layouts/chat-2",
            title: "Chat 2",
        }, {
            href: "/layouts/mylinks",
            title: "Links",
        },
        {
            href: "/layouts/manhgalist",
            title: "Manhga",
        },
        {
            href: "/layouts/explorer",
            title: "Champ L.",
        },
        {
            href: "/layouts/documentation",
            title: "Documentation",
        },
        {
            href: "/layouts/port-1",
            title: "Port-1",
        },

    ]
    const Components = [
        {
            href: "/sm/component-1",
            title: "Components",
        }, {
            href: "/sm/counter",
            title: "Counter",
        }, {
            href: "/sm/rdm/part-1",
            title: "Rand Part-1",
        }, {
            href: "/sm/rdm/part-2",
            title: "Rand Part-2",
        }, {
            href: "/sm/quote",
            title: "Quote",
        }, {
            href: "/sm/js-test",
            title: "js-test",
        }, {
            href: "/sm/animation-1",
            title: "Animation 1",
        },
    ]
    const Games = [
        {
            href: "/minigame",
            title: "Health",
        },
        {
            href: "/minigame/buy",
            title: "Buy",
        },
        {
            href: "/minigame/bet",
            title: "Bet",
        },
        {
            href: "/minigame/drum",
            title: "Drum",
        },
        {
            href: "/minigame/gacha",
            title: "Gacha",
        },
    ]


    return (
        <nav className='flex justify-between items-center w-full h-12 py-2 z-50'>
            <div className='ml-2'>
                <Link href="/" className='hover:bg-slate-300 px-2 py-1 rounded'>Home</Link>
            </div>
            <div className='flex gap-5'>
                <DropdownMenu.Root className="z-50 flex">
                    <DropdownMenu.Trigger asChild>
                        <button
                            className="rounded  inline-flex items-center justify-center border-slate-400  px-2 py-1 outline-none hover:bg-slate-300 focus:shadow-[0_0_0_2px] focus:shadow-black" aria-label="Customise options">
                            Open</button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal className='z-20'>
                        <DropdownMenu.Content className="z-50 min-w-[220px] bg-white p-[5px] rounded-md border shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" sideOffset={5}>

                            {ItemAPIs.map((item, index) => (
                                <NavItem key={index} item={item} />
                            ))}

                            <SubNav name="Components T" list={Components} />
                            <SubNav name="Layouts" list={Layouts} />
                            <SubNav name="GPT" list={Gpt} />
                            <SubNav name="Games" list={Games} />

                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>

                <Link href="/tictac" className='flex gap-2 items-center hover:bg-slate-300 px-2 rounded'>
                    <p className=''>TicToc</p>
                </Link>

            </div>

            <div className='flex mr-2 items-center'>

                <Link href={"/layouts/documentation"} className='hover:bg-slate-300 px-2 py-1 rounded'>Docs</Link>

                <button className='flex px-2 ' ><span className='pl-1 '>last</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

            </div>
        </nav>







    )
}

export default Nav