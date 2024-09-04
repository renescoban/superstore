import React from 'react'

const Table = () => {
    return (
        <div className='container '>Table
            <div className='overflow-x-auto '>
                <table className=' bg-white text-left border m-1 '>
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Our products
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                        <input type="text" id="table-search" className="block p-2  text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                        
                        
                    </caption>

                    <thead className='border-b  bg-neutral-700 font-medium text-white'>
                        <tr className=''>
                            <th className="px-6 py-4 ">#</th>
                            <th className="px-6 py-4 ">First</th>
                            <th className="px-6 py-4 ">Last</th>
                            <th className="px-6 py-4 ">Handle</th>
                            <th className="px-6 py-4 ">PRICE</th>
                            <th className="px-6 py-4 ">CATEGORY</th>

                            <th className="px-6 py-4 ">PRODUCT NAME</th>
                            <th className="px-6 py-4 ">ACTION</th>

                        </tr>

                    </thead>
                    <tbody>
                        <tr className='border-b transition duration-300 ease-in-out hover:bg-neutral-100'>
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>

                            <td className="px-6 py-4 ">text1.1asD</td>
                            <td className="px-6 py-4 ">text1.2</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td className="px-6 py-4 "> <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></td>
                        </tr>
                        <tr className='border-b transition duration-300 ease-in-out hover:bg-neutral-100'>
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td className="px-6 py-4 ">text2.2</td>
                            <td className="px-6 py-4 ">text2.3</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="px-6 py-4 "> <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></td>
                        </tr>
                        <tr className='border-b transition duration-300 ease-in-out hover:bg-neutral-100'>
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center" colSpan="2">text3.2</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td className="px-6 py-4 "> <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4" className='text-right px-6 py-4'>Total Price</th>
                            <td colSpan="4">444</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Table