import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function HomeScreen() {

    const router = useRouter();

    const products = [
        {
            id: '1',
            name: 'Premeirm Coffee Bean',
            price: '450',
            description: 'เมล็ดกาแฟพรีเมียม หอมเข้ม รสชาติกลมกล่อม',
            image: ''
        },
        {
            id: '2',
            name: 'Green Tea Powder',
            price: '290',
            description: 'ผงชาเขียวแท้ 100% สำหรับชงเครื่องดื่ม',
            image: ''
        },
        {
            id: '3',
            name: 'Oat Milk',
            price: '110',
            description: 'นมโอ๊ตเพื่อสุขภาพ ไม่มีแลคโตส',
            image: ''
        },
        {
            id: '4',
            name: 'Coffee',
            price: '120',
            description: 'กาแฟพร้อมดื่ม รสชาติเข้มข้น',
            image: ''
        },
    ];

    return (
        <ScrollView style={styles.container}>


            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <Text style={styles.greeting}>Market</Text>
                    <Ionicons name="cart-outline" size={28} color="#FFFFFF" />
                </View>
                <Text style={styles.subtitle}>เลือกซื้อสินค้าที่คุณชอบ</Text>
            </View>


            <View style={styles.grid}>
                {products.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.card}>
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            onPress={() =>
                                router.push({
                                    pathname: './detail',
                                    params: item,
                                })
                            }
                        ></TouchableOpacity>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>

                        <TouchableOpacity style={styles.cartButton}>
                            <Ionicons name="cart" size={16} color="#FFFFFF" />
                            <Text style={styles.cartText}>เพิ่ม</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    header: {
        backgroundColor: '#e59346',
        padding: 24,
        paddingTop: 20,
        paddingBottom: 30,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 14,
        color: '#E0E7FF',
        marginTop: 6,
    },
    grid: {
        padding: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        borderRadius: 12,
        padding: 10,
        marginBottom: 12,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F2937',
    },
    price: {
        fontSize: 13,
        color: '#4F46E5',
        marginVertical: 4,
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ad4f14',
        padding: 6,
        borderRadius: 8,
        marginTop: 6,
        gap: 4,
    },
    cartText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },
});