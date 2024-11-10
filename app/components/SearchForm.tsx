'use client'
import React from 'react'
import SearchReset from '@/app/components/SearchReset'
import Form from 'next/form'
const SearchForm = ( { query }: { query?:string } ) => {
    return (
    <Form action="/" scroll={false} className='search-form'>
        <input type="text"
            name='query'
            defaultValue={query}
            className='search-input'
            placeholder='Search Startup'
        />

        <div className='flex gap-2'>
            { query && <SearchReset /> }
        </div>

        <button className='text-white search-btn'>
            S
        </button>
    </Form>
  )
}

export default SearchForm