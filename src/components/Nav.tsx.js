import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Icon from  'components/Icon'




const NavWrapper = styled.nav `
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  > ul {
    display: flex;
    > li {
      flex-grow: 1;
      text-align: center;
      padding: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }

    }
  }
`
const Nav = ()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name='tag'  />
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Icon name='money'  />
                    <Link to="/money">记一笔</Link>
                </li>
                <li>
                    <Icon name="chart"/>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav


