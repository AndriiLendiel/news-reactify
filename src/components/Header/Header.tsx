import React from "react"
import { formatDate } from "../../helpers/formatDate"
import s from './styles.module.css'

const Header = () => {
  return (
      <header className={s.header}>
          <h1 className={s.title}>NEWS REACTIFY</h1>
          <p className={s.date}>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header