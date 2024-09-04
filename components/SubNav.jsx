import { Sub, SubTrigger, Portal, SubContent } from '@radix-ui/react-dropdown-menu';
import NavItem from './NavItem';

const SubNav = ({name, list}) => {
    return (
        <Sub >
            <SubTrigger className=" z-auto group text-[13px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] px-[5px] relativeselect-none outline-none data-[state=open]:bg-violet-900 data-[state=open]:text-white data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
                {name}
                <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    -{`>`}
                </div>
            </SubTrigger>
            <Portal>
                <SubContent
                    className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={4}
                    alignOffset={-5}
                >
                    {list.map((item, index) => (
                        <NavItem key={index} item={item} />
                    ))}
                </SubContent>
            </Portal>
        </Sub>
    )
}

export default SubNav