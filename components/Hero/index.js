import { Title } from './styled';

const Hero = ({title, subtitle}) => {
  return (
    <>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </>
  )
}

export default Hero;