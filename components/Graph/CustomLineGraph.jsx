import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const CustomLineGraph = ({ height = 200, width = 100 }) => {
  return (
    <View>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={width} // from react-native
        height={height}
        yAxisLabel=''
        yAxisSuffix=''
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 4, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(33, 37, 41, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(33, 37, 41 ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}

export default CustomLineGraph