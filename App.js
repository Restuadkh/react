import React, {Component} from 'react';

import {Text, View, StatusBar} from 'react-native';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // Constuction
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="default"
          backgroundColor="#89375F" />
        {/* Header */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#CE5959',
            paddingVertical: 10,
            paddingHorizontal: 20,
            elevation: 30,
          }}>
          <View
            style={
              {
                // backgroundColor: 'blue',
              }
            }>
            <Text>P</Text>
          </View>
          <View
            style={
              {
                flex:1,
                // backgroundColor: 'grey',
                marginHorizontal: 20
              }
            }>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 20,
                fontWeight: 500

              }}>
              Header
            </Text>
          </View>
          <View
            style={
              {
                // backgroundColor: 'blue',
              }
            }>
            <Text>P</Text>
          </View>
        </View>
        {/* Body */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#eeeeee',
            padding: 10,
          }}>
          <View>
            <Text>Test Body</Text>
          </View>
        </View>
        {/* Footer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#89375F',
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text>Footer</Text>
          </View>
          <View>
            <Text>Footer</Text>
          </View>
          <View>
            <Text>Footer</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default app;
