import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import styles from './MovieCard.styles';
import { MovieCardProps } from './MovieCard.types';
import { IconText } from '../../IconText/IconText';
import { Star } from 'lucide-react-native';

function getImageSource(image: string | ImageSourcePropType) {
    if (typeof image === 'string') {
        return { uri: image };
    }
    return image;
}

export const MovieCard: React.FC<MovieCardProps> = ({ card }) => {
    if (card.variant === 'highlighted') {
        return (
            <View style={styles.highlightedWrapper}>
                <TouchableOpacity onPress={card.onPress} style={styles.highlightedCard} activeOpacity={0.85}>
                    <Image source={getImageSource(card.image)} style={styles.highlightedImage} />
                </TouchableOpacity>
                <Text style={styles.highlightedNumber}>{card.number}</Text>
            </View>
        );
    }
    if (card.variant === 'detailed') {
        return (
            <TouchableOpacity onPress={card.onPress} style={styles.detailedCard}>
                <Image source={getImageSource(card.image)} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.title}>{card.title}</Text>
                    <Text style={styles.info}>{card.year} • {card.duration}</Text>
                    <Text style={styles.genres} numberOfLines={1} ellipsizeMode="tail">{card.genres.join(', ')}</Text>
                    <IconText
                        icon={<Star size={16} color="#e3b341" fill="#e3b341" />}
                        text={String(card.rating)}
                        textStyle={styles.rating}
                    />
                </View>
            </TouchableOpacity>
        );
    }
    // Default
    return (
        <TouchableOpacity onPress={card.onPress} style={styles.defaultCard}>
            <Image source={getImageSource(card.image)} style={styles.image} />
        </TouchableOpacity>
    );
};
