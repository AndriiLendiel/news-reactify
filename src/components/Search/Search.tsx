import React from "react"
import s from './styles.module.css'
import { useTheme } from "../../context/ThemeContext"

interface Props {
  keywords: string,
  setKeyWords: (keywords: string) => void

}


const Search = ({ keywords, setKeyWords }: Props) => {
  const {isDark} = useTheme()
  return (
    <div className={ `${s.search} ${isDark? s.dark: s.light}`}>
      <input type="text" value={keywords}
        className={s.input}
      onChange={(e)=>setKeyWords(e.target.value)}
placeholder="search keywords"
      />
</div>
  )
}

export default Search