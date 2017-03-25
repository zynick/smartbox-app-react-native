// @flow

import React, { Component, PropTypes } from 'react'
import { Animated, View, ListView } from 'react-native'
import { connect } from 'react-redux'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import { Actions as NavigationActions } from 'react-native-router-flux'

import RoomContainer from './RoomContainer'

import { isLoggedIn } from '../Redux/LoginRedux'
import StructureActions, { getStructure } from '../Redux/StructureRedux'

import styles from './Styles/TabScreenStyle'


class TabScreen extends Component {

  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1.name !== r2.name
    const roomDS = new ListView.DataSource({ rowHasChanged })

    this.state = {
      roomDS: roomDS.cloneWithRows([]),
      rooms: [],
      index: 0,
      routes: [{ key: '1', title: '' }, { key: '2', title: '' }],
      loaded: true
    }
  }

  componentWillMount() {
    const { started, loggedIn, structure, getApiStructure } = this.props

    if (!started) return // TODO is this started variable needed? maybe we can remove it?
    if (!loggedIn) return NavigationActions.login()
    if (structure === null) return getApiStructure()

    const { roomDS } = this.state
    const { rooms = [] } = structure
    const routes = []
    rooms.forEach((room, idx) => routes.push({ key: `${idx}`, title: room.name }))

    this.setState({
      roomDS: roomDS.cloneWithRows(rooms),
      rooms,
      routes
    })
  }

  componentWillReceiveProps(newProps) {
    const { started, loggedIn, structure, getApiStructure } = newProps

    if (!started) return
    if (!loggedIn) return NavigationActions.loginScreen()
    if (structure === null) return getApiStructure()

    const { roomDS } = this.state
    const { rooms = [] } = structure
    const routes = []
    rooms.forEach((room, idx) => routes.push({ key: `${idx}`, title: room.name }))

    this.setState({
      roomDS: roomDS.cloneWithRows(rooms),
      rooms,
      routes
    })
  }

  handleChangeTab = (index) => {
    this.setState({ index })
  }

  renderIndicator = (props) => {
    const { width, position } = props
    const translateX = Animated.multiply(position, width)
    return (
      <Animated.View style={{ width, transform: [{ translateX }] }}>
        <View style={styles.indicator} />
      </Animated.View>
    )
  }

  renderScene = ({ route }) => {
    const idx = parseInt(route.key)
    const room = this.state.rooms[idx] || {}
    return (
      <RoomContainer room={room} />
    )
  }

  renderFooter = (props) => {
    return (
      <TabBar
        {...props}
        renderIcon={this._renderIcon}
        renderBadge={this._renderBadge}
        renderIndicator={this.renderIndicator}
        style={styles.tabbar}
        />
      )
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderFooter={this.renderFooter}
        onRequestChangeTab={this.handleChangeTab}
        />
    )
  }

}

TabScreen.propTypes = {
  getApiStructure: PropTypes.func,
  loggedIn: PropTypes.bool,
  structure: PropTypes.object,
  started: PropTypes.bool,
  width: PropTypes.number,
  position: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state.login),
    structure: getStructure(state.structure),
    started: state.startup.started
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiStructure: () => dispatch(StructureActions.structureRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabScreen)
