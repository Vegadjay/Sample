import React from 'react'

const SearchReset = () => {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement

        if(form) form.reset();
    }
  return (
    <button type='reset' onClick={reset}>
        X
    </button>
  )
}

export default SearchReset