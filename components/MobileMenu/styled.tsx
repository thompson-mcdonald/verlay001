import styled from 'styled-components';

export const Menu = styled.div`
position: fixed;
top: 0;
right: 0%;
height: 100%;
width: 300px;
background: blue;
z-index: 170;
color: white;
transform:  ${(props) => props.open ? "translateX(0%)" : "translateX(100%)"};
transition: all 1s;
padding-top: 5rem;
padding-left: 3rem;
display: flex;
flex-direction: column;
justify-content: space-between;
nav {
  display: flex;
  flex-direction: column;
  a, .hollow-link {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    text-decoration: none;
    font-weight: 600;
  }
  .hollow-link {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: aileron,sans-serif;
    opacity: 0.9;
    color: #d7d7d7;
  }
  .nested-links {
    display: flex;
    flex-direction: column;
    a {
      padding-left: 1rem;
    }
  }
}
`