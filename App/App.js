import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Perfil, Titulo, AreaInput, Texto, Input, Botao } from './src/styled';
import Icone from '@expo/vector-icons/Feather';

export default function App() {
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[erroEmail, setErroEmail] = useState(false);
  const[erroSenha, setErroSenha] = useState(false);
  const[senhaVisivel, setSenhaVisivel] = useState(false);

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

  // Função para mostrar e ocultar senha
  const mostrar = () => {
    setSenhaVisivel(!senhaVisivel)
  }
  return (
    <Container>
      <Perfil source={require('./img/perfil.png')}/>
      <Titulo>Faça seu login</Titulo>
      <AreaInput>
        <Texto>Email</Texto>
        <Input 
          style={[ erroEmail && styles.erroBorda]} 
          value={email}
          onChangeText={setEmail}
          placeholder='Digite seu email'
        />
      </AreaInput>
      <AreaInput>
        <Texto>Senha</Texto>
        <Input 
          style={[ erroSenha && styles.erroBorda]} 
          value={senha}
          onChangeText={setSenha}
          placeholder='Digite sua senha' 
          keyboardType='numeric'
          secureTextEntry={!senhaVisivel}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={mostrar} style={styles.icone}>
          <Icone name={senhaVisivel ? 'eye-off' : 'eye'} size={25}/>
        </TouchableOpacity>
      </AreaInput>
      <Botao activeOpacity={0.7} onPress={registre}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>Registre-se</Text>
      </Botao>
    </Container>
  );
}

const styles = StyleSheet.create({
  erroBorda: {
    borderColor: 'red'
  },
  icone: {
    position: 'absolute',
    left: 308,
    top: 32
  }
});
