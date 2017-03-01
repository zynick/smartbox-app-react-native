// @flow

import React, { Component, PropTypes } from 'react'
import { ListView, View, Text, TouchableOpacity, Vibration } from 'react-native'
import { connect } from 'react-redux'
import GcSendCommandActions from '../Redux/GcSendCommandRedux'
import styles from './Styles/GlobalCacheContainerStyle'


class GlobalCacheContainer extends Component {

  state: {
    dataSource: Object
  }

  pattern = [300, 50]
  isAttemptCall: boolean;

  constructor(props) {
    super(props)
    // console.tron.log(`GlobalCacheContainer.constructor() props: ${JSON.stringify(props,null,2)}`)

    const rowHasChanged = (r1, r2) => r1.name !== r2.name
    const ds = new ListView.DataSource({ rowHasChanged })
    const commands = props.item.commands || []
    const rows = commands.map(command => {
      const idx = command.lastIndexOf('_')
      const name = command.substr(idx + 1)
      return { name, command }
    })

    this.state = {
      dataSource: ds.cloneWithRows(rows)
    }
  }

  componentWillReceiveProps(newProps) {
    // console.tron.log(`GlobalCacheContainer.componentWillReceiveProps() newProps: ${JSON.stringify(newProps,null,2)}`)
    if (this.isAttemptCall && !newProps.fetching) {
      this.isAttemptCall = false
      if (newProps.success) {
        // TODO do something here to indicate success if needed
      }
    }
  }

  onPress(command) {
    this.isAttemptCall = true
    this.props.sendCommand(command)
    Vibration.vibrate(this.pattern)
  }

  renderRow(row) {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this, row.command)}>
        <Text style={styles.button}>* {row.name} *</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { name } = this.props.item

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <ListView
          contentContainerStyle={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          // pageSize={15}
          enableEmptySections={true} />
      </View>
    )
  }
}

GlobalCacheContainer.propTypes = {
  item: PropTypes.object,
  sendCommand: PropTypes.func,
  success: PropTypes.bool
}

const mapStateToProps = (state) => {
  // console.tron.log(`GlobalCacheContainer.mapStateToProps() ${JSON.stringify(state,null,2)}`)
  return {
    success: state.gcSendCommand.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendCommand: command => dispatch(GcSendCommandActions.gcSendCommandRequest(command))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalCacheContainer)
