import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface HeaderProps {
    title: string;
    activateBackButton?: boolean;
    icon?: any;
    onBackPress?: () => void;
    navigation?: any;
    showCart?: boolean;
    cartCount?: number;
    onCartPress?: () => void;
}

export const Header = ({
    title,
    activateBackButton = false,
    icon,
    onBackPress,
    navigation,
    showCart = false,
    cartCount = 0,
    onCartPress
}: HeaderProps) => {
    return (
        <View style={styles.header}>
            {activateBackButton && 
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={onBackPress || (() => navigation?.goBack())}
                >
                    <Image
                        source={require('../../assets/icons/arrow_back.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
            }

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {icon && (
                    <Image
                        source={icon}
                        style={styles.menuIcon}
                    />
                )}
            </View>

            {showCart && (
                <TouchableOpacity 
                    style={styles.cartButton}
                    onPress={onCartPress}
                >
                    <Image
                        source={require('../../assets/images/carrinho.png')}
                        style={styles.cartIcon}
                    />
                    {cartCount > 0 && (
                        <View style={styles.cartBadge}>
                            <Text style={styles.cartBadgeText}>{cartCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
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
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: 'Montserrat-Black', // Fonte adicionada aqui
        color: '#333',
        marginRight: 8
    },
    menuIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    backIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    cartButton: {
        position: 'absolute',
        right: 16,
        padding: 4,
    },
    cartIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: '#333'
    },
    cartBadge: {
        position: 'absolute',
        top: -2,
        right: -2,
        backgroundColor: '#FF3D00',
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Montserrat-Bold', // Fonte adicionada aqui
    }
});