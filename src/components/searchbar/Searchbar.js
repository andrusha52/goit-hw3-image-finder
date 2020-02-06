import React from 'react'
import css from "./../../style.module.css"

const Searchbar = (props) => {
    return(
        <>
        <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={props.searchValue}>
    <button type="submit" className={css.SearchForm_button}>
      <span className={css.SearchForm_button_label}>Search</span>
    </button>
    <input onChange={props.inputOnChange}  className={css.SearchForm_input} type="text" placeholder="Search images and photos"
    />
  </form>
</header>
        </>
    )

}
    


export default Searchbar;