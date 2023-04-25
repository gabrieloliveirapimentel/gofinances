import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.SHAPE,
    borderRadius: 5,
    
    paddingHorizontal: 24,
    paddingVertical: 17,
    marginBottom: 16
  },
  title: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(14),
  },
  amount: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(20),
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: RFValue(20),
    color: theme.colors.TEXT,

  },
  categoryName: {
    fontSize: RFValue(14),
    color: theme.colors.TEXT,
    marginLeft: 17
  },
  date: {
    fontSize: RFValue(14),
    color: theme.colors.TEXT,
  }
});