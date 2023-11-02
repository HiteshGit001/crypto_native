import { StyleSheet } from "react-native";
import { CONTAINER } from "../../constants/theme";

const styles = StyleSheet.create({
  card: CONTAINER.card,
  containerBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
  }
})

export default styles;