import React from "react";
import {View, Image, Text} from 'react-native'
import { useRoute } from "@react-navigation/native";
import estilo from './style';
import Stars from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Details(){

    const route = useRoute();
    return(
        <View style = {estilo.fundo}>
            <Image style = {estilo.imagemProduto} source = {require(`../../Img/${route.params.imagem}`)}/> 
            <View style = {estilo.informacao}>
                <Text style = {estilo.tituloProduto} > {route.params.titulo}</Text>
                <Stars
                    default={route.params.nota}
                    count={10}
                    half={true}
                    //starSize={[style.fullStar.size, style.fullStar.size]}
                    disabled={true}
                    fullStar={<FontAwesome name="star" size={25} color={'#FFD700'} />}
                    emptyStar={<FontAwesome name="star-o" size={25} color={'#fff'} />}
                    halfStar={<FontAwesome name="star-half-empty" size={25} color={'orange'} />}
                />
                <Text style = {estilo.quantidadeProduto} > {route.params.quantidade}</Text>
                <Text style = {estilo.tamanhoProduto} > {route.params.tamanho}</Text>
                <Text style = {estilo.precoProduto} > {route.params.preco}</Text>
            </View>
        </View>
    );
}

