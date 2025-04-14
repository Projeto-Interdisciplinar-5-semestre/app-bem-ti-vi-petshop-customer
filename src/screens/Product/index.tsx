import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../Product/style'
import { StarRatingDisplay } from 'react-native-star-rating-widget';


export const Product = () => {


  const mainProduct = {
    image: require('../../assets/images/product.jpg'),
    title: 'Produto Premium',
    price: 'R$ 199,90',
    description: 'Indicada para cães;Ajuda no suporte a ossos e articulações que podem ser sobrecarregados pelo peso corporal; Ajudar a manter uma pele saudável; Disponível em embalagem de 15 kg; Ideal para pets de grande porte.'
  };

  const relatedProducts = [
    {
      id: 1,
      image: require('../../assets/images/product.jpg'),
      title: 'Produto Similar 1',
      rating: 4,
      price: 'R$ 149,90'
    },
    {
      id: 2,
      image: require('../../assets/images/product.jpg'),
      title: 'Produto Similar 2',
      rating: 3.5,
      price: 'R$ 129,90'
    },
  ];

  // Dados dos comentários
  const comments = [
    {
      id: 1,
      name: 'João Silva',
      rating: 5,
      commentTitle: 'Ótimo produto!',
      comment: 'Superou minhas expectativas, recomendo a todos!'
    },
    {
      id: 2,
      name: 'Maria Souza',
      rating: 4,
      commentTitle: 'Bom custo-benefício',
      comment: 'Produto de boa qualidade pelo preço oferecido.'
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      rating: 3,
      commentTitle: 'Poderia ser melhor',
      comment: 'Funciona bem, mas esperava mais recursos.'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Produto</Text>
      </View>
      
      <Text style={styles.productTitle}>Produto Premium</Text>
      
      <View style={styles.productCard}>
        <Image source={mainProduct.image} style={styles.productImage} />
        <Text style={styles.cardTitle}>{mainProduct.title}</Text>
        <Text style={styles.cardPrice}>{mainProduct.price}</Text>
        
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionLabel}>Descrição</Text>
          <Text style={styles.description}>{mainProduct.description}</Text>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Outros também viram</Text>
      
      <View style={styles.relatedProductsContainer}>
        {relatedProducts.map(product => (
          <View key={product.id} style={styles.relatedProductCard}>
            <Image source={product.image} style={styles.relatedProductImage} />
            <Text style={styles.relatedProductTitle}>{product.title}</Text>
            <StarRatingDisplay 
              rating={product.rating} 
              starSize={20}
              style={styles.rating}
            />
            <Text style={styles.relatedProductPrice}>{product.price}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.ratingContainer}>
        <View style={styles.starRatingContainer}>
        <Text style={styles.ratingTitle}>5,0</Text>
        <StarRatingDisplay 
            rating={5}
            starSize={26}
            style={styles.averageRating}
          />
        <Text style={styles.ratingTitle}>78 avaliações</Text>
      
      </View>
      <Text style={styles.sectionTitle}>Comentários</Text>

      {comments.map(comment => (
        <View key={comment.id} style={styles.commentCard}>
          <View style={styles.commentStarRatingContainer}>
            <Text style={styles.commentName}>{comment.name}</Text>
            <StarRatingDisplay 
              rating={comment.rating} 
              starSize={15}
              style={styles.commentRating}
            />
          </View>
          <Text style={styles.commentTitle}>{comment.commentTitle}</Text>
          <Text style={styles.commentText}>{comment.comment}</Text>
        </View>
      ))}
      </View>
    </ScrollView>
  );
};
