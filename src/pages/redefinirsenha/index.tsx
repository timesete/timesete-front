import { Form } from "@unform/web";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BsEyeSlash, BsPencil } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import { Button, Footer, Header, Input } from "../../components";

import { RedefinePasswordWrapper } from "./styles";

export default function RedefinePassword() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(()=>{
    setCurrentStep(1);
    console.log('0')
  },[])

  const handleNextStep = useCallback(()=>{
    setCurrentStep(2);
  },[])

  return (
    <RedefinePasswordWrapper currentStep={currentStep}>
      <Header />
      <main>
        <Form onSubmit={()=>{}}>
          {currentStep === 1 && (
            < >
            <fieldset>
              <legend>Insira seu e-mail cadastrado</legend>
              <section>
                <div>1</div>
                <span></span>
                <div>2</div>
              </section>
              <Input name="email" title="E-mail" type="email" placeholder="Insira seu e-mail" required icon={GoMail} />
            </fieldset>

            <Button type="button" onClick={handleNextStep}>Avançar</Button>
            </>
          )}

          {currentStep === 2 && (
            < >
            <fieldset>
              <legend>Insira sua resposta secreta e a nova senha</legend>
              <section>
                <div>1</div>
                <span></span>
                <div>2</div>
              </section>
              <Input name="answer" title="Qual o sobrenome da sua avó?" placeholder="Insira a resposta" type="text" required icon={BsPencil} />
              <Input name="newPassword" title="Digite sua nova senha" type="password" placeholder="Digite sua nova senha" required icon={BsEyeSlash} />
              <Input name="reNewPassword" title="Confirme sua nova senha" type="password" placeholder="Confirme sua nova senha" required icon={BsEyeSlash} />
            </fieldset>

            <Button type="submit" onClick={handleNextStep}>Redefinir senha</Button>
            </>
          )}

          <Link href="/entrarnaconta">
            <a>Cancelar</a>
          </Link>
        </Form>
      </main>
      <Footer />
    </RedefinePasswordWrapper>
  )
}
