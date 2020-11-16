import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {Heading} from '../components';
import {LogoInalum} from '../assets/Illustration/logo.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Heading text="Salan Inalum ProsPeKTIF" />
      <Image source={LogoInalum} style={styles.image} />
      <View>
        <Heading text="Selamat datang di aplikasi INALUM Apps" />
        <Text style={styles.paragraph}>
          Tanggal 29 November 2017, PT ANTAM Tbk, PT Bukit Asam Tbk dan PT Timah
          Tbk melakukan Rapat Umum Pemegang Saham (RUPS) Luar Biasa resmi
          mengumumkan pengalihan saham Pemerintah ke dalam modal saham
          Perusahaan Perseroan (Persero) PT Indonesia Asahan Aluminium.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 40,
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
  },
  paragraph: {
    paddingTop: 20,
  },
});

export default App;
