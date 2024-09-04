'use server'
 
import { revalidateTag } from 'next/cache'

export default async function page() {
    const data = await getData()
    
    revalidateTag('collection')

  return (
    <div>page</div>
  )
}

async function getData() {
    const res = await fetch('https://...', { next: { tags: ['collection'] } })
    const data = await res.json()
}
