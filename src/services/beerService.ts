import axios, { AxiosResponse } from 'axios'

export const getBeer = (): Promise<AxiosResponse> => {
  const beerApiEndpoint = 'https://api.punkapi.com/v2/beers'
  return axios.get(beerApiEndpoint).then(response => response.data)
}
