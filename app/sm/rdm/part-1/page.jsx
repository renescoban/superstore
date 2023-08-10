import HoverImg from 'components/rdm/hoverImg.jsx'
import StickyList from 'components/rdm/stickyList.jsx'
import MagicCard from '@components/rdm/magicCard'
import Squares from '@components/rdm/squares'

const page = () => {
  return (<>
    <div className='container -z-10 grid grid-cols-2 bg-slate-100 divide-x md:grid-cols-3 items-center justify-items-center space-x-6 gap-y-6 py-6 '>
    <HoverImg />
    <StickyList />
    <MagicCard />
    <Squares />

    </div>
    </>
  )
}

export default page