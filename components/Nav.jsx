'use client'

import Link from 'next/link'
import NavItem from './NavItem';
import SubNav from './SubNav';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


const Nav = () => {

    const Simple = [
        {
            href: "/sm/animation-1",
            title: "Animation 1",
        },



        {
            href: "/list/order",
            title: "Table & List",
        },

        {
            href: "/sm/js-test",
            title: "js-test",
        },

        {
            href: "/sm/weather",
            title: "Weather api..",
        },

    ]
    const ItemAPIs = [
        {
            href: "/sm/weather",
            title: "Weather",
        },
    ]
    const Gpt = [
        {
            href: "/list/listpag",
            title: "List wpag.",
        },
        {
            href: "/list/todolist",
            title: "To do List",
        },
        {
            href: "/list/notes",
            title: "Notes",
        }
    ]
    const Layouts = [
        {
            href: "/sm/chat-1",
            title: "Chat..",
        }, {
            href: "/sm/blog-1",
            title: "Blog..",
        },
    ]
    const Components = [
        {
            href: "/sm/component-1",
            title: "Components",
        },
        {
            href: "/sm/counter",
            title: "Counter",
        }, {
            href: "/sm/rdm/part-1",
            title: "Rand Part-1",
        }, {
            href: "/sm/quote",
            title: "Quote",
        },
    ]


    return (
        <nav className='flex justify-between items-center w-full pb-2 pt-2 z-50'>
            <div className='ml-2'>
                <a href="/" className='px-2'>Home</a>
            </div>
            <div className='flex gap-5'>
                <DropdownMenu.Root className="z-50 flex">
                    <DropdownMenu.Trigger asChild>
                        <button
                            className="rounded  inline-flex items-center justify-center border-slate-400  px-2  outline-none hover:bg-slate-300 focus:shadow-[0_0_0_2px] focus:shadow-black" aria-label="Customise options">Open</button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal className='z-20'>
                        <DropdownMenu.Content className="z-50 min-w-[220px] bg-white p-[5px] rounded-md border shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" sideOffset={5}>
                            
                            <DropdownMenu.Item className="group text-[14px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-600 data-[highlighted]:text-white">
                                New Game{' '}
                                <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                    ⌘+T</div>
                            </DropdownMenu.Item>

                            {Simple.map((item, index) => (
                                <NavItem key={index} item={item} />
                            ))}

                            <SubNav name="Components T"  list={Components} />
                            <SubNav name="Layouts"  list={Layouts} />
                            <SubNav name="GPT"  list={Gpt} />                        

                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>

                <Link href="/tictac" className='flex gap-2 flex-center hover:bg-slate-300 px-2 rounded'>
                    <p className=''>TicToc</p>
                </Link>

                <DropdownMenu.Root className=" flex">
                    <DropdownMenu.Trigger asChild>
                        <button className="IconButton"
                            aria-label="Customise options">Game</button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" sideOffset={5}>
                            <DropdownMenu.Item className="DropdownMenuItem">
                                New Tab <div className="RightSlot">⌘+T</div>
                            </DropdownMenu.Item>

                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>

            <div className='flex mr-2'>

                <Link href={"/documantation"}>Docs</Link>

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