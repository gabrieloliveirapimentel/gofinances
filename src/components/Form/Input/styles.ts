import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 18,
    
    fontSize: RFValue(14),
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TEXT_DARK,

    backgroundColor: theme.colors.SHAPE,
    borderRadius: 5,
    marginBottom: 8
  },
});