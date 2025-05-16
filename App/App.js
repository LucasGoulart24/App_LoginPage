import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[erroEmail, setErroEmail] = useState(false);
  const[erroSenha, setErroSenha] = useState(false);

  // Função para registrar o login
  const registre = () => {
    let errors = false;

    if(email !== 'teste@gmail.com') {
      setErroEmail(true);
      errors = true;
    }else {
      setErroEmail(false);
    }
    if(senha !== '1234') {
      setErroSenha(true);
      errors = true;
    }else {
      setErroSenha(false);
    }

    if(errors) {
      alert('Email e Senha incorreto!');
    }else {
      alert('Cadastro feito com sucesso!')
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require('./img/perfil.png')} style={styles.perfil}/>
      <Text style={styles.titulo}>Faça seu login</Text>
      <View style={{ margin: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>Email</Text>
        <TextInput 
          style={[styles.input, erroEmail && styles.erroBorda]} 
          value={email}
          onChangeText={setEmail}
          placeholder='Digite seu email'
        />
      </View>
      <View style={{ margin: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>Senha</Text>
        <TextInput 
          style={[styles.input, erroSenha && styles.erroBorda]} 
          value={senha}
          onChangeText={setSenha}
          placeholder='Digite sua senha' 
          keyboardType='numeric'
        />
      </View>
      <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={registre}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    width: 350,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
  },
  botao: {
    margin: 5,
    width: 350,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0000ff"
  },
  erroBorda: {
    borderColor: 'red'
  },
  perfil: {
    width: 200,
    height: 200
  }
});
