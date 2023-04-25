import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  error:{
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(14),
    color: theme.colors.ALERT,
    marginVertical: RFValue(7),
  }
});