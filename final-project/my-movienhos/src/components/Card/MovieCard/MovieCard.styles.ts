import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    highlightedWrapper: {
        alignItems: 'center',
        marginHorizontal: 12,
        marginBottom: 8,
        width: 140,
    },
    highlightedCard: {
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
        backgroundColor: '#111',
    },
    highlightedImage: {
        width: 140,
        height: 200,
        borderRadius: 16,
        resizeMode: 'cover',
    },
    highlightedNumber: {
        position: 'absolute',
        left: 8,
        bottom: 0,
        fontSize: 56,
        fontWeight: 'bold',
        color: '#1a2b3c',
        opacity: 0.7,
        textShadowColor: '#fff',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 6,
        zIndex: 2,
    },
    numberBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#222',
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    numberText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    detailedCard: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        backgroundColor: '#23272f',
        borderRadius: 8,
        padding: 8,
    },
    details: {
        marginLeft: 12,
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 2,
        color: '#fff',
    },
    info: {
        color: '#888',
        fontSize: 14,
        marginBottom: 2,
    },
    genres: {
        color: '#666',
        fontSize: 14,
        marginBottom: 2,
        flexShrink: 1,
        flexWrap: 'wrap',
        maxWidth: 120,
        overflow: 'hidden',
    },
    rating: {
        color: '#e3b341',
        fontWeight: 'bold',
        fontSize: 14,
    },
    defaultCard: {
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 8,
        backgroundColor: '#ccc',
    },
});

export default styles;
