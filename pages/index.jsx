import Head from 'next/head'
import styled from 'styled-components';
import { color } from 'styled-system';
import { OffWhite } from '../components/Color';
import Hero from '../components/Hero';

const Pollen = styled.div`
  display: none;
  font-family: monospace;  
  background: ${OffWhite};
`;

const Box = styled.div`
  ${color}
`

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lateef&display=swap" rel="stylesheet" />
      </Head>
      <div>
        
      </div>
      <Hero title="Title" subtitle="subtitle" />
      <main>
        <Pollen> faffaa</Pollen>
        <Box color={["red" , "green"]} bg={OffWhite}>Yes</Box>
      </main>
    </div>
  )
}

