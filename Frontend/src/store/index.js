import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
      token: localStorage.getItem('token') || null,
  },
  getters: {
      loggedIn(state){
          return state.token !== null
      },
      
  },
  mutations: {
      setToken(state, token){
          state.token = token
      },
      removeToken(state){
          state.token = null;
      },
  },
  actions: {
      Register(context,registration){
          return new Promise((resolve,reject)=>{
              axios.post('http://localhost:8000/api/signup',registration)
              .then(res=>{
                  resolve(res)
              }).catch(error=>{
                  reject(error)
              })
          })
          
      },
      RegisterAdmin(context,registration){
          return new Promise((resolve,reject)=>{
              axios.post('http://localhost:8000/api/addadmin',registration)
              .then(res=>{
                  resolve(res)
              }).catch(error=>{
                  reject(error)
              })
          })
          
      },
      Login(context,login){
          return new Promise((resolve,reject)=>{
              axios.post('http://localhost:8000/api/signin',login)
              .then(res=>{
                  localStorage.setItem('token', res.data.token)
                  context.commit('setToken', res.data.token)
                  resolve(res)
              }).catch(error=>{
                  reject(error)
              })
          })
      },
      Logout({ commit }) {
          localStorage.removeItem('token');
          commit('removeToken');
      },
    }
})
