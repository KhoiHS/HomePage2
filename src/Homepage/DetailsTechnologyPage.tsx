import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    image: require('../assets/dog1.png'), 
    title: 'Nội dung:',
    content: 'Microsoft yêu cầu các nhân viên dùng iPhone thay vì điện thoại Android để làm việc vì lý do bảo mật và người chưa có sẽ được cấp iPhone 15. Theo thông báo nội bộ mà Bloomberg tiếp cận được ngày 8/7, Microsoft đã gửi yêu cầu nhân viên ở Trung Quốc dùng iPhone.',
    opinion: 'Ý Kiến:',
    opinionPlaceholder: 'Chia sẻ ý kiến của bạn...',
  }
];

const DetailsTechnologyPage = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.separator} />
        <Text style={styles.content}>{item.content}</Text>
      </View>
      <View style={styles.opinionContainer}>
        <Text style={styles.opinion}>{item.opinion}</Text>
        <TextInput 
          style={styles.opinionInput} 
          placeholder={item.opinionPlaceholder} 
          placeholderTextColor="#999" 
        />
      </View>
    </View>
  );

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
        <Text style={styles.groupText}>aaaaaa</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
      <View style={styles.taskbar}>
        <View style={styles.taskItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
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
    flexDirection: 'column',
    paddingHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
    width: 384,
    backgroundColor: "white",
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 380, // điều chỉnh kích thước phù hợp với hình ảnh của bạn
    height: 230, // điều chỉnh kích thước phù hợp với hình ảnh của bạn
    resizeMode: 'cover',
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  separator: {
    height: 5,
  },
  content: {
    fontSize: 28,
    color: '#000000',
    backgroundColor: '#DEDEDE',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  opinionContainer: {
    marginTop: 10,
  },
  opinion: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  opinionInput: {
    fontSize: 22,
    color: '#000000',
    borderColor: 'black',
    fontWeight: 'bold',
    backgroundColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
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

export default DetailsTechnologyPage;
