import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import CustomLineGraph from '../../components/Graph/CustomLineGraph';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar';
import { Stack } from 'expo-router';
import { COLOR } from '../../constants/theme';

const CoinDetails = () => {
  console.log(Dimensions.get("window").width);
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.bg },
          headerShadowVisible: false,
          headerTitle: ''
        }}
      />
      <ScrollView style={{ backgroundColor: COLOR.bg, height: '100%' }} showsVerticalScrollIndicator>
        <View style={{ padding: 10 }}>
          <Text>{ }</Text>
          <CustomLineGraph height={500} width={Dimensions.get("window").width - 20} />
        </View>
      </ScrollView>
      <BottomNavbar />
    </SafeAreaView>
  )
}

export default CoinDetails;