import { NextPage } from 'next';
import { BoldTypography } from '../components/BoldTypography';
import { NormalTypography } from '../components/NormalTypography';
import { TypographyDemo } from '../components/TypographyDemo';

const Home: NextPage = () => (
  <main>
    <NormalTypography />
    <BoldTypography />
    <TypographyDemo />
  </main>
);

export default Home;
