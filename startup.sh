#!/bin/sh

# debugging
reactotron
adb reverse tcp:9090 tcp:9090

react-native run-android
