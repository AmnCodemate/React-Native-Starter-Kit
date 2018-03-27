import { getHello } from  '../api/api'

/**
* Send HTTP request to API and handle outcome.
*/
export const fetchHello = () => {
 // Actions must always return objects. Except here we return function. We are able to do
 // this because we have applied redux-thunk(check store.js file) to our app.
 return (dispatch) => {
   // Trigger first action. We change state to Loading so we can indicate it in UI
   dispatch(fetchHelloRequest())

   // Send request. Get return Promise so we can use .then function to wait for results.
   getHello().then(response => {
     // If response object includes error, it means our request failed.
     if (response.error) {
       // Trigger error action. We change state to Error so we can indicate it in UI
       dispatch(fetchHelloError())
     } else {
       // Is success, trigger Success action. Set new data to our state
       dispatch(fetchHelloSuccess(response))
     }
   })
 }
}

/**
* Basic actions
* These action creators return plain javascript object.
*
* Notice! `() => ({ type: 'action-name' })` is shorthand syntax in “new” javascript. This is equal to
*
 ```*  function () {
 *   return { type: 'action-name' }
 *  }
 *``` 
*/

// Start request.
export const fetchHelloRequest = () => ({ type: 'FETCH_HELLO_REQUEST' })
// Request success.
export const fetchHelloSuccess = (data) => ({ type: 'FETCH_HELLO_SUCCESS', data })
// Request failed.
export const fetchHelloError = () => ({ type: 'FETCH_HELLO_ERROR' })