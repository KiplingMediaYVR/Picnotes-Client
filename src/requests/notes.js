/* global fetch */
import {BASE_URL} from './config';

function getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`;
}

// HTTP REQUESTS
export const Note = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/notes`,
    )
      .then(res => res.json())
  },

  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/notes/${id}`,
    )
      .then(res => res.json())
  },

  create (params) {
    return fetch(
      `${BASE_URL}/api/v1/notes`,
      {
        method: 'POST',
        headers: {
          'Authorization': getJwt(),
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },

  delete(id){
    return fetch(
      `${BASE_URL}/api/v1/notes/${id}`,
      {
        method: 'delete',
        headers: {
          'Authorization': getJwt(),
        }
      }
    ).then(res => res.json())
  }
}
