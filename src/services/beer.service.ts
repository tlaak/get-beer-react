import axios, { AxiosResponse } from 'axios'

const getBeer = (): Promise<AxiosResponse> => {
  const beerApiEndpoint = 'https://api.punkapi.com/v2/beers'
  return axios.get(beerApiEndpoint)
}

export default getBeer
