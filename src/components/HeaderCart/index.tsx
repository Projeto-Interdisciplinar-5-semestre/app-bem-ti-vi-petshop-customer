import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { styles } from "./style";

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

export const HeaderCart = ({title, activateBackButton = false, icon, onBackPress, navigation, showCart = false, cartCount = 0, onCartPress}: HeaderProps) => {
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

