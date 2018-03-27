import React, { Component } from 'react'
import {View, Text, Platform } from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'
import Button from '../../components/Button'
import { renderExploreIcon } from '../../components/svg-icon/svg-icons';

class ExploreScreen extends Component {

    static navigationOptions = {
        header: null,
        tabBarIcon: renderExploreIcon,
      };

    goToDetailPage() {
        this.props.navigation.navigate('Detail')
      }

    render() {
        return (
            <View style={styles.layer1}>
                <View style={styles.sublayer}>
                    <Button onPress={() => this.goToDetailPage()}>
                        Go to Detail Page
                    </Button>
                </View>
            </View>
            );
    }
}

const mapStateToProps = (state) => ({

  })
  
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);