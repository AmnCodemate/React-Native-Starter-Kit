import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Provider } from 'react-redux'

import store from './stores/store'
import { MainNavigator } from './routers/AppNavigator'

export default class Root extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: store(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <MainNavigator />
      </Provider>
    );
  }

}
