import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import React, { useState } from 'react';
import { horizontalScale, moderateScale, verticalScale } from '../../../../components/responsive';
import { THEME_COLOR, THEME_COLOR2 } from '../../../../utils/Colors';
import RazorpayCheckout from "react-native-razorpay";
import axios from 'axios';
import { BASE_URL, SUBSCRIPTION } from '../../../../constant/StringAPI';
import { ScrollView } from 'react-native-gesture-handler';

const StudentPayment = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false); // For payment confirmation modal
  const [price, setPrice] = useState(''); // For the selected price
  
  




  const handleNavigateToPlan = (data) => {
    console.log("data===",data)
    navigation.navigate('Plane',{item:data});  // Navigate to the "Plan" page
  };
 
 
  return (
    <View style={styles.container}>

      <View style={styles.heading}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../../images/BackBtn.png')} style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.headingTxt}>Payment</Text>
      </View>

      {/* Payment Option 1 */}
      <View style={styles.CompView}>
        <Text style={styles.containTxt}>Content View</Text>
        <TouchableOpacity style={styles.payTouch} onPress={()=>{handleNavigateToPlan('1')}}
         
        >
          <Text style={styles.payTxt}>Plan</Text>
          {/* <Text style={{ color: THEME_COLOR2 }}>Rs 1999</Text> */}
        </TouchableOpacity>
      </View>

      {/* Payment Option 2 */}
      <View style={styles.CompView}>
        <View>
          <Text style={styles.containTxt}>Content view &  </Text>
          <Text style={styles.containTxt}>Communication</Text>
          
        </View>
        <TouchableOpacity style={styles.payTouch}  onPress={()=>{handleNavigateToPlan('2')}}>
          <Text style={styles.payTxt}>Plan</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default StudentPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  heading: {
    width: horizontalScale(360),
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(12),
    backgroundColor: '#E9E9E9',
  },

  backBtn: {
    width: horizontalScale(25),
    height: verticalScale(20),
    resizeMode: 'contain',
    marginTop: moderateScale(10),
  },

  headingTxt: {
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
    marginLeft: moderateScale(110),
    color: THEME_COLOR2,
  },

  CompView: {
    width: horizontalScale(320),
    height: verticalScale(100),
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    elevation: 10,
  },

  containTxt: {
    color: THEME_COLOR2,
    fontSize: 20,
    fontWeight: '600',
  },

  payTouch: {
    width: horizontalScale(80),
    height: verticalScale(40),
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  payTxt: {
    color: 'black',
    fontSize: 18,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the modal overlay
  },

  modalContain: {
    width: horizontalScale(300),
    // padding: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    paddingBottom:20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
  },

  modalText: {
    fontSize: 16,
    marginBottom: moderateScale(20),
  },

  payButton: {
    width: horizontalScale(250),
    paddingVertical: moderateScale(10),
    backgroundColor: THEME_COLOR,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: moderateScale(15),
  },

  payButtonText: {
    fontSize: 18,
    color: 'white',
  },

  closeButton: {
    width: horizontalScale(250),
    paddingVertical: moderateScale(10),
    backgroundColor: 'gray',
    alignItems: 'center',
    borderRadius: 10,
  },

  closeButtonText: {
    fontSize: 18,
    color: 'white',
  },

  subscriptionItem:{
    borderWidth:2,
    margin:20,
    flexDirection:'row',
    paddingHorizontal:horizontalScale(20),
    alignContent:'center',
    justifyContent:'center',
    
    
  }
});
