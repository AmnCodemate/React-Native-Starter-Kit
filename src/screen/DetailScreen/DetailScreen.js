import React, { Component } from 'react'
import {View, Text, Platform } from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'
import Button from '../../components/Button'

class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Detail',
        tabBarVisible: false,
        swipeEnabled: false,
      };

    render() {
        return (
            <View style={styles.layer1}>
                <View style={styles.sublayer}>
                    <Text>
                        This is Detail Page
                    </Text>
                </View>
            </View>
            );
    }
}

const mapStateToProps = (state) => ({

  })
  
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);