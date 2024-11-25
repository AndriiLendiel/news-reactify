import React from "react"
import s from './styles.module.css'

const Categories = ({ categories, setSelectedCategory, selectedCategory}) => {
  return (
    <div className={s.categories}>
      {categories.map(el => {
        return (
          <button onClick={()=>setSelectedCategory(el)}
            className={selectedCategory === el ? s.active : s.item}
            key={el}
          >{el}</button>
        )
      })}
</div>
  )
}

export default Categories