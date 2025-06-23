import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollView: {
        flex: 1,
        marginBottom: 70
    },
    scrollContent: {
        paddingBottom: 30,
        paddingHorizontal: 16
    },

    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Seção "Meus Serviços"
    sectionHeader: {
        paddingTop: 35,
        paddingBottom: 6,
        alignItems: 'center',
        marginBottom: 8
    },
    sectionTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: '#333',
        textAlign: 'center'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 45,
        marginHorizontal: 16,
        marginBottom: 30, // Aumentado o espaçamento inferior
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: '#666',
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#333',
        paddingVertical: 0,
        paddingTop: 0,
        includeFontPadding: false,
        textAlignVertical: 'center',
        marginTop: 0,
        paddingBottom: 0,
    },
    servicosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    servicoCard: {
        width: '48%',
        marginBottom: 16,
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    cardContent: {
        width: '100%',
    },
    servicoImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    servicoInfo: {
        padding: 12,
    },
    servicoNome: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
        height: 40, // Altura fixa para alinhar os preços
    },
    precoContainer: {
        marginTop: 'auto' // Alinha no fundo do card
    },
    precoLabel: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
        textAlign: 'left',
    },
    servicoPreco: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#4CAF50',
        textAlign: 'left',
    },
    starIcon: {
        width: 16,
        height: 16,
        marginRight: 2,
    },
    filledStar: {
        tintColor: '#FFD700',
    },
    emptyStar: {
        tintColor: '#C0C0C0',
    },
    ratingText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginLeft: 8,
    },
    reviewsText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#666',
        marginLeft: 4,
    },

    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: '#555',
        lineHeight: 18,
        marginBottom: 8,
    },
    date: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: '#999',
        textAlign: 'right',
    },

    // Container do Botão
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20
    },

    // Botão Agendar Serviço
    agendarButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#258952',
        borderRadius: 35,
        width: '100%',
        maxWidth: 300,
        height: 55,
        padding: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    agendarButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 0.5,
        marginRight: 10
    },
    checkIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF'
    },

    // Card do Serviço
    card: {
        backgroundColor: '#F8F8F8',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
        overflow: 'hidden'
    },

    // Container de Horário
    horarioContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        height: 48,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#256489',
        marginBottom: 20,
        alignSelf: 'center',
        width: '100%',
        maxWidth: 200
    },
    horarioText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#256489'
    },

    // Tabela de Descrição
    descricaoTable: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 30,
        overflow: 'hidden',
        marginBottom: 10
    },
    tableHeader: {
        backgroundColor: '#256489',
        padding: 12,
        alignItems: 'center'
    },
    tableHeaderText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    tableBody: {
        backgroundColor: '#FFFFFF',
        padding: 12
    },
    descricaoText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#666',
        lineHeight: 20
    },

    // Rating Section
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    ratingStarsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greetingContainer: {
        paddingHorizontal: 16,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center'
    },
    greetingText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: '#333',
        textAlign: 'center'
    },

});

