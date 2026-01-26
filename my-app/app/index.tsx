import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';

const DATA =[
  {id: '1', title: 'การใช้ View'},
  {id: '2', title: 'การใช้ Text'},
  {id: '3', title: 'การใช้ ScrollView'},
  {id: '4', title: 'การใช้ FlatList'},
]

const App = () => {

  const renderItem = ({ item }: { item: {id: string; title: string } }) => (
    <View style ={styles.itemContainer}>
      <View style={styles.dot} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
    
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
       {/* contentContainerStyle คือการกำหนดสไตล์กับเนื้อหาภายใน*/ }
       {/* ส่วนหัวข้อ */}
      <View style={styles.header}>
         <Text style={styles.headerText}>My Profile</Text>
      </View>
      {/* การใช้flexbox */}

      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'red'}]}>
          <Text style={styles.headerText}>รหัส</Text>
          <Text style={styles.boxText}>66112032</Text>
        
        </View>
        <View style={[styles.box, { backgroundColor: 'purple'}]}>
          <Text style={styles.headerText}>คณะ</Text>
          <Text style={styles.boxText}>วิศวะ</Text>

        </View>

        <View style={[styles.box, { backgroundColor: 'green'}]}>
          <Text style={styles.headerText}>สาขา</Text>
          <Text style={styles.boxText}>คอมพิวเตอร์</Text>

        </View>

      </View>

      {/* ตัวอย่างเนื้อหา */}

      <View style={styles.contentSection}>
        <Text style={styles.title}>ข้อมูลส่วนตัว:</Text>
        {Array.from({ length: 10 }).map((_, index) =>(
          <View key={index} style ={styles.listItem}>
            <Text>รายการที่ {index + 1}: เรียนรู้เรื่อง React Native Layout</Text>

          </View>
        ))}
        
      </View>

      <View style={styles.contentSection}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.headerFlatList}>หัวข้อที่หน้าสนใจ</Text>}
        />

      </View>
        
    </ScrollView>
  );
};

const styles =StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText:{
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height:100,
    marginHorizontal: 5,
    justifyContent: 'center',
    borderRadius: 8,
  },
  boxText: {
    color: 'white',
    fontWeight: '600',
  },
  contentSection:{
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#1A535C'
  },
  contentSectionFlalist: {
    marginTop: 20,
  },
  headerFlatList: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#2238d7ff'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  }
});

export default App;