import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "./BottomNavbar.style.js";
import Icons from '../../assets/Icons/index.js';

export const IconBlock = ({
  icon,
  text,
  onClick,
  className,
}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.icon}>
      <Image
        source={icon}
      />
      <Text style={className}>{text}</Text>
    </TouchableOpacity>
  )
}
const BottomNavbar = () => {
  const icons = [
    { icon: Icons.Home, selected: Icons.HomeSelected, name: "Home" },
    { icon: Icons.Market, selected: Icons.MarketSelected, name: 'Market' },
    { icon: Icons.PortFolio, selected: Icons.PortFolioSelected, name: 'Port Folio' },
    { icon: Icons.Reward, selected: Icons.RewardSelected, name: 'Reward' },
    { icon: Icons.Profile, selected: Icons.ProfileSelected, name: 'Profile' }
  ];
  const [clicked, setClicked] = useState('Home');

  const handleClick = (name) => {
    setClicked(name);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconBox}>
          {
            icons.map((item, index) => {
              return (
                <IconBlock
                  icon={clicked === item.name ? item.selected : item.icon}
                  text={item.name}
                  key={item.name + index}
                  onClick={() => handleClick(item?.name)}
                  className={clicked === item.name ? styles.iconText : styles.iconNotSelected}
                />
              )
            })
          }
        </View>
      </View>
    </View>
  )
}

export default BottomNavbar;