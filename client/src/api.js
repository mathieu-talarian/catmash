import axios from 'axios'

export default {
  cats: {
    get: () => axios.get('api/v1/cats').then(res => res.data)
  }
}
