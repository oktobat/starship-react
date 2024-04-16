import React from 'react';
import styled from 'styled-components';

const KakaoMapBlock = styled.div`
.map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif; font-size:14px;}
.map_wrap {position:relative; width:100%; height:500px;}
#menu_wrap {position:absolute;top:0;left:0;bottom:0;
    width:250px;
    margin:10px 0 30px 10px;
    padding:10px;
    overflow-y:auto;
    background:rgba(255, 255, 255, 1);
    z-index: 1;
    border-radius: 10px;
    .option { border-bottom:1px solid #000; padding-bottom:10px; 
        div {
            form {
                display:flex; 
                input { flex:1; padding-left:0.5em; height:25px;  }
                button { font-size:12px; width:35px; height:25px; margin-left:5px}
            }
        }
    }
    #placesList {
        margin-top:10px; 
        li {
            position:relative; overflow: hidden; cursor: pointer;
            line-height:1.5em;
            &:hover { color:#f00; }
        }
    }
    #pagination {
        margin-top:20px; text-align:center; 
        a { padding:2px 5px; background:#ddd; margin:0 3px; border-radius:3px;
            &.on { background:#333; color:#fff }
        }
    }
}
`

const KakaoMap = () => {
    return (
        <KakaoMapBlock>
            <div className="map_wrap">
                <div id="map" ref={mapRef} style={{width:'100%', height:'100%', overflow:'hidden'}}></div>
                <div id="menu_wrap" className="bg_white">
                    <div className="option">
                        <div>
                            <form onSubmit="searchPlaces">
                                <input type="text" id="keyword" />  
                                <button type="submit">검색</button> 
                            </form>
                        </div>
                    </div>
                    <ul id="placesList">
                        <li>
                            { item.place_name }
                        </li>
                    </ul>
                    <div id="pagination" ref={pageRef}>
                        <a href="#">
                            <span>{ num }</span>
                        </a>
                    </div>
                </div>
            </div>
        </KakaoMapBlock>
    );
};

export default KakaoMap;