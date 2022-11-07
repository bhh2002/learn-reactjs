import axios from "axios";

const categoryApi = {
  getAll(params) {
    const url = "/categories";
    return axios.get(url, { params });
  },

  get(id) {
    const url = `/categories/${id}`;
    return axios.get(url);
  },

  add(data) {
    const url = `/categories/${data.id}`;
    return axios.post(url, data);
  },

  update(data) {
    const url = `/categories/${data.id}`;
    return axios.patch(url, data);
  },

  remove(id) {
    const url = `/categories/${id}`;
    return axios.delete(url);
  },
};
export default categoryApi;
