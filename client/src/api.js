import axios from "axios";

const url = "api/v1";

export default {
  cats: {
    get: () => axios.get(`${url}/cats`).then(res => res.data),
    install: () => axios.post(`${url}/cats/install`),
    getAllOrdered: () =>
      axios.get(`${url}/cats/all/ordered`).then(res => res.data.cats)
  },
  vote: {
    post: data => axios.post(`${url}/vote`, data)
  },
  count: {
    getCount: () => axios.get(`${url}/count`).then(res => res.data)
  }
};
