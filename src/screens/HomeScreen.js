import React from 'react';
import Card from '../components/TinderCard';
import users from '../../assets/data/users.js';
import AnimatedStack from '../components/AnimatedStack';
import {StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };
  const onSwipeRight = user => {
    console.warn('swipe right', user.name);
  };
  return (
    <View style={styles.root}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});
export default HomeScreen;
