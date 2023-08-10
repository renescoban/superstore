import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link'

const NavItem = ({ item={href:"", title: "Fail"} }) => {

    const itemD =item

    
    return (
        <DropdownMenu.Item className="group text-[14px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-600 data-[highlighted]:text-white">
            <Link href={itemD.href} className='block w-full'><p className='block'>{itemD.title}</p></Link>
        </DropdownMenu.Item>
    )
}

export default NavItem