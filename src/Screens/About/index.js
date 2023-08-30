import React from "react";
import {View, Text} from 'react-native'
import styles from "./styles";


export default function About(){

    return (
        <View> 
            <Text style ={styles.Titulo}> Quem somos</Text>
            <Text style ={styles.subTitulo}>
            Somos movidos pela paixão pelo esporte e pelo espírito de equipe. Acreditamos que vestir a camisa do seu time favorito é mais do que simplesmente vestir um pedaço de tecido, é mostrar o seu apoio inabalável.
            </Text>
        <View>
        <Text style ={styles.Titulo}> Nossa Equipe</Text>
        <Text style ={styles.subTitulo}>
            Nossa equipe está aqui para ajudar e garantir que você tenha uma experiência de compra excepcional. Seja para atualizar o seu guarda-roupa esportivo ou para encontrar o presente perfeito para um verdadeiro fã.
            </Text>
        </View>
        <View>
        <Text style ={styles.Titulo}> Volte Sempre</Text>
        <Text style ={styles.subTitulo}>
            Obrigado por escolher a VEK CAMISAS como o seu destino de camisetas de time. Junte-se a nós na celebração do esporte, da camaradagem e da emoção que apenas as cores do seu time podem proporcionar
            </Text>
        </View>
        </View>
        
    )
}