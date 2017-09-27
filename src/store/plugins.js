import localforage from 'localforage'

export const loadFromCache = (store) => {
  localforage.getItem('username').then((value) => {
  if(value){
    store.commit('loadUsernameFromCache', value);
  }
})
.catch((err) => {throw err})
}
