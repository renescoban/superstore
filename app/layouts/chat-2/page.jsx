import MessageBox from "@components/layoutComp/message"
import SideRight from "@components/layoutComp/SideRight"
import SideLeft from "@components/layoutComp/SideLeft"

const page = () => {
    const messages = [
        { mess: "Oh! Really", },
        { mess: "you dont believe me?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo incidunt qui tempore!", user: true },
        { mess: "Lorem ipsum dolor sit amet." },
        { mess: "Loremas  asdd kenaret.", user:"asd" },
    ]
    let mess = "Oh! Really"
    let mess2 = "you dont believe me?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo incidunt qui tempore!"
    let mess3 = "Lorem ipsum dolor sit amet."


    return (
        <div className='pt-3 mt-3 w-full flex'>

            <SideLeft />

            <div className='mr-2 min-w-[340px] w-full border shadow rounded-md'>
                <div className='chatBox p-2 min-h-[350px] '>
                    <header> XXX Vhat</header>
                    <div className="pt-2">
                        {messages.map((message) =>
                            <MessageBox content={message.mess} user={message.user} />)}
                    </div>
                    </div>

                    <div className="border-t-2 flex p-2 justify-center">
                        <input type="text" className="w-1/2 py-1 shadow" />
                    </div>
                

            </div>

            <SideRight />

        </div>
    )
}

export default page