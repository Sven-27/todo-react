import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
      <HeaderItem>
        <i className="fas fa-bars" />
      </HeaderItem>
      <HeaderItem>
        <i className="fas fa-border-all" />
        <span>Dashboard</span>
      </HeaderItem>
      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collections</span>
      </HeaderItem>
          <Placeholder />
      <HeaderItem>
        <Profile>
          <img src="/images/sven.jpg" alt="" />
        </Profile>
      </HeaderItem>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  background: #20212d;
  padding: 0 20px;
  -webkit-box-shadow: 0 4px 15px 0 #121212;
  box-shadow: 0 4px 15px 0 #121212;
  position: sticky;
  top: 0;
`

const HeaderItem = styled.div`
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;

  span{
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover{
    background: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    border-radius: 50%;
  }
`

const Placeholder = styled.div`
  flex: 1;
`