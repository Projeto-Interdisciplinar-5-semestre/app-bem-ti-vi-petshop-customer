import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#F9F9F9'
    },

    container: {
        paddingTop: 20,
        paddingBottom: 80, // espaço para NavigationBar
        paddingHorizontal: 16
    },

    profileSection: {
        alignItems: 'center',
        marginBottom: 25
    },

    profileImage: {
        width: "100%",
        height: 80,
        borderRadius: 60,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#E8F4FD'
    },

    clientName: {
        fontSize: 18,
        color: '#2D3748',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        marginTop: 4
    },

    section: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2
    },

    sectionHeader: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EDF2F7'
    },

    sectionTitle: {
        fontSize: 16,
        color: '#2D3748',
        fontFamily: 'Montserrat-SemiBold'
    },

    fieldContainer: {
        padding: 16
    },

    fieldRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14,
        flexWrap: 'wrap',
        gap: 6
    },

    label: {
        fontSize: 13,
        color: '#718096',
        fontFamily: 'Montserrat-Medium',
        flex: 1
    },

    value: {
        fontSize: 14,
        color: '#2D3748',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'right',
        flex: 1
    },

    qrCodeImage: {
        width: 200,
        height: 200,
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CBD5E0'
    },

    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10
    }
});
