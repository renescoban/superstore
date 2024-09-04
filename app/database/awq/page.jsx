import React from 'react'

export default function page() {
    return (
        <div>

            <form action="" className=' grid grid-cols-2 gap-4 divide-x-2'>
                <div className='flex items-center bg-slate-200 gap-3 divide-x-2'>

                    <label className='p-2' htmlFor="get"><input type="radio" name='crud' id='get' /> Get </label>
                    <label className='p-2' htmlFor="post"><input type="radio" name='crud' id='post' /> Post </label>
                    <label className='p-2' htmlFor="put"><input type="radio" name='crud' id='put' />Put</label>
                    <label className='p-2' htmlFor="delete"><input type="radio" name='crud' id='delete' />Delete</label>
                </div>

                <div className='grid grid-cols-2'>
                    <div>
                        <label className='block' htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='name...' />

                        <label className='block' htmlFor="lastname">Last Name</label>
                        <input type="text" id='lastname' placeholder='last name...' />
                    </div>
                    <div className='flex justify-center gap-4'>
                        <label className='block' htmlFor="fm">fm<input type="radio" id='fm' name='ex' /></label>
                        <label className='block' htmlFor="m">m<input type="radio" id='m' name='ex' /></label>
                    </div>
                    <div className='col-span-2  p-1 bg-slate-300'>
                        <textarea className='w-full p-3' name="blog" id="" rows={5} ></textarea>
                    </div>
                </div>

            </form>

            <div id='result-container'>

            </div>

        </div>
    )
}
