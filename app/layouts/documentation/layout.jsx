import React from 'react'

export default function Layout({ children }) {
  return (
    <div className='container flex gap-3   '>
      <div className=' w-[284px] shrink-0 border-r-black border-r-2    '>
        <div className='flex flex-col p-1 gap-2 sticky top-12 '>
          <nav className='h-[85vh] overflow-y-scroll styled-scrollbar relative  p-2 flex flex-col gap-3  pb-4 '>
            <ul className='leading-none space-y-2'>
              <h5>Head 1</h5>
              <li>li 1.1</li>
              <li>li 1.2 Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <ul>Head 2
              <li>li 2.1</li>
              <li>li 2.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
            <ul>Head 3
              <li>li 3.1</li>
              <li>li 3.2</li>
            </ul>
          </nav>
        </div>
      </div>
      <article className=' w-full max-w-6xl my-4 px-1 md:px-6 '>
        {children}
      </article>
    </div>
  )
}

