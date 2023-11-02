import { Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import CoinCard from "../components/CoinCard/CoinCard";
import { COLOR } from "../constants/theme";
import globalStyle from "../style/global.styles";
import BottomNavbar from "../components/BottomNavbar/BottomNavbar";
import { useEffect, useState } from "react";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const getTrendingCoin = async (currency) => {
    const response = await fetchTrending(currency);
    setTrending(response);
  }
  useEffect(() => {
    getTrendingCoin('inr');
  }, []);

  console.log(trending, 'oi');
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
        <View style={{ margin: 16 }}>
          <Text style={globalStyle.title}>Trending Coins</Text>
          <FlatList
            data={trending}
            renderItem={({ item }) => (
              <CoinCard />
            )}
            key={item => item}
          />
        </View>
      </ScrollView>
      <BottomNavbar />
    </SafeAreaView>
  )
}

export default Home;