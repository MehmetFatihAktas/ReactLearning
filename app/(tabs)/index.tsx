import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.baslik}> React Native Nedir?</Text>

      <Text style={styles.metin}>
      React Native, Facebook tarafından geliştirilen, JavaScript ve React kullanarak iOS ve Android için uygulama geliştirmenizi sağlayan bir mobil framework’tür. Tek bir kod tabanıyla her iki platforma da destek verir; bu da zaman kazandırır ve maliyeti düşürür.
      </Text>
      <Text style={styles.metin}>
      Bileşen tabanlı yapısıyla modüler ve yeniden kullanılabilir kodlar yazmaya olanak tanır. Ayrıca, yerel bileşenler sayesinde yüksek performanslı uygulamalar geliştirilebilir.
      </Text>

        <Text style={styles.baslik}>React Native Temel Konuları</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 8,
    margin: 30,
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  metin:{
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    marginBottom: 5,
  }
});