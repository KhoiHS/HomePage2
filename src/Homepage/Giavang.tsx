import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    text1: 'Vàng 1',
    text2: '$2500',
    text3: '$3000',
  },
  {
    id: '2',
    text1: 'Vàng 2',
    text2: '$2000',
    text3: '$1000',
  },
  {
    id: '3',
    text1: 'Vàng 3',
    text2: '$2500',
    text3: '$3000',
  },
];

const Giavang = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Homepage');
  };

  const handleNavigate1 = () => {
    navigation.navigate('Coin');
  };
  const handleNavigate2 = () => {
    navigation.navigate('DetailsTechnologyPage');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text1}</Text>
      <Text style={styles.itemText}>{item.text2}</Text>
      <Text style={[styles.itemText, item.text3 === '$1000' && styles.redText, item.text3 === '$3000' && styles.greenText]}>
        {item.text3}
      </Text>
    </View>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
            source={require('../assets/menu.png')} 
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Giá vàng</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>GOLD</Text>
        <Text style={styles.tableHeaderText}>Mua vào</Text>
        <Text style={styles.tableHeaderText}>Bán ra</Text>
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
          <TouchableOpacity onPress={handleNavigate2} >
            <Image source={require('../assets/task1.png')} style={styles.taskIcon} />
            <Text style={styles.taskText}>Tin Tức</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskItem}>
          <TouchableOpacity onPress={handleNavigate}>
            <Image source={require('../assets/task5.png')} style={styles.taskIcon} />
            <Text style={styles.taskText}>Giá Vàng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskItem}>
          <TouchableOpacity onPress={handleNavigate1}>
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
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#29E3EF",
    width: "100%",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  menuIcon: {
    width: 45,
    height: 45,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    width: 149, 
    height: 45,
    color:"#000000",
    fontWeight:"bold",
    marginLeft:80,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0288D1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  tableHeaderText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  flatList: {
    width: "100%",
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 24,
    color: '#0288D1',
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  separator: {
    height: 1,
    backgroundColor: "#000000",
    marginHorizontal: 20,
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
    height: 40,
  },
  taskItem: {
    alignItems: "center",
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    fontWeight: "bold",
  },
});

export default Giavang;
