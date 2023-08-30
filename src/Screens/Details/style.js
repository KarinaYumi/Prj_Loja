import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

    fundo: {
        backgroundColor: '#0B2447',
        height: '100%'
    },

    imagemProduto:{
        width:'300px',
        height: '400px',
        alignSelf: 'center',
        marginTop:'16px',
        borderRadius:12
    },

    informacao: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    },
    
    tituloProduto:{
        color: '#ffd411',
        fontSize: 24,
        paddingTop: 8,
        fontWeight:'Bold'
    },
    quantidadeProduto:{
        fontSize:16,
        color:'#fff',
        paddingLeft:4
    },
    tamanhoProduto:{
        fontSize:16,
        color:'#fff',
        paddingLeft:4
    },
    precoProduto:{
        fontSize:24,
        color:'#fff',
        paddingLeft:2,
        paddingTop: 12,
        fontWeight:'Bold',
    }
})

export default estilo;