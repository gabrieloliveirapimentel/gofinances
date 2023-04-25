import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.SECUNDARY,

    padding: 18,
    borderRadius: 5,
    alignItems: 'center'
  },
  title: {
    fontFamily: theme.fonts.MEDIUM,
    fontSize: RFValue(14),
    color: theme.colors.SHAPE
  }
});