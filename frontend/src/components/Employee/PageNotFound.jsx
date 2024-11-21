import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';
function PageNotFound() {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className="text-6xl font-bold mb-4">404 Not found...</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to='/accounts'
        className='text-indigo-500 hover:text-indigo-700 flex items-center'>
          <FaArrowLeft className='mr-2'/>Back to accounts
        </Link>
    </section>
  )
}

export default PageNotFound;
