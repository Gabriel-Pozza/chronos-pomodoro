import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/Global.css';


export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
          <Heading>MENU</Heading>
      </Container>

      <Container>
          <Heading>FORM</Heading>
      </Container>

      <Container>
          <Heading>FOOTER</Heading>
      </Container>
      
    </>
  );
}
