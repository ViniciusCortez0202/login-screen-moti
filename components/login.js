import React from "react";
import styled from "styled-components/native";
import CustomInput from "./input";
import LinkButton from "./link_button";
import OutlinedButton from "./outlined_button";

const Container = styled.View`
    display: flex;
    align-items: ${props => props.align};
`

const Login = ({ }) => {
    return (
        <Container align="center">
            <Container align="flex-end">
                <CustomInput placeholder={"Email"} />
                <CustomInput placeholder={"Senha"} secureText={true} />
                <LinkButton text="Esqueceu a senha?" onPress={() => console.log("React")} />
            </Container>
            <OutlinedButton text={"Entrar"} color={"#299626"} />
            <LinkButton text="Cadastre-se" onPress={() => console.log("React")} />
        </Container>
    )
}

export default Login;