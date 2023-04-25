import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.SHAPE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //width: '100%',
    //height: RFValue(56),
    borderRadius: RFValue(5),
  },
  category: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(14),
    color: theme.colors.TEXT,

    paddingVertical: RFValue(18), 
    paddingHorizontal: RFValue(16),

  },
  icon: {
    fontSize: RFValue(20),
    color: theme.colors.TEXT,
    marginRight: RFValue(16),
  }
});