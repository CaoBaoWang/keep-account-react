import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Icon from 'components/Icon'


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);

  > ul {
    display: flex;

    > li {
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 8px;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
      flex-grow: 1;
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name='tag'/>
                        标签
                    </Link>
                </li>
                <li>

                    <Link to="/money">
                        <Icon name='money'/>
                        记一笔
                    </Link>
                </li>
                <li>

                    <Link to="/statistics">
                        <Icon name="chart"/>
                        统计
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav


