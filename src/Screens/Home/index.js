import { View, FlatList } from 'react-native';
import Header from '../../components/header';
import Produtos from '../../data/produtos'
import BannerProdutos from '../../components/bannerProdutos';
import CardProdutos from '../../components/cardProdutos';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './style';

export default function App() {

  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.container}>
        <Header></Header>
        <BannerProdutos></BannerProdutos>
        
        <View style={styles.card}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Produtos}
            keyExtractor={(item) => item.id}
            renderItem = { ({item}) => (

              <CardProdutos style={styles.cardCamisa}
                  titulo = {item.nome}
                  quantidade = {item.quantidade}
                  tamanho = {item.tamanho}
                  preco = {item.preco}
                  imagem = {item.imagem}
              />
            )} 
          />
        </View>
      </View>
    </ScrollView>
  );
}