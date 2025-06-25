import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
    },
    inputField: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    itemContainer: {
        marginTop: 16,
    },
    errorContainer: {
        backgroundColor: '#ffe5e5',
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
    },
    errorText: {
        color: '#d00',
        textAlign: 'center',
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },

    cardSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },

    cardText: {
        fontSize: 14,
        color: '#111',
    },

    cardSection: {
        marginTop: 10,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },

    itemRow: {
        marginLeft: 8,
        marginBottom: 4,
    },


    commentsContainer: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingTop: 10,
    },

    commentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },

    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    commentAuthor: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
    },

    commentRating: {
        flexDirection: 'row',
    },

    commentText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: '#555',
        lineHeight: 18,
        marginBottom: 8,
    },

    commentDate: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: '#999',
        textAlign: 'right',
    },

    commentContainer: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 20,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 12,
    },

    titleComment: {
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        lineHeight: 20,
        marginBottom: 10,
    },

    titleCommentMain: {
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        lineHeight: 20,
        marginVertical: 15,
    },

    starIcon: {
        width: 20,
        height: 20,
        marginRight: 2,
    },

    image: {
        width: 24,
        height: 24,
        borderRadius: 24,
        marginRight: 10,
    },

    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    ratingStarsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ratingText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#333',
        marginLeft: 8,
    },

    ratingTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#333',
        marginTop: 12,
        textAlign: 'center'
    },

    reviewsText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        color: '#666',
        marginLeft: 4,
    },
});
