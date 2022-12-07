import React from 'react';
import { Avatar, Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const TelaLogin = ({ navigation }) => {
  return (
    <View style={{ height: '100vh', justifyContent: 'center' }}>
      <Avatar
        containerStyle={styles.avatar}
        rounded
        size={150}
        source={{
          uri: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        }}
      />
      <View style={styles.container}>
        <Input label={'LOGIN'} inputStyle={styles.input} />
        <Input label={'SENHA'} inputStyle={styles.input} />
        <Button title={'Login'} />
        <Button
          title={'Cadastre-se'}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Tela de Cadastro')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '20px',
  },
  input: {
    padding: '10px',
  },
  button: {
    marginTop: '10px',
    backgroundColor: 'red',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: '40px',
  },
});

export default TelaLogin;
