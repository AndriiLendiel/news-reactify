import React, { useContext } from "react"
import { formatDate } from "../../helpers/formatDate"
import s from './styles.module.css'
import { themeIcons } from "../../../dist/assets/theme"
import { useTheme } from "../../context/ThemeContext"





const Header = () => {
  const {isDark, toggleTheme} = useTheme()
  return (
    <header className={`${s.header} ${isDark ? s.dark : s.light}`}>
      <div className={s.info}>
          <h1 className={s.title}>NEWS REACTIFY</h1>
          <p className={s.date}>{formatDate(new Date())}</p>
      </div>
      <img src={isDark ? themeIcons.light : themeIcons.dark}
        width={30} alt='theme' onClick={toggleTheme} />

    </header>
  )
}

export default Header