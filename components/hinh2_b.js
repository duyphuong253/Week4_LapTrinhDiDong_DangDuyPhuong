import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


const ProductReview = () => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');

  return (
    <View style={styles.container }>
      <Image
        source={require('../assets/usb.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>
        USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
      </Text>
      
      <Text style={styles.ratingText}>Cực kỳ hài lòng</Text>
      
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Text style={[styles.star, star <= rating && styles.starFilled]}>★</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity style={styles.addPhotoButton}>
    
        <Text style={styles.addPhotoText}>
         <Image
        source={require('../assets/camera_icon.png')}
        style={styles.addPhotoImage}
      />
        Thêm hình ảnh</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
        value={review}
        onChangeText={setReview}
      >
    
      </TextInput>
      
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    flex: 1
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center'
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  star: {
    fontSize: 32,
    color: '#D3D3D3',
    marginRight: 20,
    left: 45,
  },
  starFilled: {
    color: '#FFD700',
  },
  addPhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  addPhotoText: {
    flex: 1,
    color: 'black',
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  addPhotoImage:{
    width: '25%',
    height: 50,
    resizeMode: 'contain',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductReview;