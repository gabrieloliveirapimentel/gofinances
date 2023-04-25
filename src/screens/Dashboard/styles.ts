import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND
  },
  header: {
    width: '100%',
    height: RFPercentage(42),
    backgroundColor: theme.colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  user: {
    marginLeft: 17
  },
  userWrapper: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: getStatusBarHeight() + RFValue(28),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  photo: {
    width: RFValue(52),
    height: RFValue(52),
    borderRadius: 10
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userGreeting: {
    color: theme.colors.SHAPE,
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(18)
  },
  userName: {
    color: theme.colors.SHAPE,
    fontFamily: theme.fonts.BOLD,
    fontSize: RFValue(18)
  },
  logoutButton: {
    
  },
  Icon: {
    color: theme.colors.SECUNDARY,
    fontSize: RFValue(24),
  },
  HighlightCards: {
    width: '100%',
    position: 'absolute',
    marginTop: RFPercentage(20)
  },
  transactions: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: RFPercentage(12)
  },
  title: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: RFValue(18),
    marginBottom: 16
  },
  transactionList: {
    paddingBottom: getBottomSpace() 
  },

});