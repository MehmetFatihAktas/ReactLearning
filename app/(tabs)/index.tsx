import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Theme from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <LinearGradient
          colors={['#f8f9fa', '#e9ecef']}
          style={styles.heroGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>React Native</Text>
            <Text style={styles.heroSubtitle}>Öğren & Öğret</Text>
            <View style={styles.heroStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>100+</Text>
                <Text style={styles.statLabel}>Ders</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>50+</Text>
                <Text style={styles.statLabel}>Örnek</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>24/7</Text>
                <Text style={styles.statLabel}>Destek</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Öne Çıkan Özellikler</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <View style={styles.featureCard} key={index}>
              <View style={styles.featureIconContainer}>
                <FontAwesome name={feature.icon as any} size={24} color="#fff" />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDesc}>{feature.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Topics Section */}
      <View style={styles.topicsSection}>
        <Text style={styles.sectionTitle}>Öğrenecekleriniz</Text>
        <View style={styles.topicsList}>
          {topics.map((topic, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.topicCard}
              onPress={() => router.push('/lessons')}
            >
              <View style={styles.topicIconContainer}>
                <FontAwesome name={topic.icon as any} size={24} color="#fff" />
              </View>
              <View style={styles.topicContent}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <Text style={styles.topicDesc}>{topic.description}</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6c757d" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Hemen Başlayın</Text>
          <Text style={styles.ctaText}>React Native öğrenmeye başlamak için hazır mısınız?</Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => router.push('/lessons')}
          >
            <Text style={styles.ctaButtonText}>Derslere Başla</Text>
            <FontAwesome name="arrow-right" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const features = [
  {
    title: "Pratik Örnekler",
    description: "Gerçek dünya senaryolarına dayalı örnekler",
    icon: "code"
  },
  {
    title: "İnteraktif Öğrenme",
    description: "Uygulamalı alıştırmalar ve projeler",
    icon: "graduation-cap"
  },
  {
    title: "Güncel İçerik",
    description: "En son React Native özellikleri ve best practices",
    icon: "refresh"
  }
];

const topics = [
  {
    title: "Temel Kavramlar",
    description: "Components, Props, State ve Lifecycle metodları",
    icon: "cube"
  },
  {
    title: "UI Geliştirme",
    description: "Flexbox, Styling ve temel komponentler",
    icon: "paint-brush"
  },
  {
    title: "Navigasyon",
    description: "Sayfalar arası geçiş ve route yönetimi",
    icon: "exchange"
  },
  {
    title: "Veri Yönetimi",
    description: "State management ve API entegrasyonu",
    icon: "database"
  },
  {
    title: "Native Modüller",
    description: "Kamera, GPS ve cihaz özellikleri kullanımı",
    icon: "mobile"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    marginBottom: 20,
  },
  heroGradient: {
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#495057',
    marginTop: 10,
    textAlign: 'center',
  },
  heroStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  statLabel: {
    fontSize: 14,
    color: '#495057',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#dee2e6',
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#212529',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#6c5ce7',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  featureDesc: {
    fontSize: 14,
    color: '#fff',
  },
  topicsSection: {
    padding: 20,
  },
  topicsList: {
    gap: 15,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topicIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  topicDesc: {
    fontSize: 14,
    color: '#495057',
  },
  ctaSection: {
    padding: 20,
    paddingBottom: 40,
  },
  ctaCard: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  ctaText: {
    fontSize: 16,
    color: '#495057',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6c5ce7',
    padding: 15,
    borderRadius: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});