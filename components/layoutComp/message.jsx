import Image from "next/image"
import pp from '@public/assets/proPic/00096-3722249431.png'

const MessageBox = ({ content, user }) => {
    // messageBoxStyle ={
    // }
    // messageBoxUserStyle ={
    // }


    return (

        <div className={!user ?
            "flex px-1 py-2 items-center "
            :
            "flex flex-row-reverse px-1 py-2 items-center text-right "
        }  >

            <Image src={pp} className="w-9 h-9 rounded-full" />

            <div className="leading-none mx-2">
              <p className="font-mono text-slate-800 p-1">  anon </p>
              <p className={!user ?
            "bg-slate-100  mr-10 py-1 px-2 rounded-md drop-shadow-md max-w-xl "           
            :
            "bg-[#D3BC99] ml-10 py-1 px-2 rounded-md drop-shadow-md max-w-xl text-left" 
        }>  {content} </p>
            </div>
        </div>
    )
}

export default MessageBox