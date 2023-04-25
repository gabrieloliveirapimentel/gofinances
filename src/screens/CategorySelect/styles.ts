import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND
  },
  header: {
    backgroundColor: theme.colors.PRIMARY,
    width: '100%',
    height: RFValue(90),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 19
  },
  title: {
    color: theme.colors.SHAPE,
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(18)
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
  category: {
    width: '100%',
    padding: RFValue(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: RFValue(20),
    marginRight: 16,

  },
  name: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(14)
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.TEXT
  },
  footer: {
    width: '100%',
    padding: 24,  
  },
});