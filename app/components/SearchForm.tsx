import React from 'react'
import SearchReset from '@/app/components/SearchReset'

const SearchForm = () => {
    const query = ""


    return (
    <form action="/" className='search-form'>
        <input type="text"
        name='query'
        defaultValue={""}
        className='search-input'
        placeholder='Search Startup'
        />

        <div className='flex gap-2'>
            { query && <SearchReset /> }
        </div>
    </form>
  )
}

export default SearchForm