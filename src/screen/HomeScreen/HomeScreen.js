import React, { Component } from 'react'
import {View, Text } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import types from '../../model/props-valiation'
import Button from '../../components/Button'
import LoadingView from '../../components/LoadingView'
import styles from './styles'
import { fetchHello } from '../../actions/hello'
import { renderHomeIcon } from '../../components/svg-icon/svg-icons';

class HomeScreen extends Component {
    
    static navigationOptions = ({navigation}: Object): Object => ({
        tabBarIcon: renderHomeIcon,
      });

    componentWillMount() {
      }
    
    componentWillReceiveProps(nextProps) {  
      }

    onButtonPress() {
        this.props.getHello()
      }

    render() {
        const { hello } = this.props.hello;
        return (
            <View style={styles.layer1}>
                <View style={styles.sublayer}>
                    <Button onPress={() => this.onButtonPress()}>
                        Get Hello
                    </Button>
                </View>
                <Text>{`${hello.state}`}</Text>
                <Text style={styles.helloTextStyle}>{`${hello.data.data}`}</Text>
            </View>
            );
    }
}

const mapStateToProps = (state) => ({
    hello: state.hello,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    getHello: () => dispatch(fetchHello())
})

HomeScreen.propTypes = {
    hello: types.helloModel,
    getHello: PropTypes.func
  }

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);