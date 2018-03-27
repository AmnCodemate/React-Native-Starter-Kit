const initialState = {
    hello: {
      data: [],
      state: 'No loading',
    },
   }
   
   
   /**
   * Hello reducer
   * REDUCER MUST BE PURE AND
   * ALWAYS RETURN NEW STATE
   *
   * Notice that this function uses lot of new object creation syntax, spread. Works like:
   *
    ```*   const a = { a1: 1, a2: 2 }
    *   constole.log({ ...a, { b1: 3 } }) // -> { a1: 1, a2: 2, b1: 3 }
    *``` 
   *
   * @export
   * @param {Object} [state=initialState]
   * @param {Object} action
   * @returns {Object}
   */
   export default function (state = initialState, action) {
    switch (action.type) {
      case 'FETCH_HELLO_REQUEST':
        return { ...initialState, hello: { data: state.hello.data, state: 'Loading' } }
   
      case 'FETCH_HELLO_SUCCESS':
        return { ...state, hello: { data: action.data.data, state: 'Success' } }
   
      case 'FETCH_HELLO_ERROR':
        return { ...state, hello: { data: state.hello.data, state: 'Error' } }
   
      default: return state
    }
   }