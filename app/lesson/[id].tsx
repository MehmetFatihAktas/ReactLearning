import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Theme from '../constants/theme';

// Tüm derslerin içeriğini tanımlayalım
const lessonContents = {
  "1": {
    title: "React Native'e Giriş",
    description: "React Native'in temel kavramları ve kurulum",
    duration: "45 dakika",
    level: "Başlangıç",
    sections: [
      {
        title: "React Native Nedir?",
        content: `React Native, Facebook tarafından geliştirilen açık kaynaklı bir mobil uygulama geliştirme framework'üdür. JavaScript ve React kütüphanesini kullanarak iOS ve Android platformları için native (yerel) mobil uygulamalar geliştirmenizi sağlar.

React Native'in en önemli özelliği "Learn once, write anywhere" (Bir kere öğren, her yerde yaz) felsefesidir. Bu, yazılımcıların tek bir kod tabanıyla birden fazla platformda çalışan uygulamalar geliştirebilmesi anlamına gelir.`
      },
      {
        title: "React Native vs Native Geliştirme",
        content: `Native mobil uygulama geliştirme, iOS için Swift/Objective-C ve Android için Kotlin/Java dillerini kullanmayı gerektirir. Bu yaklaşım, her platform için ayrı kod tabanı ve geliştirme ekibi anlamına gelir.

React Native ile:
• Tek kod tabanı: Her iki platform için aynı JavaScript/React kodunu kullanabilirsiniz.
• Hızlı geliştirme: Hot Reloading özelliği ile değişiklikleri anında görebilirsiniz.
• Geniş ekosistem: NPM üzerindeki binlerce paketi kullanabilirsiniz.
• Topluluk desteği: Büyük bir geliştirici topluluğu ve hazır çözümler mevcuttur.`
      },
      {
        title: "Geliştirme Ortamı Kurulumu",
        content: `React Native uygulaması geliştirmek için iki temel yaklaşım vardır:

1. Expo CLI: Hızlı başlangıç için ideal, minimum yapılandırma gerektirir.
2. React Native CLI: Daha fazla özelleştirme ve native modüllere erişim sağlar.

Expo ile başlamak için:
\`\`\`
# Expo CLI'yi global olarak yükleyin
npm install -g expo-cli

# Yeni bir proje oluşturun
expo init MerhabaDunya

# Projeye gidin
cd MerhabaDunya

# Uygulamayı başlatın
expo start
\`\`\`

React Native CLI ile başlamak için:
\`\`\`
# React Native CLI'yi global olarak yükleyin
npm install -g react-native-cli

# Yeni bir proje oluşturun
npx react-native init MerhabaDunya

# Projeye gidin
cd MerhabaDunya

# Uygulamayı başlatın
npx react-native run-android  # veya run-ios
\`\`\`

Gerekli yazılımlar:
• Node.js ve npm
• VSCode veya başka bir IDE
• iOS için XCode (Mac gerektirir)
• Android için Android Studio ve JDK`
      }
    ]
  },
  "2": {
    title: "Temel Komponentler",
    description: "View, Text, Image ve diğer temel bileşenler",
    duration: "60 dakika",
    level: "Başlangıç",
    sections: [
      {
        title: "React Native'de Komponentler",
        content: `React Native, kullanıcı arayüzü oluşturmak için bir dizi temel komponent sunar. Bu komponentler, native platformun kendi UI bileşenlerine derlenirler. Örneğin bir React Native \`Text\` komponenti iOS'ta bir \`UITextView\`'a, Android'de ise bir \`TextView\`'a dönüştürülür.

Tüm React Native uygulamaları, bu temel komponentlerin birleşiminden oluşur. Komponentleri anlamak, React Native ile uygulama geliştirmenin temelidir.`
      },
      {
        title: "Temel UI Komponentleri",
        content: `1. **View**: Temel yapı bloğu, HTML'deki div elementine benzer
\`\`\`jsx
<View style={styles.container}>
  {/* İçerik */}
</View>
\`\`\`

2. **Text**: Metin gösterme komponenti
\`\`\`jsx
<Text style={styles.text}>Merhaba Dünya!</Text>
\`\`\`

3. **Image**: Resim gösterme komponenti
\`\`\`jsx
<Image 
  source={require('./assets/logo.png')} 
  style={styles.image} 
/>
// veya
<Image 
  source={{uri: 'https://example.com/logo.png'}} 
  style={styles.image} 
/>
\`\`\`

4. **TextInput**: Kullanıcı veri girişi
\`\`\`jsx
<TextInput
  style={styles.input}
  placeholder="Adınızı girin"
  onChangeText={text => setValue(text)}
/>
\`\`\`

5. **ScrollView**: Kaydırılabilir içerik
\`\`\`jsx
<ScrollView>
  {/* Uzun içerik */}
</ScrollView>
\`\`\`

6. **FlatList**: Büyük veri listeleri için optimize edilmiş
\`\`\`jsx
<FlatList
  data={DATA}
  renderItem={({item}) => <Item title={item.title} />}
  keyExtractor={item => item.id}
/>
\`\`\`

7. **Button**: Basit buton komponenti
\`\`\`jsx
<Button
  title="Tıkla"
  onPress={() => alert('Tıklandı!')}
/>
\`\`\`

8. **TouchableOpacity**: Tıklanabilir komponent
\`\`\`jsx
<TouchableOpacity onPress={() => alert('Tıklandı!')}>
  <Text>Bana Tıkla</Text>
</TouchableOpacity>
\`\`\``
      },
      {
        title: "Props ve State",
        content: `React Native'de, komponentler iki tür veriyle çalışır: Props ve State.

**Props (Özellikler)**:
- Komponentlere dışarıdan verilen değişmez verilerdir
- Üst komponentten alt komponente aktarılır
- Komponentin davranışını ve görünümünü yapılandırır

\`\`\`jsx
// Tanımlama
function Selamlama(props) {
  return <Text>Merhaba, {props.isim}!</Text>;
}

// Kullanım
<Selamlama isim="Ahmet" />
\`\`\`

**State (Durum)**:
- Komponentin kendi içinde değişebilen verilerdir
- Kullanıcı etkileşimleri veya ağ yanıtları gibi nedenlerle değişebilir
- useState hook'u ile fonksiyonel komponentlerde kullanılır

\`\`\`jsx
import React, { useState } from 'react';

function Sayac() {
  const [sayi, setSayi] = useState(0);
  
  return (
    <View>
      <Text>Sayaç: {sayi}</Text>
      <Button title="Artır" onPress={() => setSayi(sayi + 1)} />
    </View>
  );
}
\`\`\`

Props ve State birlikte kullanılarak interaktif ve dinamik kullanıcı arayüzleri oluşturulur.`
      }
    ]
  },
  "3": {
    title: "Stil ve Layout",
    description: "Flexbox ile sayfa düzeni ve stillendirme",
    duration: "75 dakika",
    level: "Başlangıç",
    sections: [
      {
        title: "React Native'de Stillendirme",
        content: `React Native'de stillendirme, CSS'e benzer ancak camelCase kullanılan bir yapıyla yapılır. HTML/CSS'den farklı olarak, tüm boyutlar piksel değeri olmadan sayısal değerler olarak belirtilir.

Stillendirme için \`StyleSheet.create()\` API'si kullanılır. Bu, performans optimizasyonu sağlar ve stil nesnelerini bir kez oluşturarak yeniden render işlemlerinde tekrar tekrar oluşturulmasını önler.

\`\`\`jsx
import { StyleSheet } from 'react-native';

// Stil tanımlama
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  }
});

// Kullanım
<View style={styles.container}>
  <Text style={styles.text}>Merhaba Dünya!</Text>
</View>
\`\`\`

Birden fazla stili birleştirmek de mümkündür:
\`\`\`jsx
<Text style={[styles.text, styles.bigText]}>Büyük Metin</Text>
\`\`\`

Inline stil de kullanılabilir, ancak genellikle performans için StyleSheet önerilir:
\`\`\`jsx
<Text style={{ color: 'red', fontSize: 20 }}>Kırmızı Metin</Text>
\`\`\``
      },
      {
        title: "Flexbox Layout",
        content: `React Native, komponentlerin düzenlenmesi için Flexbox layout sistemini kullanır. Flexbox, farklı ekran boyutlarında tutarlı görünmesi gereken arayüzler oluşturmak için güçlü bir araçtır.

**Temel Flexbox Özellikleri**:

1. **flex**: Komponentin ne kadar alan kaplayacağını belirler
\`\`\`jsx
container: {
  flex: 1, // Mevcut tüm alanı kaplar
}
\`\`\`

2. **flexDirection**: Ana eksenin yönünü belirler (row, column)
\`\`\`jsx
container: {
  flexDirection: 'row', // Yatay düzenleme
  // veya
  flexDirection: 'column', // Dikey düzenleme (varsayılan)
}
\`\`\`

3. **justifyContent**: Ana eksende hizalama
\`\`\`jsx
container: {
  justifyContent: 'center', // Merkeze hizalama
  // Diğer değerler: 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'
}
\`\`\`

4. **alignItems**: Çapraz eksende hizalama
\`\`\`jsx
container: {
  alignItems: 'center', // Merkeze hizalama
  // Diğer değerler: 'flex-start', 'flex-end', 'stretch', 'baseline'
}
\`\`\`

5. **flexWrap**: Öğelerin sarmalanmasını kontrol eder
\`\`\`jsx
container: {
  flexWrap: 'wrap', // Öğeler sığmazsa alt satıra geçer
  // veya
  flexWrap: 'nowrap', // Öğeler sarmalanmaz (varsayılan)
}
\`\`\``
      },
      {
        title: "Responsive Tasarım",
        content: `Farklı ekran boyutlarına uyumlu uygulamalar geliştirmek için React Native'de bazı stratejiler:

1. **Dimensions API**: Ekran boyutlarını alma
\`\`\`jsx
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.8, // Ekran genişliğinin %80'i
  }
});
\`\`\`

2. **Platform-spesifik Kodlar**: iOS ve Android için farklı stiller
\`\`\`jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  }
});
\`\`\`

3. **Yüzde Değerleri**: Göreceli boyutlar kullanma
\`\`\`jsx
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '50%',
  }
});
\`\`\`

4. **Aspect Ratio**: Genişlik/yükseklik oranını koruma
\`\`\`jsx
image: {
  width: '100%',
  aspectRatio: 16 / 9, // 16:9 oranı
}
\`\`\``
      }
    ]
  }
};

