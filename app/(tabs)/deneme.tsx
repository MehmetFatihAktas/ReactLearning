import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function deneme() {
    const [sayac, setSayac] = useState(0);
    return (
      <View style={styles.container}>
        <View style={styles.button}>
            <Button
            title='Artir'
            onPress={() => setSayac(sayac + 1)}
            />
        </View>

        <View style={styles.button}>
            <Button
            title='Sifirla'
            onPress={() => setSayac(0)}
            />
        </View>

        <Text style={styles.baslik}>Sayac: {sayac}</Text>
        
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
    },
    baslik: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    kutu: {
        height: 100,
        margin: 10,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
    },
});