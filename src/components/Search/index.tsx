import React from "react"

import "./Search.scss"

interface SearchProps {
  className: string
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  return (
    <form  className={`search `.concat(className)}>
      <input
        type="text"
        name="search"
        id="search"
        className="search__input"
        placeholder="O que você busca"
      />

      <button className="search__button" type="submit">Buscar</button>
    </form>
  )
}
