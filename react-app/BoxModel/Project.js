import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Project = (props) => (
  <View style={styles.container}>
    <Image source={props.first} style={styles.img} />
    <Image source={props.second} style={styles.img} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default Project;
