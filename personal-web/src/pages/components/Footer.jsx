import React from 'react'

 const Footer = () => {
  return (
    <>
        <footer className='pt-10 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-900'>
            <div className='flex flex-col text-center text-2xl md:text-3xl font-mono gap-y-5 border-t mx-5'>
            <a href="#" className='p-2 hover:bg-slate-200 rounded-md'>Facebook</a>
            <a href="#" className='p-2 hover:bg-slate-200 rounded-md'>Instagram</a>
            <a href="#" className='p-2 hover:bg-slate-200 rounded-md'>LinkedIn</a>
            <a href="#" className='p-2 hover:bg-slate-200 rounded-md'>Github</a>
            </div>
            <div className='text-center font-mono gap-y-5 border-t pt-2'>
                <h1>Copyright © 2024 - Renz Aljon Cruz</h1>
            </div>
        </footer>
    </>
  )
}
export default Footer