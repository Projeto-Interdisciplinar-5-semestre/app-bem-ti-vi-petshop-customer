import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 16,
        backgroundColor: '#EADDFF',
        marginTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5
    },
    backButton: {
        position: 'absolute',
        left: 16,
        zIndex: 1
    },
    backIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Montserrat-Black',
        fontSize: 18,
        color: '#333',
        marginLeft: 20,
        marginRight: 8
    },
    menuIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginBottom: 5
    },
    sectionHeader: {
        paddingTop: 35,
        paddingBottom: 6,
        alignItems: 'center',
        marginBottom: 8
    },
    sectionTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#333',
        textAlign: 'center'
    },
    divider: {
        height: 3,
        backgroundColor: '#000',
        width: '65%',
        marginBottom: 10
    },
    formGroup: {
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 8
    },
    label: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginBottom: 6,
        marginLeft: 4
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 14,
        fontSize: 14,
        backgroundColor: 'rgba(236, 234, 234, 0.4)',
        fontFamily: 'Montserrat-Medium',
        marginTop: 4
    },
    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    porteGroup: {
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 8
    },
    porteContainer: {
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between'
    },
    porteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    porteButtonActive: {
        // Estilo adicional quando selecionado
    },
    porteRadio: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    porteRadioSelected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#6200EE'
    },
    porteLabel: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#333'
    },
    generoGroup: {
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 8
    },
    generoContainer: {
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'flex-start',
        gap: 30
    },
    generoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    generoButtonActive: {
        // Estilo adicional quando selecionado
    },
    generoRadio: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4
    },
    generoRadioSelected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#6200EE'
    },
    generoLabel: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#333'
    },
    imagePicker: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 14,
        backgroundColor: 'rgba(236, 234, 234, 0.4)',
        justifyContent: 'center',
        marginTop: 4
    },
    imagePickerActive: {
        borderColor: '#6200EE',
        backgroundColor: 'rgba(243, 237, 252, 0.7)'
    },
    imagePickerText: {
        color: '#999',
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        paddingVertical: 2
    },
    imagePickerTextActive: {
        color: '#6200EE',
        fontFamily: 'Montserrat-Medium'
    },
    imagePreviewContainer: {
        marginTop: 16,
        alignItems: 'center'
    },
    imagePreview: {
        width: 150,
        height: 150,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDD',
        resizeMode: 'cover'
    },
    submitButtonWrapper: {
        paddingHorizontal: 16,
        marginTop: 15,
        marginBottom: 30,
        alignSelf: 'center'
    },
    submitButton: {
        backgroundColor: '#006516',
        borderRadius: 35,
        width: '48%',
        height: 55,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    deleteButton: {
        backgroundColor: '#B40000',
        borderRadius: 35,
        width: '48%',
        height: 55,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 0.5
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        paddingVertical: 14,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 60,
        padding: 5,
        position: 'relative'
    },
    navIconContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36
    },
    activeIndicator: {
        position: 'absolute',
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#D3E5F5',
        zIndex: 0
    },
    navIcon: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
        zIndex: 1
    },
    navLabel: {
        fontSize: 12,
        color: '#333',
        fontFamily: 'Montserrat-Medium',
        marginTop: 2
    }
});