export default function LessonDetailsScreen() {
  // URL'den ders ID'sini al
  const { id } = useLocalSearchParams();

  // ID'ye göre ders içeriği
  const lesson = lessonContents[id as keyof typeof lessonContents];

  // Eğer ders bulunamazsa
  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Ders bulunamadı!</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Derslere Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <FontAwesome name="arrow-left" size={16} color="#fff" />
        <Text style={styles.backButtonText}>Derslere Dön</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>{lesson.title}</Text>
        <View style={styles.lessonInfo}>
          <Text style={styles.duration}>⏱ {lesson.duration}</Text>
          <View style={[
            styles.levelBadge,
            { backgroundColor: lesson.level === "Başlangıç" ? "#4CAF50" : "#2196F3" }
          ]}>
            <Text style={styles.levelText}>{lesson.level}</Text>
          </View>
        </View>
        <Text style={styles.description}>{lesson.description}</Text>
      </View>

      <View style={styles.content}>
        {lesson.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}
      </View>

      <View style={styles.navigationButtons}>
        {parseInt(id as string) > 1 && (
          <TouchableOpacity
            style={[styles.navButton, styles.prevButton]}
            onPress={() => router.push(`/lesson/${parseInt(id as string) - 1}`)}
          >
            <FontAwesome name="arrow-left" size={14} color="#fff" />
            <Text style={styles.navButtonText}>Önceki Ders</Text>
          </TouchableOpacity>
        )}

        {parseInt(id as string) < Object.keys(lessonContents).length && (
          <TouchableOpacity
            style={[styles.navButton, styles.nextButton]}
            onPress={() => router.push(`/lesson/${parseInt(id as string) + 1}`)}
          >
            <Text style={styles.navButtonText}>Sonraki Ders</Text>
            <FontAwesome name="arrow-right" size={14} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.background.light,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.Colors.primary,
    paddingVertical: Theme.Spacing.sm,
    paddingHorizontal: Theme.Spacing.lg,
    borderRadius: Theme.BorderRadius.md,
    alignSelf: 'flex-start',
    margin: Theme.Spacing.lg,
    gap: Theme.Spacing.sm,
    ...Theme.Shadows.small,
  },
  backButtonText: {
    color: Theme.Colors.text.white,
    fontWeight: '500',
  },
  header: {
    padding: Theme.Spacing.section,
    backgroundColor: Theme.Colors.background.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: Theme.Colors.border.light,
  },
  title: {
    fontSize: Theme.FontSizes.xxl,
    fontWeight: 'bold',
    color: Theme.Colors.primary,
    marginBottom: Theme.Spacing.md,
  },
  lessonInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.Spacing.md,
  },
  duration: {
    fontSize: Theme.FontSizes.sm,
    color: Theme.Colors.text.secondary,
    marginRight: Theme.Spacing.lg,
  },
  levelBadge: {
    paddingHorizontal: Theme.Spacing.sm,
    paddingVertical: Theme.Spacing.xs,
    borderRadius: Theme.BorderRadius.md,
  },
  levelText: {
    color: Theme.Colors.text.white,
    fontSize: Theme.FontSizes.xs,
    fontWeight: 'bold',
  },
  description: {
    fontSize: Theme.FontSizes.md,
    color: Theme.Colors.text.secondary,
  },
  content: {
    padding: Theme.Spacing.section,
  },
  section: {
    marginBottom: Theme.Spacing.section,
  },
  sectionTitle: {
    fontSize: Theme.FontSizes.xl,
    fontWeight: 'bold',
    color: Theme.Colors.text.primary,
    marginBottom: Theme.Spacing.md,
    backgroundColor: Theme.Colors.background.lightGray,
    padding: Theme.Spacing.md,
    borderRadius: Theme.BorderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: Theme.Colors.primary,
    ...Theme.Shadows.small,
  },
  sectionContent: {
    fontSize: Theme.FontSizes.md,
    lineHeight: 24,
    color: Theme.Colors.text.secondary,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Theme.Spacing.section,
    paddingTop: Theme.Spacing.md,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.Colors.primary,
    paddingVertical: Theme.Spacing.md,
    paddingHorizontal: Theme.Spacing.lg,
    borderRadius: Theme.BorderRadius.md,
    gap: Theme.Spacing.sm,
    ...Theme.Shadows.small,
  },
  prevButton: {
    backgroundColor: Theme.Colors.text.secondary,
  },
  nextButton: {
    backgroundColor: Theme.Colors.success,
  },
  navButtonText: {
    color: Theme.Colors.text.white,
    fontWeight: '500',
  },
  errorText: {
    fontSize: Theme.FontSizes.lg,
    color: Theme.Colors.error,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: Theme.Spacing.section,
  },
}); 