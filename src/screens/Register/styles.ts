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
    height: RFValue(113),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 19
  },
  title: {
    color: theme.colors.SHAPE,
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(18)
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    padding: 24,
  },
  fields: {

  },
  transactionsTypes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 16
  }
});