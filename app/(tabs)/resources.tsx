import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Linking } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Theme from '../constants/theme';

const resources = [
    {
        id: 1,
        title: "Resmi Dokümantasyon",
        description: "React Native'in resmi dokümantasyonu",
        url: "https://reactnative.dev/docs/getting-started",
        icon: "book"
    },
    {
        id: 2,
        title: "Expo Dokümantasyonu",
        description: "Expo framework dokümantasyonu",
        url: "https://docs.expo.dev",
        icon: "rocket"
    },
    {
        id: 3,
        title: "React Native GitHub",
        description: "React Native'in açık kaynak kodları",
        url: "https://github.com/facebook/react-native",
        icon: "github"
    },
    {
        id: 4,
        title: "React Native Elements",
        description: "UI component kütüphanesi",
        url: "https://reactnativeelements.com",
        icon: "cubes"
    },
    {
        id: 5,
        title: "React Navigation",
        description: "Routing ve navigasyon kütüphanesi",
        url: "https://reactnavigation.org",
        icon: "compass"
    }
];

const communities = [
    {
        id: 1,
        title: "React Native Türkiye",
        description: "Türkiye'deki React Native topluluğu",
        url: "https://discord.gg/reactnative-tr",
        platform: "Discord",
        icon: "discord"
    },
    {
        id: 2,
        title: "React Native Community",
        description: "Global React Native topluluğu",
        url: "https://www.reddit.com/r/reactnative/",
        platform: "Reddit",
        icon: "reddit"
    }
];

export default function ResourcesScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Kaynaklar</Text>
                <Text style={styles.subtitle}>Faydalı linkler ve topluluklar</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dokümantasyon ve Araçlar</Text>
                {resources.map((resource) => (
                    <TouchableOpacity
                        key={resource.id}
                        style={styles.resourceCard}
                        onPress={() => Linking.openURL(resource.url)}
                    >
                        <View style={[styles.resourceIcon, { backgroundColor: Theme.Colors.primary }]}>
                            <FontAwesome name={resource.icon as any} size={24} color={Theme.Colors.text.white} />
                        </View>
                        <View style={styles.resourceContent}>
                            <Text style={styles.resourceTitle}>{resource.title}</Text>
                            <Text style={styles.resourceDescription}>{resource.description}</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <FontAwesome name="external-link" size={16} color={Theme.Colors.primary} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Topluluklar</Text>
                {communities.map((community) => (
                    <TouchableOpacity
                        key={community.id}
                        style={styles.resourceCard}
                        onPress={() => Linking.openURL(community.url)}
                    >
                        <View style={[styles.resourceIcon, { backgroundColor: Theme.Colors.secondary }]}>
                            <FontAwesome
                                name={community.icon as any}
                                size={24}
                                color={Theme.Colors.text.white}
                            />
                        </View>
                        <View style={styles.resourceContent}>
                            <Text style={styles.resourceTitle}>{community.title}</Text>
                            <Text style={styles.resourceDescription}>{community.description}</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <FontAwesome name="external-link" size={16} color={Theme.Colors.secondary} />
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
    section: {
        padding: Theme.Spacing.lg,
    },
    sectionTitle: {
        fontSize: Theme.FontSizes.xl,
        fontWeight: 'bold',
        color: Theme.Colors.text.primary,
        marginBottom: Theme.Spacing.lg,
        paddingBottom: Theme.Spacing.sm,
        borderBottomWidth: 2,
        borderBottomColor: Theme.Colors.primary,
    },
    resourceCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.Colors.background.card,
        borderRadius: Theme.BorderRadius.md,
        padding: Theme.Spacing.lg,
        marginBottom: Theme.Spacing.md,
        ...Theme.Shadows.small,
    },
    resourceIcon: {
        width: 46,
        height: 46,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Theme.Spacing.md,
    },
    resourceContent: {
        flex: 1,
    },
    resourceTitle: {
        fontSize: Theme.FontSizes.lg,
        fontWeight: 'bold',
        color: Theme.Colors.text.primary,
        marginBottom: Theme.Spacing.xs,
    },
    resourceDescription: {
        fontSize: Theme.FontSizes.sm,
        color: Theme.Colors.text.secondary,
    },
    arrowContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
}); 