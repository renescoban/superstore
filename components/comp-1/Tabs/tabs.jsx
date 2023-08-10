'use client'

import * as Tabs from '@radix-ui/react-tabs';


const TabsAct = () => {
  return (
    <div className='mx-2 py-10 border'>
      <Tabs.Root className='w-[300px] gap-1 ' defaultValue="tab1">
        <Tabs.List className='flex shrink-0 mb-2 bg-[#f4f4f5] rounded-lg  p-1' aria-label="Manage your account">
          <Tabs.Trigger className='tabs_trigger' value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger className='tabs_trigger' value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger className='tabs_trigger' value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className='tabs_content' value="tab1">CONTENT 1 lorem</Tabs.Content>
        <Tabs.Content className='tabs_content' value="tab2">CONTENT 2</Tabs.Content>
        <Tabs.Content className='tabs_content' value="tab3">CONTENT 3</Tabs.Content>

      </Tabs.Root>
    </div>
  )
}

export default TabsAct