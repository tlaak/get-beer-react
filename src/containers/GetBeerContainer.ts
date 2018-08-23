import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import GetBeer from 'src/components/GetBeer'
import { GET_BEER } from 'src/reducers/beerReducer'

const mapStateToProps = (state: BeerState) => {
  return {
    beers: state.beers,
    isLoading: state.isLoading,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getBeer: () => {
      // tslint:disable no-console
      console.log('dispatch')
      dispatch({ type: GET_BEER })
    },
  }
}
const GetBeerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetBeer)
export default GetBeerContainer
