import Link from "next/link";
import { Form } from "@unform/web";
import { GoMail } from "react-icons/go"
import { BsEyeSlash } from "react-icons/bs";
import { useCallback } from "react";
import { useRouter } from "next/router";

import { LoginWrapper } from "../../styles/pages/EntrarNaContarStyles";

import { Button, Footer, Header, Input } from "../../components";
import { useAuth } from "../../context/AuthContext";

type FormProps = {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = useCallback( async({ email, password }: FormProps) => {
    try {
      await signIn({email, password});
      router.push("/");
    } catch (error) {
      alert("Email ou senha inválios!");
    }
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

export default Login;
