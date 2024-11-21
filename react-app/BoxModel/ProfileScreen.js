import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Project from '../components/Project';
import StudentInfo from '../components/StudentInfo';

const ProfileScreen = () => {
    return (
      <View style={styles.screen}>
        <StudentInfo
          fullname="John Doe"
          jobPosition="UI/UX Designer"
          desc="We're passionate about creating beautiful designs for startups & leading brands"
          image={require('../../assets/Avatar-4.jpg')}
        />
        
        <View style={styles.heading}>
          <Text style={styles.text}>PROJECTS</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>View All</Text>
          </TouchableOpacity>
        </View>
  
        <Project 
          first={require('../../assets/project-1.jpg')}
          second={require('../../assets/project-2.png')}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#f8f8f8', // Adding background color for the screen
    },
    heading: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      alignItems: 'center',
      marginTop: 15,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    btnText: {
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase', // To match button text style
    },
    btn: {
      backgroundColor: '#FFD700',
      borderRadius: 50,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
});
  
export default ProfileScreen;
