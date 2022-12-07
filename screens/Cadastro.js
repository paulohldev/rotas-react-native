import React from 'react';
import { Button, Input } from 'react-native-elements';
import { View } from 'react-native';

const TelaCadastro = ({ navigation }) => {
  return (
    <View style={{ padding: '20px', flex: 1, justifyContent: 'center' }}>
      <View>
        <Input label={'EMAIL'} />
        <Input label={'SENHA'} />
        <Button
          title={'Salvar'}
          onPress={() => navigation.navigate('Tela de Login')}
        />
      </View>
    </View>
  );
};

export default TelaCadastro;
