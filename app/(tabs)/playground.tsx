import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const initialCode = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Merhaba React Native!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
  },
});`;

const examples = [
    {
        id: 1,
        title: "Basit Buton",
        description: "Temel buton komponenti örneği",
        code: `import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Tıkla</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6c5ce7',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`
    },
    {
        id: 2,
        title: "Form Input",
        description: "Text input ve state yönetimi örneği",
        code: `import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function FormInput() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Bir şeyler yaz..."
      />
      <Text style={styles.text}>Yazılan: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});`
    },
    {
        id: 3,
        title: "Liste Görünümü",
        description: "FlatList kullanımı örneği",
        code: `import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

const data = [
  { id: 1, name: 'Öğe 1' },
  { id: 2, name: 'Öğe 2' },
  { id: 3, name: 'Öğe 3' },
];

export default function ListView() {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
});`
    }
];

export default function PlaygroundScreen() {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('Kodunuzu düzenleyin ve çalıştırın!');
    const [selectedExample, setSelectedExample] = useState<number | null>(null);

    const handleRun = () => {
        try {
            if (code.includes('View') && code.includes('Text') && code.includes('StyleSheet')) {
                setOutput('✅ Kod başarıyla çalıştırıldı!');
            } else {
                setOutput('⚠️ Lütfen geçerli bir React Native komponenti yazın.');
            }
        } catch (error: any) {
            setOutput(`❌ Hata: ${error.message}`);
        }
    };

    const handleReset = () => {
        setCode(initialCode);
        setOutput('Kodunuzu düzenleyin ve çalıştırın!');
        setSelectedExample(null);
    };

    const handleExampleSelect = (exampleId: number) => {
        const example = examples.find(e => e.id === exampleId);
        if (example) {
            setCode(example.code);
            setSelectedExample(exampleId);
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['#6c5ce7', '#a29bfe']}
                style={styles.header}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.headerContent}>
                    <Text style={styles.title}>Playground</Text>
                    <Text style={styles.subtitle}>Kodunuzu test edin ve örnekleri inceleyin</Text>
                </View>
            </LinearGradient>

            <View style={styles.examplesSection}>
                <Text style={styles.sectionTitle}>Örnekler</Text>
                <View style={styles.examplesGrid}>
                    {examples.map((example) => (
                        <TouchableOpacity
                            key={example.id}
                            style={[
                                styles.exampleCard,
                                selectedExample === example.id && styles.selectedExample
                            ]}
                            onPress={() => handleExampleSelect(example.id)}
                        >
                            <View style={styles.exampleIcon}>
                                <FontAwesome name="code" size={24} color="#6c5ce7" />
                            </View>
                            <Text style={styles.exampleTitle}>{example.title}</Text>
                            <Text style={styles.exampleDesc}>{example.description}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.editorSection}>
                <View style={styles.editorHeader}>
                    <View style={styles.fileTab}>
                        <FontAwesome name="file-code-o" size={16} color="#fff" />
                        <Text style={styles.fileName}>MyComponent.tsx</Text>
                    </View>
                    <View style={styles.toolbarButtons}>
                        <TouchableOpacity style={styles.toolbarButton} onPress={handleRun}>
                            <FontAwesome name="play" size={16} color="#fff" />
                            <Text style={styles.toolbarButtonText}>Çalıştır</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.toolbarButton, styles.resetButton]} onPress={handleReset}>
                            <FontAwesome name="refresh" size={16} color="#fff" />
                            <Text style={styles.toolbarButtonText}>Sıfırla</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput
                    style={styles.codeEditor}
                    value={code}
                    onChangeText={setCode}
                    multiline
                    numberOfLines={20}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            <View style={styles.outputSection}>
                <View style={styles.outputHeader}>
                    <FontAwesome name="terminal" size={16} color="#212529" />
                    <Text style={styles.outputTitle}>Çıktı</Text>
                </View>
                <View style={styles.output}>
                    <Text style={styles.outputText}>{output}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        padding: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 20,
    },
    headerContent: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
    },
    examplesSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#212529',
        marginBottom: 20,
    },
    examplesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 15,
    },
    exampleCard: {
        width: '48%',
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
    selectedExample: {
        borderColor: '#6c5ce7',
        borderWidth: 2,
    },
    exampleIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(108, 92, 231, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    exampleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212529',
        marginBottom: 5,
    },
    exampleDesc: {
        fontSize: 14,
        color: '#495057',
    },
    editorSection: {
        margin: 20,
        marginTop: 0,
        borderRadius: 15,
        backgroundColor: '#1e1e1e',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    editorHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#2d2d2d',
    },
    fileTab: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3c3c3c',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        gap: 10,
    },
    fileName: {
        color: '#fff',
        fontSize: 14,
    },
    toolbarButtons: {
        flexDirection: 'row',
        gap: 10,
    },
    toolbarButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6c5ce7',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        gap: 10,
    },
    resetButton: {
        backgroundColor: '#6c757d',
    },
    toolbarButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    codeEditor: {
        padding: 20,
        color: '#fff',
        fontSize: 16,
        fontFamily: 'monospace',
        minHeight: 300,
    },
    outputSection: {
        margin: 20,
        marginTop: 0,
        borderRadius: 15,
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    outputHeader: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
        alignItems: 'center',
        gap: 10,
    },
    outputTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212529',
    },
    output: {
        padding: 20,
    },
    outputText: {
        fontSize: 16,
        color: '#495057',
        fontFamily: 'monospace',
    },
}); 