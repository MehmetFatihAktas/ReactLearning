import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Theme from '../constants/theme';

// Placeholder renkler
const difficultyColors = {
    "Kolay": Theme.Colors.success,
    "Orta": Theme.Colors.warning,
    "Zor": Theme.Colors.error
};

const examples = [
    {
        id: 1,
        title: "Todo Uygulaması",
        description: "Temel CRUD işlemleri ile basit bir todo uygulaması",
        difficulty: "Kolay",
        icon: "list-ul"
    },
    {
        id: 2,
        title: "Hava Durumu",
        description: "API entegrasyonu ile hava durumu uygulaması",
        difficulty: "Orta",
        icon: "cloud"
    },
    {
        id: 3,
        title: "Chat Uygulaması",
        description: "Firebase ile gerçek zamanlı mesajlaşma uygulaması",
        difficulty: "Zor",
        icon: "comments"
    }
];

export default function ExamplesScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Örnek Projeler</Text>
                <Text style={styles.subtitle}>Öğrendiklerinizi pekiştirin</Text>
            </View>

            <View style={styles.exampleList}>
                {examples.map((example) => (
                    <TouchableOpacity
                        key={example.id}
                        style={styles.exampleCard}
                        onPress={() => {
                            // Burada ilerde örnek detay sayfasına yönlendirme yapılacak
                            console.log(`Örnek ${example.id} tıklandı`);
                        }}
                    >
                        <View
                            style={[
                                styles.exampleHeader,
                                { backgroundColor: difficultyColors[example.difficulty as keyof typeof difficultyColors] }
                            ]}
                        >
                            <FontAwesome name={example.icon as any} size={30} color={Theme.Colors.text.white} />
                            <View style={styles.difficultyContainer}>
                                <Text style={styles.difficultyText}>{example.difficulty}</Text>
                            </View>
                        </View>
                        <View style={styles.exampleContent}>
                            <Text style={styles.exampleTitle}>{example.title}</Text>
                            <Text style={styles.exampleDescription}>{example.description}</Text>
                            <TouchableOpacity style={styles.detailsButton}>
                                <Text style={styles.detailsButtonText}>Detayları Gör</Text>
                                <FontAwesome name="arrow-right" size={12} color={Theme.Colors.primary} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.Colors.background.light,
    },
    header: {
        padding: Theme.Spacing.section,
        backgroundColor: Theme.Colors.primary,
        borderBottomLeftRadius: Theme.BorderRadius.lg,
        borderBottomRightRadius: Theme.BorderRadius.lg,
    },
    title: {
        fontSize: Theme.FontSizes.title,
        fontWeight: 'bold',
        color: Theme.Colors.text.white,
    },
    subtitle: {
        fontSize: Theme.FontSizes.md,
        color: Theme.Colors.text.white,
        marginTop: Theme.Spacing.xs,
        opacity: 0.9,
    },
    exampleList: {
        padding: Theme.Spacing.lg,
    },
    exampleCard: {
        backgroundColor: Theme.Colors.background.card,
        borderRadius: Theme.BorderRadius.md,
        marginBottom: Theme.Spacing.lg,
        overflow: 'hidden',
        ...Theme.Shadows.medium,
    },
    exampleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Theme.Spacing.lg,
    },
    difficultyContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: Theme.Spacing.md,
        paddingVertical: Theme.Spacing.xs,
        borderRadius: Theme.BorderRadius.md,
    },
    difficultyText: {
        color: Theme.Colors.text.white,
        fontSize: Theme.FontSizes.sm,
        fontWeight: 'bold',
    },
    exampleContent: {
        padding: Theme.Spacing.lg,
    },
    exampleTitle: {
        fontSize: Theme.FontSizes.lg,
        fontWeight: 'bold',
        color: Theme.Colors.text.primary,
        marginBottom: Theme.Spacing.sm,
    },
    exampleDescription: {
        fontSize: Theme.FontSizes.sm,
        color: Theme.Colors.text.secondary,
        marginBottom: Theme.Spacing.lg,
    },
    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        gap: Theme.Spacing.sm,
    },
    detailsButtonText: {
        fontSize: Theme.FontSizes.sm,
        color: Theme.Colors.primary,
        fontWeight: '500',
    }
}); 