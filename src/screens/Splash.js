import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { THEME_COLOR, THEME_COLOR2 } from '../utils/Colors'
import { horizontalScale, moderateScale, verticalScale } from '../components/responsive'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      handleGetStarted();
    }, 2000); 
  }, []);

  const handleGetStarted = async () => {
    try {
     
      const Token = await AsyncStorage.getItem('UserToken');
      const TeacherToken = await AsyncStorage.getItem('TeacherToken');
   

      console.log('UserToken:', Token);
      console.log('TeacherToken:', TeacherToken);

    
      if (!Token && !TeacherToken) {
        
        navigation.replace('Login');
      } else if (Token) {
      
        navigation.replace('TabNavigator');
      } else if (TeacherToken) {
        
        navigation.replace('TeacherTabNavigator');
      }
    } catch (error) {
      console.error('Error retrieving token', error);
     
      navigation.replace('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />

      <View style={styles.bottomBoxView}>
        <Text style={styles.learnTxt}>Learn anything with us you want</Text>
        <Text style={styles.discoverTxt}>Discover the things you want to learn and grow with them</Text>

        <LinearGradient colors={[THEME_COLOR, THEME_COLOR2]} style={styles.getStartbtn}>
          <TouchableOpacity onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR,
    alignItems: 'center',
  },
  logo: {
    width: horizontalScale(250),
    height: verticalScale(250),
    resizeMode: 'contain',
    marginTop: moderateScale(60),
  },
  bottomBoxView: {
    width: horizontalScale(300),
    height: verticalScale(300),
    backgroundColor: '#fff',
    borderRadius: moderateScale(20),
    alignItems: 'center',
  },
  learnTxt: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    margin: 45,
    textAlign: 'center',
  },
  discoverTxt: {
    textAlign: 'center',
    fontSize: 13,
    margin: 35,
    marginTop: -10,
  },
  getStartbtn: {
    width: horizontalScale(150),
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: moderateScale(60),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
