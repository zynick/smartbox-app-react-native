// @flow

import React, { Component, PropTypes } from 'react'
import { ListView, View, Text } from 'react-native'
import { connect } from 'react-redux'
// import { Actions as NavigationActions } from 'react-native-router-flux'

import AlertMessage from '../Components/AlertMessage'
import DigitalStromComponent from '../Components/DigitalStromComponent'
import GlobalCacheComponent from '../Components/GlobalCacheComponent'

// Styles
import styles from './Styles/RoomScreenStyle'

// I18n
// import I18n from 'react-native-i18n'

class RoomScreen extends Component {

  state: {
    dataSource: Object,
    listDS: Object
  };

  constructor(props) {
    super(props)
    // console.tron.log(`RoomScreen.constructor()`);

    const rowHasChanged = (r1, r2) => r1.name !== r2.name // TODO fix this
    const ds = new ListView.DataSource({ rowHasChanged })
    const items = props.room.items || []
    this.state = {
      listDs: ds,   // FIXME (quick hack!) dangerous! move it off from state (props better)
      dataSource: ds.cloneWithRows(items)
    }
  }

  componentWillReceiveProps(newProps) {
    // console.tron.log(`RoomScreen.componentWillReceiveProps()`);
    const items = newProps.room.items || []
    this.setState({
      dataSource: this.state.listDs.cloneWithRows(items)
    })
  }

  noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  renderRow(item) {
    switch (item.type) {
      case 'digitalstrom':
        return (
          <DigitalStromComponent item={item} />
        )
      case 'globalcache':
        return (
          <GlobalCacheComponent item={item} />
        )
      default:
        return (
          <Text>{item.type}</Text>
        )
    }
    // const text = `${item.name} (${item.type})`
    // const options = { title: item.name, item, room: {} }
    // const navigate = NavigationActions.roomScreen.bind(this, options)
    // return (
    //   <RoomComponent text={text} onPress={navigate} />
    // )
  }

  render() {
    return (
      <View style={styles.container}>
        <AlertMessage title="There's nothing in this room" show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          pageSize={15}
          enableEmptySections={true} />
      </View>
    )
  }

}

RoomScreen.propTypes = {
  room: PropTypes.object
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen)
