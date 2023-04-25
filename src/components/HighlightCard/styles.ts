import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
   width: RFValue(300),
   borderRadius: 5,
   paddingHorizontal: 23,
   paddingVertical: 19,
   paddingBottom: RFValue(42),
   marginRight: 16,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(14),
    
  },
  Icon: {
    fontSize: RFValue(40),
  },
  footer: {

  },
  amount: {
    fontFamily: theme.fonts.MEDIUM,
    fontSize: RFValue(32),
    marginTop: 38
  },
  lastTransaction: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(12),
  }
});