import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #D0D0FF;
`;

export const Perfil = styled.Image`
    width: 200px;
    height: 200px;
`;

export const Titulo = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const AreaInput = styled.View`
    margin: 5px;
`;

export const Texto = styled.Text`
    font-weight: bold;
`;

export const Input = styled.TextInput`
    width: 350px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #FFF;
`;

export const Botao = styled.TouchableOpacity`
    margin: 5px;
    width: 350px;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #0000ff;
`;