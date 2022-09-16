import { SafeAreaView, View, Image } from 'react-native';
import { styles } from './style';

export function Header () {
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Image source={require('../../assets/imagens/Saida.png')}
        style={{width: 50, height: 130}}
        resizeMode='contain'
        />
        <Image source={require('../../assets/imagens/dineirinhocifrao.png')}
        style={{width: 50, height: 130}}
        resizeMode='contain'
        />

      </View>
    </SafeAreaView>
  );
}

