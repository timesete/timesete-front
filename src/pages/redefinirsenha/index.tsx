import { Form } from "@unform/web";
import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { BsEyeSlash, BsPencil } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import { RedefinePasswordWrapper } from "../../styles/pages/RedefinirSenhaStyles";
import { Button, Footer, Header, Input, Modal } from "../../components";

interface FormProps extends FormEvent {
  email: string;
  answer: string;
  confirmPassword: string;
}

const RedefinirSenha = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = useCallback(({ email, answer, confirmPassword }: FormProps) => {
    if(currentStep === 1) {
      setCurrentStep(2);
    };
  }, [])

  return (
    <RedefinePasswordWrapper currentStep={currentStep}>
      <Header />
      <main>

        {currentStep === 1 && (
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Insira seu e-mail cadastrado</legend>
              <section>
                <div>1</div>
                <span></span>
                <div>2</div>
              </section>
              <Input name="email" title="E-mail" type="email" placeholder="Insira seu e-mail" icon={GoMail} required />
            </fieldset>

            <Button type="submit">Avançar</Button>
            <Link href="/entrarnaconta">
              <a>Cancelar</a>
            </Link>
          </Form>
        )
        }

        {currentStep === 2 && (
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Insira sua resposta secreta e a nova senha</legend>
              <section>
                <div>1</div>
                <span></span>
                <div>2</div>
              </section>
              <Input name="answer" title="Qual o sobrenome da sua avó?" placeholder="Insira a resposta" type="text" required icon={BsPencil} />
              <Input name="confirmPassword" title="Digite sua nova senha" type="password" placeholder="Digite sua nova senha" required icon={BsEyeSlash} />
              <Input name="confirmPassword" title="Confirme sua nova senha" type="password" placeholder="Confirme sua nova senha" required icon={BsEyeSlash} />
            </fieldset>

            <Button type="submit">Redefinir senha</Button>
            <Link href="/entrarnaconta">
              <a>Cancelar</a>
            </Link>
          </Form>
        )}
      </main>
      <Footer />
      {isModalOpen && <Modal title="Senha redefinida" description="Você alterou sua senha com sucesso." href="/entrarnaconta" />}
    </RedefinePasswordWrapper>

  )
}

export default RedefinirSenha;
