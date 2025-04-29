import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const lessons = [
    {
        id: 1,
        title: "React Native'e Giriş",
        description: "React Native'in temel kavramları ve kurulum",
        duration: "45 dakika",
        level: "Başlangıç",
        icon: "rocket",
        progress: 100
    },
    {
        id: 2,
        title: "Temel Komponentler",
        description: "View, Text, Image ve diğer temel bileşenler",
        duration: "60 dakika",
        level: "Başlangıç",
        icon: "cubes",
        progress: 75
    },
    {
        id: 3,
        title: "Stil ve Layout",
        description: "Flexbox ile sayfa düzeni ve stillendirme",
        duration: "75 dakika",
        level: "Başlangıç",
        icon: "paint-brush",
        progress: 50
    },
    {
        id: 4,
        title: "State Yönetimi",
        description: "useState ve useEffect hooks kullanımı",
        duration: "90 dakika",
        level: "Orta",
        icon: "refresh",
        progress: 25
    },
    {
        id: 5,
        title: "Props ve Komponent İletişimi",
        description: "Komponentler arası veri aktarımı",
        duration: "60 dakika",
        level: "Orta",
        icon: "exchange",
        progress: 0
    },
    {
        id: 6,
        title: "Navigasyon",
        description: "Sayfalar arası geçiş ve parametre aktarımı",
        duration: "90 dakika",
        level: "Orta",
        icon: "location-arrow",
        progress: 0
    }
];

export default function LessonsScreen() {
    const navigateToLesson = (lessonId: number) => {
        router.push(`/lesson/${lessonId}`);
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
                    <Text style={styles.title}>Dersler</Text>
                    <Text style={styles.subtitle}>Adım adım React Native öğrenin</Text>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: '45%' }]} />
                        </View>
                        <Text style={styles.progressText}>%45 Tamamlandı</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.lessonList}>
                {lessons.map((lesson) => (
                    <TouchableOpacity
                        key={lesson.id}
                        style={styles.lessonCard}
                        onPress={() => navigateToLesson(lesson.id)}
                    >
                        <View style={styles.lessonIconContainer}>
                            <FontAwesome name={lesson.icon as any} size={24} color="#fff" />
                        </View>
                        <View style={styles.lessonContent}>
                            <View style={styles.lessonHeader}>
                                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                                <View style={[
                                    styles.levelBadge,
                                    { backgroundColor: lesson.level === "Başlangıç" ? '#00b894' : '#0984e3' }
                                ]}>
                                    <Text style={styles.levelText}>{lesson.level}</Text>
                                </View>
                            </View>
                            <Text style={styles.lessonDescription}>{lesson.description}</Text>
                            <View style={styles.lessonFooter}>
                                <View style={styles.progressBar}>
                                    <View style={[styles.progressFill, { width: `${lesson.progress}%` }]} />
                                </View>
                                <View style={styles.footerInfo}>
                                    <Text style={styles.duration}>
                                        <FontAwesome name="clock-o" size={14} color="#6c757d" /> {lesson.duration}
                                    </Text>
                                    <Text style={styles.progressText}>{lesson.progress}%</Text>
                                </View>
                            </View>
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
        marginBottom: 20,
    },
    progressContainer: {
        width: '100%',
        alignItems: 'center',
    },
    progressBar: {
        width: '100%',
        height: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 4,
        marginBottom: 10,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    progressText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    lessonList: {
        padding: 20,
    },
    lessonCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
    },
    lessonIconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#6c5ce7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lessonContent: {
        flex: 1,
        padding: 20,
    },
    lessonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    lessonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212529',
        flex: 1,
    },
    levelBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        marginLeft: 10,
    },
    levelText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    lessonDescription: {
        fontSize: 14,
        color: '#495057',
        marginBottom: 15,
    },
    lessonFooter: {
        marginTop: 10,
    },
    progressBar: {
        width: '100%',
        height: 6,
        backgroundColor: '#e9ecef',
        borderRadius: 3,
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#6c5ce7',
        borderRadius: 3,
    },
    footerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    duration: {
        fontSize: 14,
        color: '#6c757d',
    },
    progressText: {
        fontSize: 14,
        color: '#6c757d',
        fontWeight: 'bold',
    },
}); 