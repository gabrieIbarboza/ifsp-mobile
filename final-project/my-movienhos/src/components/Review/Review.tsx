import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThumbsUp, Info } from 'lucide-react-native';
import ActionButton from '../ActionButton/ActionButton';

export interface ReviewProps {
  username: string;
  rating: number;
  comment: string;
  likeCount: number;
  liked: boolean;
  onLike: () => void;
}

const Review: React.FC<ReviewProps> = ({ username, rating, comment, likeCount, liked, onLike }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      </View>
      <Text style={styles.comment}>{comment}</Text>
      <View style={styles.footer}>
        <View style={styles.likes}>
          <Text style={styles.likeCount}>{likeCount}</Text>
          <ActionButton
            active={liked}
            onActivate={onLike}
            onDeactivate={onLike}
            iconOn={<ThumbsUp size={18} color="#4da3ff" fill="#4da3ff" />}
            iconOff={<ThumbsUp size={18} color="#bdbdbd" />}
            style={{ backgroundColor: 'transparent', padding: 0, marginLeft: 2 }}
          />
        </View>
        <ActionButton
          active={false}
          onActivate={() => {}}
          onDeactivate={() => {}}
          iconOn={<Info size={18} color="#bdbdbd" />}
          iconOff={<Info size={18} color="#bdbdbd" />}
          style={{ backgroundColor: 'transparent', padding: 0 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23272f',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  rating: {
    color: '#4da3ff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  comment: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 10,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    color: '#fff',
    fontSize: 13,
    marginRight: 4,
  },
});

export default Review;
