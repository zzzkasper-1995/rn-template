import { StyleSheet, Platform } from 'react-native';
import { Color } from '../Color';

export default StyleSheet.create({
  viewContent: {
    paddingBottom: Platform.OS === 'ios' ? 0 : 48,
  },
});
