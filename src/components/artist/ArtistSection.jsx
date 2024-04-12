import React, { useState } from 'react';
import styled from 'styled-components'

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
          }
        }
    }
`

const ArtistSection = () => {

    const [active, setActive] = useState("팝 (Pop)")

    const artistMenu = {
        menu1: '팝 (Pop)',
        menu2: '발라드 (Ballad)',
        menu3: '힙합 (Hip-hop)',
        menu4: '알앤비 (R&B)'
      }

      const onChange = (value)=>{
        setActive(value)
      }

    return (
        <ArtistSectionBlock>
            <h3>탭 제목</h3>
            <div className="artist__wrap">
                <div className="artist__type">
                    <button onClick={()=>{ onChange(artistMenu.menu1) }} style={{ background: active===artistMenu.menu1 ? '#f00' : '#ddd', color: active===artistMenu.menu1 ? '#fff' : '#000' }}>{artistMenu.menu1}</button>
                    <button onClick={()=>{ onChange(artistMenu.menu2) }} style={{ background: active===artistMenu.menu2 ? '#f00' : '#ddd', color: active===artistMenu.menu2 ? '#fff' : '#000' }}>{artistMenu.menu2}</button>
                    <button onClick={()=>{ onChange(artistMenu.menu3) }} style={{ background: active===artistMenu.menu3 ? '#f00' : '#ddd', color: active===artistMenu.menu3 ? '#fff' : '#000' }}>{artistMenu.menu3}</button>
                    <button onClick={()=>{ onChange(artistMenu.menu4) }} style={{ background: active===artistMenu.menu4 ? '#f00' : '#ddd', color: active===artistMenu.menu4 ? '#fff' : '#000' }}>{artistMenu.menu4}</button>
                </div>
            </div>
        </ArtistSectionBlock>
    );
};

export default ArtistSection;