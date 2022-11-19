import { StatusBar } from 'expo-status-bar';
import { MotiImage, MotiView } from 'moti';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './components/input';
import LinkButton from './components/link_button';
import Login from './components/login';
import OutlinedButton from './components/outlined_button';
import image from './assets/IFAL.png';
import { type } from './node_modules/@emotion/stylis/types/index.d';

export default function App() {
  return (
    <View style={styles.container}>
      <MotiImage
        source={image}
        style={{ height: 150, width: '90%' }}
        from={{
          opacity: 0,
          translateY: -100
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          duration: 3000,
          type: "timing"
        }}
      >

      </MotiImage>
      <MotiView
        from={{
          scale: 0.3,
          opacity: 0.3
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 3000,
          delay: 1000,
          type: "timing"
        }}
      >
        <Login />
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
