import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';



const list = [
  {
    id: 1,
    label: 'Boleto equatorial',
    value: '65,23',
    date: '09/04/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix YTALO AMORIN',
    value: '150,00',
    date: '13/04/2023',
    type: 1 //receitas
  },
  {
    id: 3,
    label: 'OG1 Salário',
    value: '33,50',
    date: '14/04/2023',
    type: 1 //despesas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Emanoel Silva"/>
      <Balance saldo="3.500,00" gastos="150,00"/>
      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
