import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-Icons/ionicons';
import MenuBar from './src/components/MenuBar';
import Header from './src/components/Header';
const App = () => {
  return (
    <view 
    style={{
      flex: 1, 
      marginHorizontal: 20, 
      marginTop: 10,
      }}>
        <Header pencarian={pencarian} setPencarian={setPencarian} />
        <view style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{color: '#0082f7', fontWeight: 'bold'}}>
            jadwal pemeriksaan
          </Text>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={{color: '#FDB436', fontWeight: 'bold'}}>
              lihat semua
            </Text>
          </TouchableOpacity>
        </view>
        <TouchableOpacity>
          <Text>Dr. suhdi</Text>
          <Text>Dokter umum</Text>
          <Text>25 desember 2023</Text>
          <Text>klinik madika</Text>
        </TouchableOpacity>
        <MenuBar />
      </view>
);
}

export default App;

    
                  
             