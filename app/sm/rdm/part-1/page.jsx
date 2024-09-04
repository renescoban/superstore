import HoverImg from '@components/rdm/hoverImg.jsx'
import StickyList from '@components/rdm/stickyList.jsx'

import Squares from '@components/rdm/squares'
 
export const metadata= {
  title: 'rndm',
  description: 'random components',
}

const page = () => {
  return (<>
    <div className='container -z-10 grid grid-cols-2 bg-slate-100 divide-x md:grid-cols-3 items-center justify-items-center space-x-6 gap-y-6 py-6 '>
      <HoverImg />
      <CardEffect />
      <CardDot />
      <StickyList />
      <MagicCard />
      <Squares />
    </div>
  </>
  )
}

export default page


function CardEffect() {

  return (
    <div className="screen">
      <div className="screen-image"></div>
      <div className="screen-overlay"></div>
    </div>
  )
}

function MagicCard() {
  return (
    <div class="magic-card ">
        Magic Card
    </div>
)
}

function CardDot() {

  return (
    <div class="card">
      <div class="card-content">
        <h3 class="card-title">I know exactly what I'm doing</h3>
        <h4 class="card-subtitle">sss</h4>
      </div>
      <i class="card-icon"></i>
    </div>
  )
}

