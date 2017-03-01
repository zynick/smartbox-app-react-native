// @flow

import React, { Component, PropTypes } from 'react'
import { ListView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { isLoggedIn } from '../Redux/LoginRedux'
import StructureActions, { getStructure } from '../Redux/StructureRedux'

import AlertMessage from '../Components/AlertMessage'
import RoomComponent from '../Components/RoomComponent'

import styles from './Styles/MainScreenStyle'

// I18n
// import I18n from 'react-native-i18n'



class MainScreen extends Component {

  state: {
    mainDS: Object,
    roomDS: Object
  };

  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1.name !== r2.name
    const mainDS = new ListView.DataSource({ rowHasChanged })
    const roomDS = new ListView.DataSource({ rowHasChanged })

    // Datasource is always in state
    this.state = {
      mainDS: mainDS.cloneWithRows([]),
      roomDS: roomDS.cloneWithRows([])
    }
  }

  componentWillMount() {
    const { started, loggedIn, structure, getApiStructure } = this.props

    if (!started) return // TODO is this started variable needed? maybe we can remove it?

    if (!loggedIn) return NavigationActions.login()

    if (structure === null) return getApiStructure()

    const { mainDS, roomDS } = this.state
    const { main = {}, rooms = [] } = structure
    const { items = [] } = main
    this.setState({
      mainDS: mainDS.cloneWithRows(items),
      roomDS: roomDS.cloneWithRows(rooms)
    })
  }

  componentWillReceiveProps(newProps) {
    // console.tron.log(`MainScreen.componentWillReceiveProps() ${JSON.stringify(newProps,null,2)}`)
    const { started, loggedIn, structure, getApiStructure } = newProps

    if (!started) return

    if (!loggedIn) return NavigationActions.loginScreen()

    if (structure === null) return getApiStructure()

    // TODO remove on production: ONLY FOR DEVELOPMENT ON ITEM CONTAINERS!
    // if (structure.length > 0) {
    //   const room = structure[0]
    //   const options = { title: room.name, room }
    //   NavigationActions.roomScreen(options)
    // }

    const { mainDS, roomDS } = this.state
    const { main = {}, rooms = [] } = structure
    const { items = [] } = main
    this.setState({
      mainDS: mainDS.cloneWithRows(items),
      roomDS: roomDS.cloneWithRows(rooms)
    })
  }

  renderMainItemComponent(item) {
    return (
      <Text>{item.name}</Text>
    )
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRoomRowData() {
    return this.state.roomDS.getRowCount() === 0
  }

  renderRoomComponent(room) {
    const options = { title: room.name, room }
    const navigate = NavigationActions.roomScreen.bind(this, options)
    return (
      <RoomComponent text={room.name} onPress={navigate} />
    )
  }

  render() {
    const loading = !this.props.started;
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listView}
          dataSource={this.state.mainDS}
          renderRow={this.renderMainItemComponent}
          // pageSize={15}
          enableEmptySections={true} />
        <AlertMessage title='Loading...' show={loading} />
        <AlertMessage title='No rooms loaded. Is your home configuration setup correctly?' show={this.noRoomRowData()} />
        <ListView
          contentContainerStyle={styles.listView}
          dataSource={this.state.roomDS}
          renderRow={this.renderRoomComponent}
          // pageSize={15}
          enableEmptySections={true} />
      </View>
    )
  }
}

MainScreen.propTypes = {
  getApiStructure: PropTypes.func,
  loggedIn: PropTypes.bool,
  structure: PropTypes.object,
  started: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    loggedIn: isLoggedIn(state.login),
    structure: getStructure(state.structure),
    started: state.startup.started
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getApiStructure: () => dispatch(StructureActions.structureRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
