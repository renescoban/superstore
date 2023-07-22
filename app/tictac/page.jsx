import Board from '@components/Board'
import Square from '@components/Square'


const page = () => {



    
    return (
        <>
            <div className="bg-yellow-200 p-3  flex flex-col gap-3 text-center">
                <Board />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </>
    )
}

export default page