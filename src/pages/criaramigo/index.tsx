import Link from "next/link";
import { useCallback, useState } from "react";
import { Button, HomeHeader } from "../../components"
import { Parts, ColorButton, Colors, SelectionBox, SelectorOption, Options, CriarAmigoWrapper, TomDePele, Cabelo, Corpo, Pernas } from "../../styles/pages/CriarAmigoStyles";

const cabelos = [
  {src: 'criacao/selectors/HEAD-1.svg', assets: '', type: 'cabelo'},
  {src: 'criacao/selectors/HEAD-2.svg', assets: 'criacao/assets/HIJAB.svg', type: 'cabelo'},
  {src: 'criacao/selectors/HEAD-3.svg', assets: 'criacao/assets/CURTO 01.svg', type: 'cabelo'},
  {src: 'criacao/selectors/HEAD-4.svg', assets: 'criacao/assets/LISO 01.svg', type: 'cabelo'},
  {src: 'criacao/selectors/HEAD-5.svg', assets: 'criacao/assets/AFRO 01.svg', type: 'cabelo'},
];

const tonsDePele = [
  {src: 'criacao/selectors/SKIN-1.svg', assets: 'criacao/assets/PELE 05.svg', type: 'tom de pele'},
  {src: 'criacao/selectors/SKIN-2.svg', assets: 'criacao/assets/PELE 04.svg', type: 'tom de pele'},
  {src: 'criacao/selectors/SKIN-3.svg', assets: 'criacao/assets/PELE 03.svg', type: 'tom de pele'},
  {src: 'criacao/selectors/SKIN-4.svg', assets: 'criacao/assets/PELE 02.svg', type: 'tom de pele'},
  {src: 'criacao/selectors/SKIN-5.svg', assets: 'criacao/assets/PELE 01.svg', type: 'tom de pele'},
]

const pernas = [
  {src: 'criacao/selectors/BOTTOM-1.svg', assets: 'criacao/assets/INFERIOR 01.svg', type: 'perna'},
  {src: 'criacao/selectors/BOTTOM-2.svg', assets: 'criacao/assets/INFERIOR 03.svg', type: 'perna'},
  {src: 'criacao/selectors/BOTTOM-3.svg', assets: 'criacao/assets/INFERIOR 02.svg', type: 'perna'},
];

const corpos = [
  {src: 'criacao/selectors/TOP-1.svg', assets: 'criacao/assets/SUPERIOR 01.svg', type: 'corpo'},
  {src: 'criacao/selectors/TOP-2.svg', assets: 'criacao/assets/SUPERIOR 02.svg', type: 'corpo'},
  {src: 'criacao/selectors/TOP-3.svg', assets: 'criacao/assets/SUPERIOR 03.svg', type: 'corpo'},
];

const CriarAmigo = () => {
  const [selectorTray, setSelectorTray] = useState([]);
  const [tomDePele, setTomDePele] = useState("criacao/assets/PELE 03.svg");
  const [cabelo, setCabelo] = useState("criacao/assets/AFRO 03.svg");
  const [corpo, setCorpo] = useState("criacao/assets/SUPERIOR 02.svg");
  const [perna, setPerna] = useState("criacao/assets/INFERIOR 03.svg");

  const renderSelectorTray = useCallback((props)=>{
    setSelectorTray(props);
  },[selectorTray]);

  const toggleAsset = useCallback((part)=>{
    if(part.type === "tom de pele") {
      setTomDePele(part.assets)
    }
    if(part.type === "cabelo") {
      setCabelo(part.assets)
    }
    if(part.type === "corpo") {
      setCorpo(part.assets)
    }
    if(part.type === "perna") {
      setPerna(part.assets)
    }
  },[]);

  return (
    <CriarAmigoWrapper>
      <HomeHeader />
      <main>
        <section>
            <TomDePele>
              <img src={tomDePele} alt="Tom de Pele" />
            </TomDePele>
            <Cabelo>
              {
                cabelo && <img src={cabelo} alt="Cabelo" />
              }
            </Cabelo>
            <Corpo>
              <img src={corpo} alt="Corpo" />
            </Corpo>
            <Pernas>
              <img src={perna} alt="Pernas" />
            </Pernas>
        </section>

        <section>
          <SelectionBox>
            <header>
              <h2>Que tal criar um amigo para brincar com você?</h2>
            </header>
            <SelectorOption>
              <button onClick={()=> renderSelectorTray(tonsDePele)}><img src="criacao/padrao/pele.svg" alt="Tons de pele" /></button>
              <button onClick={()=>renderSelectorTray(cabelos)}><img src="criacao/padrao/cabelo.svg" alt="Tipos de cabelo" /></button>
              <button onClick={()=>renderSelectorTray(corpos)}><img src="criacao/padrao/camisa.svg" alt="Camisas" /></button>
              <button onClick={()=>renderSelectorTray(pernas)}><img src="criacao/padrao/calca.svg" alt="Calças" /></button>
            </SelectorOption>
            <Colors>
            {
              selectorTray === cabelos && (
              <>
                <ColorButton colorHex="#7B371F" />
                <ColorButton colorHex="#000000" />
                <ColorButton colorHex="#F4B510" />
                <ColorButton colorHex="#D23E18" />
              </>
              )
            }
            </Colors>
            <Options>
              {selectorTray.map(part => (
                <Parts key={part.src} onClick={()=>toggleAsset(part)}>
                  <img src={part.src} alt="assets" />
                </Parts>
              ))}
            </Options>
            <footer>
              <Link href="/mundo">
                <Button>Finalizar criação</Button>
              </Link>
            </footer>
          </SelectionBox>
        </section>
      </main>
    </CriarAmigoWrapper>
  )
}

export default CriarAmigo;
