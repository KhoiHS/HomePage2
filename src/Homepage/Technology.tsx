import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    image: require('../assets/dog1.png'), 
    text1: 'Tiêu đề: aaaaaa',
    text2: 'Nội dung: Lorem ipsum dolor sit amet.',
    text3: 'Ngày tháng: 12/12/2024.',
  },
  {
    id: '2',
    image: require('../assets/dog1.png'), 
    text1: 'Tiêu đề: bbbbbb',
    text2: 'Nội dung: Lorem ipsum dolor sit amet.',
    text3: 'Ngày tháng: 12/12/2024',
  },
  {
    id: '3',
    image: require('../assets/dog1.png'), 
    text1: 'Tiêu đề: cccccc',
    text2: 'Nội dung: Lorem ipsum dolor sit amet.',
    text3: 'Ngày tháng: 12/12/2024',
  },
  {
    id: '4',
    image: require('../assets/dog1.png'), 
    text1: 'Tiêu đề: dddddd',
    text2: 'Nội dung: Lorem ipsum dolor sit amet.',
    text3: 'Ngày tháng: 12/12/2024',
  },
  {
    id: '5',
    image: require('../assets/dog1.png'), 
    text1: 'Tiêu đề: eeeeee',
    text2: 'Nội dung: Lorem ipsum dolor sit amet.',
    text3: 'Ngày tháng: 12/12/2024',
  },
  {
    id: '6',
    image: require('../assets/dog1.png'), 
    text1: 'Tiêu đề: ffffff',
    text2: 'Nội dung: Lorem ipsum dolor sit amet.',
    text3: 'Ngày tháng: 12/12/2024',
  },
];

const Technology = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => navigation.navigate('DetailsTechnologyPage', { item })}
    >
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.text1}</Text>
        <Text style={styles.itemText}>{item.text2}</Text>
        <Text style={styles.itemText}>{item.text3}</Text>
      </View>
    </TouchableOpacity>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles.group}>
        <TouchableOpacity>
          <Image 
            source={require('../assets/menu.png')} 
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.groupText}>Công nghệ</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator} 
        style={styles.flatList}
      />
      <View style={styles.taskbar}>
        <View style={styles.taskItem}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailsTechnologyPage')}>
            <Image source={require('../assets/task1.png')} style={styles.taskIcon} />
            <Text style={styles.taskText}>Tin Tức</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Giavang')}>
            <Image source={require('../assets/task2.png')} style={styles.taskIcon} />
            <Text style={styles.taskText}>Giá Vàng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Coin')}>
            <Image source={require('../assets/task3.png')} style={styles.taskIcon} />
            <Text style={styles.taskText}>Coin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#29E3EF',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  taskIcon: {
    width: 40,
    height: 30,
  },
  group: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#29E3EF",
    width: "100%",
    height: 70,
    alignItems: "center"
  },
  image: {
    width: 45, 
    height: 45, 
    marginLeft: 20,
  },
  groupText: {
    fontSize: 25,
    textAlign: 'center',
    width: 128, 
    height: 36,
    color: "#1E1E1E",
    fontWeight: "bold",
    marginLeft: 80,
  },
  flatList: {
    width: "100%", 
    height: 'auto',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "#DEDEDE",
    height: 113,
    marginVertical: 10,
    alignSelf: 'center',
  },
  itemImage: {
    width: 140,
    height: 113,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  separator: {
    height: 20,
  },
  taskItem: {
    alignItems: "center",
  },
  taskText: {
    fontSize: 20,
    color: '#333',
    fontWeight: "bold",
  },
});

export default Technology;
