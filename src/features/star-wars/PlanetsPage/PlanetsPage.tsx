import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlanetsList from '../PlanetsList'
import { selectErrorMessage } from '../StarWarsSelectors'
import { actions } from '../StarWarsState'

export default function () {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectErrorMessage)

  useEffect(() => {
    document.title = 'Planetas • React Sample'
  }, [])

  useEffect(() => {
    dispatch(actions.getPlanets())
    return () => { dispatch(actions.setPlanets({ planets: [] })) }
  }, [dispatch])

  return (
    <>
      <h1>Star Wars: Planetas</h1>
      { errorMessage
        ? (<span>Ocorreu um erro. Motivo: {errorMessage}</span>)
        : (<PlanetsList />)}
    </>
  )
}
