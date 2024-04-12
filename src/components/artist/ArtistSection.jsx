import React, { useState } from 'react';
import styled from 'styled-components'
import cn from 'classnames'

const ArtistSectionBlock = styled.div`
    h3 {
        text-align: center;
        font-size: 20px;
        margin: 50px 0;
    }
    .artist__wrap {
        .artist__type {
          display: flex;
          justify-content: center;
          button {
            margin: 20px;
            padding: 10px;
            border-radius: 10px;
            backgrond:#ddd;
            &.on {
                background:#f00;
                color:#fff
            }
          }
        }
    }
`

const ArtistSection = () => {

    const [active, setActive] = useState(0)

    const artistMenu = [
        {id:0, menu: '팝 (Pop)'         },
        {id:1, menu: '발라드 (Ballad)'  },
        {id:2, menu: '힙합 (Hip-hop)'   },
        {id:3, menu: '알앤비 (R&B)'     }
    ]

    return (
        <ArtistSectionBlock>
            <h3>{ artistMenu[active].menu }</h3>
            <div className="artist__wrap">
                <div className="artist__type">
                    {
                        artistMenu.map((item, index)=><button key={index} onClick={()=>{setActive(item.id)}} className={cn({ on:active===item.id })}>{item.menu}</button>)
                    }
                </div>
            </div>
        </ArtistSectionBlock>
    );
};

export default ArtistSection;