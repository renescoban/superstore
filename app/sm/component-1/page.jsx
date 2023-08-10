'use client'
import Dialogs from '@/components/comp-1/Dialog/Dialog'
import TabsAct from '@components/comp-1/Tabs/tabs'

const page = () => {
  return (
    <div className='w-full flex bg-slate-50'>
    <Dialogs />
    <TabsAct />
    </div>
  )
}

export default page