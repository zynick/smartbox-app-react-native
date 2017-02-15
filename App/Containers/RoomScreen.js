// @flow

import React, { Component, PropTypes } from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import AlertMessage from '../Components/AlertMessage'
import RoomButton from '../Components/RoomButton'

// Styles
import styles from './Styles/RoomScreenStyle'

// I18n
// import I18n from 'react-native-i18n'

class RoomScreen extends Component {

  state: {
    dataSource: Object
  };

  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1.name !== r2.name
    const ds = new ListView.DataSource({ rowHasChanged })
    const items = props.room.items || []
    this.state = {
      dataSource: ds.cloneWithRows(items)
    }
  }

  noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  renderRow(item) {
    const text = `${item.name} (${item.type})`
    const options = { title: item.name, item, room: {} }
    const navigate = NavigationActions.roomScreen.bind(this, options)
    return (
      <RoomButton text={text} onPress={navigate} />
    )
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
