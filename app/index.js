import { Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#83829A" },
          headerShadowVisible: false,
          headerTitle: ''
        }}
      />
      <ScrollView showsVerticalScrollIndicator>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;