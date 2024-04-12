import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderBlock = styled.div`
  text-align: center;
  padding: 20px;
  background: #ddd;
  position: relative;
  .header__logo { padding: 20px; }
  .member { position: absolute; top: 30px; left: 30px;
    a { margin-right: 10px; }
  }
  .itemcount { position: absolute; top: 20px; right: 30px;
    font-size: 30px; color: blue;
    span { position: absolute; top: -2px; right: -5px; width: 20px;
      height: 20px; border-radius: 50%; background: red; color: #fff;
      font-size: 12px; line-height: 20px; text-align: center; font-weight: bold;
    }
  }
  .openNav { position: absolute; top: 20px; right: 80px; font-size: 30px; color: blue;
    cursor: pointer; display: none; }
  #header__nav { 
    ul {
      display: flex;
      justify-content: space-around;
      li { margin: 10px 0px; font-size: 20px;
        a { transition: all 0.5s;
          &:hover { color: #f00; }
        }
      }
    }
    .closeNav { display: none; }
  }
`

const Header = () => {
    return (
        <HeaderBlock>
            <h1 className="header__logo">
                <Link to="/">STARSHIP SQUARE</Link>
            </h1>
            <nav id="header__nav">
                <ul>
                    <li>
                        <Link to="/artist">Artist</Link>
                    </li>
                    <li>
                        <Link to="/actor">Actor</Link>
                    </li>
                    <li>
                        <Link to="/">Movie</Link>
                    </li>
                    <li>
                        <Link to="/">Theater</Link>
                    </li>
                    <li>
                        <Link to="/">Product</Link>
                    </li>
                    <li>
                        <Link to="/">Community</Link>
                    </li>
                </ul>
            </nav>
        </HeaderBlock>
    );
};

export default Header;