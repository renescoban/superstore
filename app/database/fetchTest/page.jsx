import React, { Suspense } from 'react'

export default async function page() {
    const data = await getData()

    return (
        <div className='flex'>

            <Suspense fallback={<div>Loading...</div>}>
                <pre  className=''>
                    <code className='flex-wrap break-normal overflow-hidden '>
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
                
                <Playlists />

            </Suspense>
        </div>
    )
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    // Wrap setTimeout in a promise to delay the return of data
    const delayedResponse = new Promise(resolve => {
        setTimeout(() => {
            resolve(res.json());
        }, 300);
    });

    return delayedResponse;


}

async function Playlists({ artistID = 0 }) {
    // Wait for the playlists
    const data = await getData()

    return (
        <ul>
            {data.map((playlist) => (
                <li key={playlist.id}> {playlist.title}</li>
            ))}
        </ul>
    )
}