import { StyleSheet, Text, View } from 'react-native';

interface Props {
  id: string;
  name: string;
  price: string;
  description: string;
}

export default function ProductDetail({ name, price, description }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price} บาท</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#4F46E5',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#374151',
  },
});