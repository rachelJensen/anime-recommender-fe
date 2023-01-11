import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../components/App"

export const GridHeader = () => {
  const { searchText } = useContext(SearchContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (searchText !== '') {
      setMessage(`Results for ${searchText}`)
    } else {
      setMessage(`Top animes`)
    }
  }, [searchText])

  return (<h2>{message}</h2>)
}