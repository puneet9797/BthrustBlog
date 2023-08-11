import axios from 'axios'
import Ls from './Ls.js'
//import { useAuthStore } from '@src/stores/auth'
//import { useNotificationStore } from '@src/stores/notification'


window.Ls = Ls
window.axios = axios
console.log("Inside axios")
console.log(import.meta.env.VITE_SERVER_URL)
window.axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;//"http://localhost/3ibazaaradmin/public/";
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'projectid': 'shiv_bhakti',
}
//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//window.axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
/**
 * Interceptors
 */
 axios.interceptors.request.use(
  function (config) {
    //const authStore = useAuthStore()

    //if (authStore.isLoggedOut) {
    if(Ls.get('token')==null){
      let source = window.axios.CancelToken.source()
      config.cancelToken = source.token

      /*setTimeout(() => {
        authStore.isLoggedOut = false
      }, 200)*/

      return config
    }
    // Do something before request is sent
    /*const companyId = Ls.get('selectedCompany')

    if (companyId) {
      config.headers.common['company'] = companyId
    }
    */
    const token = Ls.get('token');
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

