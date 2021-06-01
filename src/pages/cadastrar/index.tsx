import { Form } from "@unform/web"
import * as Yup from "yup";
import { BsEyeSlash } from "react-icons/bs";
import { useCallback, useState } from "react";
import { GoMail } from "react-icons/go";


import { RegisterWrapper } from "../../styles/pages/CadastrarStyles";
import { Header, Footer, Input, Button, Select, Modal } from "../../components";
import { useAuth } from "../../context/AuthContext";

interface FormData {
  email: string;
  password: string;
  answer: string;
}

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = useCallback(async (data: FormData) => {
    const user = {
      email: data.email,
      password: data.password,
      answer: data.answer,
      name: data.email,
      photoLink: '',
    };

    try {
      const schema = Yup.object().shape({
        password: Yup.string().min(8, 'A sua senha deve ter no mínimo 8 caracteres.'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas não coincidem.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signUp(user);
      setIsModalOpen(true);

    } catch (error) {
      alert("Erro 500");
    }
  }, []);

  return (
    <RegisterWrapper>
      <Header />
      <main>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Insira suas informações de acesso</legend>
            <Input name="email" title="E-mail" type="email" placeholder="Insira seu e-mail" required icon={GoMail} />
            <Input name="password" title="Senha" type="password" placeholder="Defina uma senha" required icon={BsEyeSlash} />
            <Input name="confirmPassword" title="Confirme sua senha" type="password" placeholder="Confirme sua senha" required icon={BsEyeSlash} />
          </fieldset>

          <fieldset>
            <legend>Defina sua recuperação de senha</legend>
            <Select title="Pergunta de segurança para senha" name="question">
              <option value="Qual o sobrenome da sua avó?">Qual o sobrenome da sua avó?</option>
            </Select>
            <Input name="answer" title="Resposta" type="text" placeholder="Informe a resposta da pergunta" required />
          </fieldset>

          <Button type="submit">Cadastrar conta</Button>
        </Form>
      </main>
      <Footer />
      {isModalOpen && <Modal title="Conta cadastrada" description="Você se cadastrou com sucesso." href="/" />}
    </RegisterWrapper>
  )
}

export default Register;
