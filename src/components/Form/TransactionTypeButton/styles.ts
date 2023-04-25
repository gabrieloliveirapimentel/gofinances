import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderStyle: 'solid',
    borderColor: theme.colors.TEXT,
    borderRadius: 5,

    paddingVertical: 16,
    paddingHorizontal: 16
 
  }, 
  icon: {
    fontSize: RFValue(24),
    marginRight: 12
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.REGULAR
  }, 
});