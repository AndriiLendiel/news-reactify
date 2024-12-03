import React from "react"
import { useRef } from "react"
import s from './styles.module.css'


interface Props{
  children: React.ReactElement,
  step?: number
  isDark:boolean
}



const Slider = ({ children, step = 150, isDark }:Props) => {
  
const sliderRef = useRef<HTMLElement | null>(null)

  
  const scrollLeft = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft -= step
  }

  const scrollRight = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft += step
  }
  return (
    <div className={ `${s.slider} ${isDark? s.dark: s.light}`}>
      <button onClick={scrollLeft}  className={s.arrow}>{`<`}</button>
{React.cloneElement(children, {ref: sliderRef})}
      <button onClick={scrollRight} className={s.arrow}>{`>`}</button>
</div>
  )
}

export default Slider