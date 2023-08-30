import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardProdutos({titulo, marca,tamanho, preco, cor, quantidade, imagem}){
    
    const navigation = useNavigation();
   
    return(
        <TouchableOpacity onPress = {()=> navigation.navigate('details',{imagem:imagem, titulo:titulo, marca:marca, cor:cor, quantidade:quantidade, tamanho:tamanho, preco:preco})} style = {styles.containerProdutos}>

            <Image style ={styles.imagemProdutos} source = {require(`../../Img/${imagem}`)}/>
            <Text style ={styles.tituloProdutos}> {titulo} </Text>
            <Text style ={styles.marcaProdutos}> {marca} </Text>
            <Text style ={styles.precoProdutos}> {preco} </Text>

        </TouchableOpacity>
    );  
}