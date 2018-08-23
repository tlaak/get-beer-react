export const GOT_BEER = 'GOT_BEER'
export const GET_BEER = 'GET_BEER'

const beerState: BeerState = {
  isLoading: false,
  beers: [],
}

const beerReducer = (
  state: BeerState = beerState,
  action: ActionWithPayload<Beer[]>
) => {
  switch (action.type) {
    case GET_BEER:
      // tslint:disable no-console
      console.log('GET_BEER')
      return { ...state, isLoading: true }
    case GOT_BEER:
      return { ...state, isLoading: false, beers: action.payload }
    default:
      return state
  }
}

export default beerReducer
