import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

export const StarRatingInput = ({ onChange }: { onChange: (value: number) => void }) => {
    const [rating, setRating] = useState<number>(3);

    const handlePress = (starIndex: number) => {
        setRating(starIndex);
        onChange(starIndex);
    };

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, i) => {
            const starNumber = i + 1;
            const source =
                starNumber <= rating
                    ? require('../../assets/images/star.png')
                    : require('../../assets/images/emptystar.png');

            return (
                <TouchableOpacity key={starNumber} onPress={() => handlePress(starNumber)}>
                    <Image source={source} style={styles.starIcon} />
                </TouchableOpacity>
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Avalie o serviço</Text>
            <View style={styles.starRow}>{renderStars()}</View>
        </View>
    );
};