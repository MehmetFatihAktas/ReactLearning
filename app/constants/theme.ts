// Modern ve minimal tema
const Colors = {
    primary: '#FF6B6B', // Ana tema rengi (coral)
    secondary: '#4ECDC4', // İkincil renk (turquoise)
    accent: '#FFE66D', // Vurgu rengi (yellow)
    success: '#2ECC71', // Başarı rengi (green)
    error: '#FF4757', // Hata rengi (red)
    warning: '#FFA502', // Uyarı rengi (orange)
    info: '#1E90FF', // Bilgi rengi (blue)

    // Arka plan renkleri
    background: {
        light: '#F8F9FA',
        dark: '#2D3436',
        lightGray: '#F1F2F6',
        card: '#FFFFFF',
        gradient: {
            start: '#FF6B6B',
            end: '#4ECDC4'
        }
    },

    // Metin renkleri
    text: {
        primary: '#2D3436',
        secondary: '#636E72',
        light: '#B2BEC3',
        white: '#FFFFFF',
        dark: '#2D3436'
    },

    // Kenar çizgisi renkleri
    border: {
        light: '#DFE6E9',
        dark: '#636E72'
    }
};

// Font boyutları
const FontSizes = {
    tiny: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    title: 40,
    bigTitle: 48
};

// Kenar boşlukları
const Spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    xxxl: 48,
    section: 64
};

// Kenar yuvarlaklıkları
const BorderRadius = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    circle: 999
};

// Gölge stilleri
const Shadows = {
    none: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
    },
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 9
    }
};

// Animasyon süreleri
const Animation = {
    instant: 100,
    fast: 200,
    normal: 300,
    slow: 500,
    verySlow: 800
};

// Özel efektler
const Effects = {
    blur: {
        light: 5,
        medium: 10,
        heavy: 20
    },
    opacity: {
        light: 0.1,
        medium: 0.3,
        heavy: 0.5
    }
};

export default {
    Colors,
    FontSizes,
    Spacing,
    BorderRadius,
    Shadows,
    Animation,
    Effects
}; 