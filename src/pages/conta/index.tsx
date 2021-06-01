import { Form } from "@unform/web"
import { IoLogOutOutline } from "react-icons/io5"

import { Avatar, Button, Footer, Header, Input } from "../../components"
import { useAuth } from "../../context/AuthContext";
import { AccountWrapper, AvatarGroup } from "../../styles/pages/ContaStyles";
import withAuth from "../../utils/withAuth";

const Conta = () => {
  const { signOut } = useAuth();

  return (
    <AccountWrapper>
      <Header icon={IoLogOutOutline} iconColor="#F22152" size={20}>
        <li onClick={signOut}>Sair da conta</li>
      </Header>
      <main>
        <Form onSubmit={() => { }}>
          <h2>Sua conta</h2>
          <fieldset>
            <legend>Qual o seu nome?</legend>
            <Input title="Meu nome é:" name="name" />

            <legend>Selecione um avatar</legend>
            <AvatarGroup>
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </AvatarGroup>
          </fieldset>
          <Button>Salvar</Button>
        </Form>
      </main>
      <Footer />
    </AccountWrapper>
  )
}

export default withAuth(Conta);
