// @flow

import React, { Component, PropTypes } from 'react'
import { ListView, View, Text } from 'react-native'
import { connect } from 'react-redux'

import AlertMessage from '../Components/AlertMessage'
import DigitalStromComponent from '../Components/DigitalStromComponent'
import GlobalCacheContainer from './GlobalCacheContainer'

import styles from './Styles/RoomScreenStyle'


class RoomScreen extends Component {

  state: {
    dataSource: Object
  };

  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1.name !== r2.name
    const ds = new ListView.DataSource({ rowHasChanged })
    const { items = [] } = props.room

    this.state = {
      dataSource: ds.cloneWithRows(items)
    }
  }

  componentWillReceiveProps(newProps) {
    const { items = [] } = newProps.room
    const dataSource = this.state.dataSource.cloneWithRows(items)
    this.setState({ dataSource })
  }

  noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  renderRow = item => {
    switch (item.type) {
      case 'digitalstrom':
        return (
          <DigitalStromComponent item={item} />
        )
      case 'globalcache':
        return (
          <GlobalCacheContainer item={item} />
        )
      default:
        return (
          <Text>{item.type}</Text>
        )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <AlertMessage title="There's nothing in this room" show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
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
