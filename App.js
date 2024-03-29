/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PostList from '~/components/PostList/';

const mock = require('~/components/PostList/mock.json');

export default class App extends Component {
  state = {
    posts: mock,
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <PostList posts={posts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
