const COLOR = {
  primary: 'rgba(248, 249, 250, 1)',
  secondary: 'white',
  blue: '#0063F5',
  gray: '#DFE2E4',
  green: '#21BF73',
  red: '#D90429',
  bg: '#F8F9FA',
  textPrimary: '#212529',
  textSecondary: '#6C757D',
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const CONTAINER = {
  card: {
    padding: 16,
    backgroundColor: COLOR.secondary,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.075)',
    borderRadius: 8,
    marginVertical: 4,
  },
  img: {
    backgroundColor: COLOR.secondary,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.075)',
    borderRadius: 8,
  }
}

const TEXT = {
  title: {
    fontSize: 20,
    color: COLOR.textPrimary,
    fontWeight: 700,
    lineHeight: 20,
  },
  name: {
    fontSize: 16,
    color: COLOR.textPrimary,
    fontWeight: 450,
    lineHeight: 20,
  },
  sub: {
    fontSize: 12,
    color: COLOR.textPrimary,
    fontWeight: 450,
    lineHeight: 20,
  },
  danger: {
    fontSize: 10,
    color: COLOR.red,
    fontWeight: 500,
    lineHeight: 13,
  },
  blueSmall: {
    fontSize: 10,
    color: COLOR.blue,
    fontWeight: 450,
    lineHeight: 13,
  },
  blackSmall: {
    fontSize: 10,
    color: COLOR.textPrimary,
    fontWeight: 450,
    lineHeight: 13,
  }
}

export { COLOR, CONTAINER, TEXT };