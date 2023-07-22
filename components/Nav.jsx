'use client'

import Link from 'next/link'
import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';



const Nav = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');


    return (
        <nav className='flex justify-between items-center w-full mb-16 pt-3 z-50'>
            <div>
            <a href="/"><button>Home</button></a>
            </div>
            <div className='flex gap-5'>
                <DropdownMenu.Root className="z-50 flex">
                    <DropdownMenu.Trigger asChild>
                        <button 
                        className="rounded  inline-flex items-center justify-center border-slate-400  px-2  outline-none hover:bg-slate-300 focus:shadow-[0_0_0_2px] focus:shadow-black"aria-label="Customise options">Open</button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal className=''>
                        <DropdownMenu.Content      className="z-50 min-w-[220px] bg-white p-[5px] rounded-md border shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" sideOffset={5}>
                            <DropdownMenu.Item className="group text-[14px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-600 data-[highlighted]:text-white">
                                New Game{' '}
                                <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                    ⌘+T</div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="group text-[14px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-600 data-[highlighted]:text-white">
                                maybee
                            </DropdownMenu.Item>
                            <DropdownMenu.Item  className="group text-[14px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-600 data-[highlighted]:text-white">
                                <Link href="/sm/quote" className='block w-full'><p className='block'>Random Quote</p></Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item  className="group text-[14px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-600 data-[highlighted]:text-white">
                                <Link href="/sm/counter" className='block w-full'><p className='block'>Counter</p></Link>
                            </DropdownMenu.Item>
                            

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

            <div>
                <button>last</button>
            </div>
        </nav>






        // <nav className='flex-between w-full mb-16 pt-3' >
        //     <div className="left">

        //     </div>
        //     <div className="mid">
        //       {/* Profile dropdown */}
        //       <Menu as="div" className="relative ml-3">
        //               <div>
        //                 <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        //                   <span className="sr-only">Open user menu</span>
        //                   <img
        //                     className="h-8 w-8 rounded-full"
        //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        //                     alt=""
        //                   />
        //                 </Menu.Button>
        //               </div>
        //               <Transition
        //                 as={Fragment}
        //                 enter="transition ease-out duration-100"
        //                 enterFrom="transform opacity-0 scale-95"
        //                 enterTo="transform opacity-100 scale-100"
        //                 leave="transition ease-in duration-75"
        //                 leaveFrom="transform opacity-100 scale-100"
        //                 leaveTo="transform opacity-0 scale-95"
        //               >
        //                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        //                   <Menu.Item>
        //                     {({ active }) => (
        //                       <a
        //                         href="#"
        //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
        //                       >
        //                         Your Profile
        //                       </a>
        //                     )}
        //                   </Menu.Item>
        //                   <Menu.Item>
        //                     {({ active }) => (
        //                       <a
        //                         href="#"
        //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
        //                       >
        //                         Settings
        //                       </a>
        //                     )}
        //                   </Menu.Item>
        //                   <Menu.Item>
        //                     {({ active }) => (
        //                       <a
        //                         href="#"
        //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
        //                       >
        //                         Sign out
        //                       </a>
        //                     )}
        //                   </Menu.Item>
        //                 </Menu.Items>
        //               </Transition>
        //             </Menu>
        //     </div>
        //     <div className="right">

        //     </div>

        // </nav>
    )
}

export default Nav