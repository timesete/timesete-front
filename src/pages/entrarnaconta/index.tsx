import Link from "next/link";
import { useRouter } from "next/router";
import { Form } from "@unform/web";
import { GoMail } from "react-icons/go"
import { BsEyeSlash } from "react-icons/bs";
import { useCallback } from "react";
import { api } from "../../services/api";
import cookies from "js-cookie";

import { LoginWrapper } from "../../styles/pages/EntrarNaContarStyles";

import { Button, Footer, Header, Input } from "../../components";
import { useAuth } from "../../context/AuthContext";
import withAuth from "../../utils/withAuth";

interface ApiResponse {
  token: string;
  refreshToken: string;
}

const Login = () => {
  const router = useRouter();
  const { changeAuthenticationState } = useAuth();

  const handleSubmit = useCallback((data: object) => {
    api.post<ApiResponse>('auth/signin',data)
        .then(response => {
        const {token, refreshToken} = response.data;

        cookies.set('token', String(token), { expires: 1});
        cookies.set('refreshToken', String(refreshToken), { expires: 1});

        changeAuthenticationState(true);
        router.push("/");
      }).catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <LoginWrapper>
      <Header />
      <main>
        <section>
          <Form onSubmit={handleSubmit}>
            <Input name="email" title="E-mail" type="email" placeholder="Insira seu e-mail" required icon={GoMail} />
            <Input name="password" title="Senha" type="password" placeholder="Insira sua senha" required icon={BsEyeSlash} />
            <Link href="/redefinirsenha">
              <a>Esqueceu sua senha?</a>
            </Link>
            <Button type="submit">Entrar na conta</Button>
          </Form>
        </section>
        <section>
          <div>
            <img src="icons/cadeirante.svg" alt="Cadeirante" />
            <h3>Não tem uma conta ainda?</h3>
            <Link href="/cadastrar">
              <Button>Cadastrar conta</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </LoginWrapper>
  )
};

export default withAuth(Login);
