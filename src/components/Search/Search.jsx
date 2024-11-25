import React from "react"
import { formatDate } from "../../helpers/formatDate"
import s from './styles.module.css'

const Search = ({keywords, setKeyWords}) => {
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