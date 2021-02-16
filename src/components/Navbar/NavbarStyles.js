import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */
  padding-left: 30px;
`;
export const UserTitle = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  margin-top: 100px

`;

export const NavBox = styled.div`
/* position: fixed; */
  width: 80%;
  border: 2px solid #9e9e9e;
  box-shadow: 1px 1px 2px 1px rgba(158, 158, 158 , .2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const NavLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const NavButton = styled.button`
  height: 50px;
  color: white;
  margin-top: 30px;
  background-color: #61C8A6;
  font-weight: bolder;
  text-transform: uppercase;
  border-color: transparent;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover{
    color: #9e9e9e;
  }
  &:focus{
    outline: none;
  }
`;
