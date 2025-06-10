import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

import { StarRatingDisplay } from 'react-native-star-rating-widget';

import { styles } from './style'
import { NavigationBar } from '../../components/NavigationBar';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NavigationProps } from "../../routes/AppRoute";
import { findById } from '../../api/product/search/findById';

const relatedProducts = [
  {
    id: 1,
    image: require('../../assets/images/produto1.png'),
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


export const DetailsProduct = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: productId } = route.params as { id: string };
    const [nomeProduto, setNomeProduto] = useState<string>('');
    const [valorProduto, setValorProduto] = useState<number>(0);
    const [descricaoProduto, setDescricaoProduto] = useState<string>('');
    const [imagemProduto, setImagemProduto] = useState<string>('');
    const [categoriaProduto, setCategoriaProduto] = useState<string>('');

    useEffect(() => {
      const buscarProdutos = async () => {
        try {
          const data = await findById(productId);
          if (!data) {
            throw new Error("Erro ao buscar dados do produto");
          }
          setNomeProduto(data.name)
          setValorProduto(data.price)
          setDescricaoProduto(data.description)
          setImagemProduto(data.pathImage || '')
          setCategoriaProduto(data.categories[0].name)
        } catch (erro) {
          console.error("Erro ao buscar produto:", erro);
          Alert.alert("Erro", "Não foi possível carregar os dados do produto.");
        }
      };
  
      buscarProdutos();
    }, [productId]);
  return (
    <>
    <ScrollView style={styles.container}>
      
      <Text style={styles.productTitle}>{nomeProduto}</Text>
      
      <View style={styles.productCard}>
      <Image
        source={imagemProduto ? { uri: imagemProduto } : require('../../assets/images/product.jpg')}
        style={styles.productImage}
      />
        <Text style={styles.cardTitle}>{nomeProduto}</Text>
        <Text style={styles.cardPrice}>{valorProduto}</Text>
        
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionLabel}>Descrição</Text>
          <Text style={styles.description}>{descricaoProduto}</Text>
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
    <NavigationBar initialTab='loja'/>
    </> 
  );
};
