import { StyleSheet } from "react-native";
import { COLOR, CONTAINER, TEXT } from "../../constants/theme";

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: COLOR.secondary,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.075)',
    borderRadius: 8,
    marginVertical: 4,
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: '100%',
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: TEXT.blueSmall,
  iconNotSelected: TEXT.blackSmall,
});

export default styles;