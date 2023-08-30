import React,{Fragment} from 'react';
import { Image,Text} from 'react-native';
import styles from './style';


export default function BannerProdutos(){
    return(
        <>
            <Image style = {styles.imagemBanner} source = {require(`../../Img/fundo.jpg`)} />
        </>
    );  
}