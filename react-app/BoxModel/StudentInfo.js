import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StudentInfo = (props) => {
  return (
    <View style={styles.container}>
        <Image source={props.image} style={styles.img} />
        <View style={styles.infoWrapper}>
            <Text style={styles.fullname}>{props.fullname}</Text>
            <Text>{props.jobPosition}</Text>
            <Text style={styles.desc}>{props.desc}</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Hire him</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  infoWrapper: {
    backgroundColor: 'white',
    width: '80%',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: -30,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#dddddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  fullname: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  desc: {
    textAlign: 'center',
    color: 'gray',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default StudentInfo;
