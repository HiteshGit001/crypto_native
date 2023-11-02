import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Image, Text } from 'react-native';
import styles from './CoinCard.style';
import globalStyle from '../../style/global.styles';
import { useRouter } from 'expo-router';

const CoinCard = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={()=>router.push(`/coin-details/123`)} style={styles.card}>
      <View style={styles.containerBetween}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968260.png',
            }}
          />
          <View>
            <Text style={globalStyle.name}>Bitcoin</Text>
            <Text style={globalStyle.sub}>price</Text>
          </View>
        </View>
        <View>
          <Text style={globalStyle.name}>2999</Text>
          <Text style={globalStyle.success}>+19%</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CoinCard