// @flow

import React, { Component, PropTypes } from 'react'
import { Animated, View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Actions as NavigationActions } from 'react-native-router-flux'

import { isLoggedIn } from '../Redux/LoginRedux'
import StructureActions, { getStructure } from '../Redux/StructureRedux'

// import AlertMessage from '../Components/AlertMessage'
import RoomComponent from '../Components/RoomComponent'

// Styles
// import NavigationStyles from '../Navigation/Styles/NavigationContainerStyle'
import styles from './Styles/TabScreenStyle'

class TabScreen extends Component {

  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1.name !== r2.name
    const roomDS = new ListView.DataSource({ rowHasChanged })

    const dataObjects = [
      { title: 'First Title', description: 'First Description' },
      { title: 'Second Title', description: 'Second Description' },
      { title: 'Third Title', description: 'Third Description' },
      { title: 'Fourth Title', description: 'Fourth Description' },
      { title: 'Fifth Title', description: 'Fifth Description' },
      { title: 'Sixth Title', description: 'Sixth Description' },
      { title: 'Seventh Title', description: 'Seventh Description' },
      { title: 'Eighth Title', description: 'Eighth Description' },
      { title: 'Ninth Title', description: 'Ninth Description' },
      { title: 'Tenth Title', description: 'Tenth Description' },
      { title: 'Eleventh Title', description: 'Eleventh Description' },
      { title: '12th Title', description: '12th Description' },
      { title: '13th Title', description: '13th Description' },
      { title: '14th Title', description: '14th Description' },
      { title: '15th Title', description: '15th Description' },
      { title: '16th Title', description: '16th Description' },
      { title: '17th Title', description: '17th Description' },
      { title: '18th Title', description: '18th Description' },
      { title: '19th Title', description: '19th Description' },
      { title: '20th Title', description: '20th Description' },
      { title: 'BLACKJACK!', description: 'BLACKJACK! Description' }
    ]
    const ds = new ListView.DataSource({ rowHasChanged })

    // Datasource is always in state
    this.state = {
      roomDS: roomDS.cloneWithRows([]),
      dataSource: ds.cloneWithRows(dataObjects),

      index: 0,
      routes: [{ key: '1', title: '' }, { key: '2', title: '' }],
      loaded: false
    }

    // this._renderScene = this._renderScene.bind(this)
  }

  componentWillMount() {
    const { started, loggedIn, structure, getApiStructure } = this.props

    if (!started) return // TODO is this started variable needed? maybe we can remove it?

    if (!loggedIn) return NavigationActions.login()

    if (structure === null) return getApiStructure()

    const { roomDS } = this.state
    const { rooms = [] } = structure
    let routes = []
    rooms.forEach(room => routes.push({ key: room.name, title: room.name }))

    console.tron.log(`TabScreen.componentWillMount() routes: ${JSON.stringify(routes,null,2)}`)

    this.setState({
      roomDS: roomDS.cloneWithRows(rooms),
      routes
    })
  }

  componentWillReceiveProps(newProps) {
    // console.tron.log(`TabScreen.componentWillReceiveProps() ${JSON.stringify(newProps,null,2)}`)
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

    const { roomDS } = this.state
    const { rooms = [] } = structure

    let routes = []
    rooms.forEach(room => routes.push({ key: room.name, title: room.name }))

    console.tron.log(`TabScreen.componentWillReceiveProps() routes: ${JSON.stringify(routes,null,2)}`)

    this.setState({
      roomDS: roomDS.cloneWithRows(rooms),
      routes
    })
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

  renderRow(room) {
    // console.tron.log(`TabScreen.renderRow() ${JSON.stringify(room,null,2)}`)
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{room.name}</Text>
        <Text style={styles.label}>{room.description} wtf</Text>
      </View>
    )
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  }

  _renderIndicator = (props) => {
      const { width, position } = props;
      const translateX = Animated.multiply(position, width);

      return (
          <Animated.View style={{ width, transform: [{ translateX }] }}>
      {/*<Animated.View style={[ styles.container, { width, transform: [ { translateX } ] } ]}>*/}
        <View style={styles.indicator} />
      </Animated.View>
    );
  }

  _renderScene = ({ route }) => {
    console.tron.log(`TabScreen._renderScene() route.key: ${route.key}`);

    switch (route.key) {

      case 'nada':
        return (
          <View style={[ styles.page, { backgroundColor: '#eee' } ]}>
            <ListView
              contentContainerStyle={styles.listContent}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              pageSize={15}
            />
          </View>
        );

      case 'nada2':
        return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;

      default:
        return null;
    }
  }

  _renderFooter = (props) => {
    return (
      <TabBar {...props}
        renderIcon={this._renderIcon}
        renderBadge={this._renderBadge}
        renderIndicator={this._renderIndicator}
        style={styles.tabbar}
        // tabStyle={styles.tab} // this will overwrite indicator, better leave it
        />
    );
  }

  render() {
    console.tron.log(`TabScreen.render()`);

    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onRequestChangeTab={this._handleChangeTab}
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
