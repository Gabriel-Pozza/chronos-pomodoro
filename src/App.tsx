import './styles/theme.css';
import './styles/Global.css';

import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
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
