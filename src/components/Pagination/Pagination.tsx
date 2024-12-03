import React from "react"
import s from './styles.module.css'
import { IPaginationProps } from "../../interfaces"
import { useTheme } from "../../context/ThemeContext"




const Pagination = ({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  const {isDark} = useTheme()
  return (
    <div className={ `${s.pagination} ${isDark? s.dark: s.light}`}>
      <button className={s.arrow}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >{'<'}</button>
      <div className={s.list}>{[...Array(totalPages)].map((_, index) => {
        return <button className={s.pageNumber} key={index}
          onClick={() => handlePageClick(index + 1)}
          disabled={currentPage === index+1}
        >{index + 1}</button>
      })}</div>
      <button className={s.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >{'>'}</button>
    </div>
  )
}

export default Pagination