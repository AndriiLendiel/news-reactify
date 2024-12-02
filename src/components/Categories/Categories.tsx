import React, { ForwardedRef, forwardRef } from "react"
import s from './styles.module.css'



interface Props {
  categories: string[];
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null

}

const Categories = forwardRef(({ categories, setSelectedCategory,
  selectedCategory }:Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={s.categories}>
    <button onClick={()=>setSelectedCategory(null)}
    className={!selectedCategory ? s.active : s.item}
    >All</button>
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
})

export default Categories