import Link from "next/link";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { BsEyeSlash } from "react-icons/bs";
import { useCallback } from "react";
import { GoMail } from "react-icons/go";

import { Header, Footer, Input, Button, Select } from "../../components";

import { RegisterWrapper } from "./styles";

export default function Register() {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail é obrigatório."),
        password: Yup.string().min(8, "Senha deve ter no mínimo 8 caracteres")
      });

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
     <RegisterWrapper>
       <Header />
        <main>
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Insira suas informações de acesso</legend>
              <Input name="email" title="E-mail" type="email" placeholder="Insira seu e-mail" required icon={GoMail} />
              <Input name="password" title="Senha" type="password" placeholder="Defina uma senha" required icon={BsEyeSlash} />
              <Input name="repassword" title="Confirme sua senha" required type="password" placeholder="Confirme sua senha" icon={BsEyeSlash} />
            </fieldset>

            <fieldset>
              <legend>Defina sua recuperação de senha</legend>
              <Select title="Pergunta de segurança para senha" name="question">
                <option value="Qual o sobrenome da sua avó?">Qual o sobrenome da sua avó?</option>
              </Select>
              <Input name="answer" title="Resposta" type="text" placeholder="Informe a resposta da pergunta" required />
            </fieldset>

            <Button>Cadastrar conta</Button>
          </Form>
        </main>
       <Footer />
     </RegisterWrapper>
  )
}
