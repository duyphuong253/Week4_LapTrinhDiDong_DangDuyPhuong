import React, { useState, useEffect} from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const ShoppingCart = () => {
  const [quantity, setQuantity, basePrice] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const [total, setTotal] = useState(141800);
  const [finalTotal, setFinalTotal] = useState(141800); // Thêm biến để tính "Thành tiền"
  const { width, height } = Dimensions.get('window');
  const applyDiscount = () => {
    if (discountCode === 'DISCOUNT10') {
      const newTotal = total * 0.9; 
      setFinalTotal(newTotal);
    } else {
      alert('Mã giảm giá không hợp lệ');
      setFinalTotal(total); 
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Phần hiển thị sản phẩm */}
      <View style={styles.productContainer}>
        <Image
          source={require('../assets/tich_phan.jpg')} // Đường dẫn hình ảnh trong thư mục dự án
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.seller}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800 đ</Text>

          <View style={styles.row}>
            <Button title="-" onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
            <Text style={styles.quantity}>{quantity}</Text>
            <Button title="+" onPress={() => setQuantity(quantity + 1)} />
            <Text style={styles.textlink} href=''>Mua sau</Text>
          </View>
        </View>
      </View>
      <View style={styles.productContainer}>
      <Text>Mã giảm giá đã lưu</Text>
      <Text style={styles.textlink} href=''>Xem tại đây</Text>
      </View>
      
      <View style={styles.productContainer}>
      {/* Phần mã giảm giá và tổng */}
      <TextInput
        placeholder="DISCOUNT10"
        value={discountCode}
        onChangeText={setDiscountCode}
        style={styles.input}
      />
      <TouchableOpacity style={styles.applyButton} onPress={applyDiscount}>
        <Text style={styles.applyButtonText}>Áp dụng</Text>
      </TouchableOpacity>
      </View>
      <View>
      <View style={{width: '100%', height: 10, backgroundColor: 'gray'}} /></View>
      <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox? <Text style={styles.textlink} href=''>Nhập tại đây?</Text></Text>
      <View>
      <View style={{width: '100%', height: 10, backgroundColor: 'gray'}} /></View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Tạm tính:</Text>
        <Text style={styles.priceText} >{total.toFixed(1)} đ</Text>
      </View>
      <View><View style={{width: '100%', height: 100, backgroundColor: 'gray'}} /></View>
      {/* Phần Thành tiền */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Thành tiền:</Text>
        <Text style={styles.priceText}>{finalTotal.toFixed(1)} đ</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row', // Chia phần hiển thị thành 2 cột
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 130,
    resizeMode: 'contain',
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  seller: {
    color: '#888',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#e53935',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantity: {
    marginHorizontal: 16,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  applyButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 16,
    left: 40,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 16,
    fontWeight:'bold',
  },
  priceText:{
    fontWeight:'bold',
    color:'red',
  },
  checkoutButton: {
    backgroundColor: '#e53935',
    padding: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textlink: {
      left: 40,
      color: 'blue',
      fontWeight:'bold',
  },
});

export default ShoppingCart;
