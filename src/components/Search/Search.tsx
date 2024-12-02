import React from "react"
import s from './styles.module.css'

interface Props {
  keywords: string,
  setKeyWords:(keywords: string)=> void
}


const Search = ({keywords, setKeyWords}:Props) => {
  return (
    <div className={s.search}>
      <input type="text" value={keywords}
        className={s.input}
      onChange={(e)=>setKeyWords(e.target.value)}
placeholder="search keywords"
      />
</div>
  )
}

export default Search