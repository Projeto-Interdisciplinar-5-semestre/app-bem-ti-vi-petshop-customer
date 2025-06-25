import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    servicosContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        gap: 16,
        marginTop: 8,
    },
    servicoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        overflow: 'hidden',
    },
    cardContent: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
    },
    servicoImage: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginRight: 12,
        backgroundColor: '#E5E7EB',
    },
    servicoInfo: {
        flex: 1,
        justifyContent: 'space-between',
    },
    servicoNome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 4,
    },
    ratingStarsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        gap: 4,
    },
    starIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    ratingText: {
        fontSize: 14,
        color: '#6B7280',
        marginLeft: 4,
    },
    precoContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    precoLabel: {
        fontSize: 12,
        color: '#6B7280',
    },
    servicoPreco: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#10B981',
    },
    date: {
        position: 'absolute',
        right: 12,
        bottom: 12,
        fontSize: 12,
        color: '#9CA3AF',
    },
});
