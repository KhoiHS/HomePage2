import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const data = [
    {
      id: '1',
      image: require('../assets/dog1.png'),
      text1: 'Tiêu đề: aaaaaa',
      text2: 'Ngày tháng: 12/12/2024',
    },
    {
      id: '2',
      image: require('../assets/dog1.png'),
      text1: 'Tiêu đề: bbbbbb',
      text2: 'Ngày tháng: 01/01/2025',
    },
  ];

  const handleNavigate = () => {
    navigation.navigate('Coin');
  };
  const handleNavigate1 = () => {
    navigation.navigate('Giavang');
  };
  const handleNavigate2 = () => {
    navigation.navigate('DetailsTechnologyPage');
  };
  const handleNavigate3 = () => {
    navigation.navigate('Technology');
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.text1}</Text>
        <Text style={styles.itemText}>{item.text2}</Text>
      </View>
    </View>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Modal
        transparent={true}
        visible={sidebarVisible}
        onRequestClose={toggleSidebar}
      >
        <View style={styles.modalContainer}>
          <View style={styles.sidebar}>
            <View style={styles.userSection}>
              <Image 
                source={require('../assets/avatar1.jpg')} 
                style={styles.avatar}
              />
              <Text style={styles.username}>Người dùng</Text>
            </View>
            <TouchableOpacity style={styles.navItem} onPress={toggleSidebar}>
              <Text style={styles.navText}>Trang chủ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Text style={styles.navText}>Đăng Nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.mainContent}>
        <View style={styles.group}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
            <Image 
              source={require('../assets/menu.png')} 
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.groupText}>Tin Tức</Text>
        </View>
        <View style={styles.groupText2}>
          <Text style={styles.groupText1Text}>Công nghệ</Text>
          <Text style={styles.groupText2Text}>Xem Thêm</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          ItemSeparatorComponent={ItemSeparator} 
          style={styles.flatList}
        />
        <View style={styles.separator1} />
        <View style={styles.groupText4}>
          <Text style={styles.groupText1Text}>Game</Text>
          <TouchableOpacity onPress={handleNavigate3}>
          <Text style={styles.groupText2Text}>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
        <Image 
          source={require('../assets/dog1.png')} 
          style={styles.image3}
        />
        <View style={styles.taskbar}>
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={handleNavigate2}>
              <Image source={require('../assets/task1.png')} style={styles.taskIcon} />
              <Text style={styles.taskText}>Tin Tức</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={handleNavigate1}>
              <Image source={require('../assets/task2.png')} style={styles.taskIcon} />
              <Text style={styles.taskText}>Giá Vàng</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={handleNavigate}>
              <Image source={require('../assets/task3.png')} style={styles.taskIcon} />
              <Text style={styles.taskText}>Coin</Text>
            </TouchableOpacity>
          </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#e0e0e0',
    zIndex: 10,
    elevation: 10,
  },
  userSection: {
    backgroundColor: '#0288D1',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 80, 
    height: 80,
    borderRadius: 40,
    backgroundColor: '#b0b0b0',
  },
  username: {
    marginTop: 10,
    fontSize: 24, 
    color: '#fff',
  },
  navItem: {
    width: '100%',
    padding: 20, 
    alignItems: 'center',
  },
  navText: {
    fontSize: 24, 
    color: '#000',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'center', 
    backgroundColor: '#29E3EF',
    width: '100%',
    height: 70,
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    top: 10,
    zIndex: 20,
  },
  image: {
    width: 45, 
    height: 45, 
  },
  groupText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#1E1E1E',
    fontWeight: 'bold',
    marginHorizontal: 20, 
  },
  groupText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingBottom: 25,
    alignItems: 'center',
  },
  groupText4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  groupText2Text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A0040',
  },
  groupText1Text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    borderBottomWidth: 5, 
    borderBottomColor: '#00A894', 
  },
  flatList: {
    width: '100%', 
    flexDirection: 'row',
    height: 100, 
  },
  itemContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#DEDEDE',
    height: 350,
    width: 251,
    borderRadius: 10,
  },
  itemImage: {
    width: 232, 
    height: 177, 
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 230,
    height: 190,
  },
  itemText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  separator: {
    width: 20,
    height: 220,
    backgroundColor: 'white',
  },
  separator1: {
    width: '100%',
    height: 5,
    backgroundColor: '#3CBEAF',
  },
  image3: {
    width: 360,
    height: 150,
    marginLeft: 20,
    marginVertical: 6,
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
  taskItem: {
    alignItems: 'center',
  },
  taskText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Homepage;
