import React from 'react';
import styled from 'styled-components';
import dog from '../../assets/img/dog.png';
import bunge from '../../assets/img/bunge.png';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/palette.scss';

const LogosContainer = styled.div`
  display: flex;

  .outer {
    background-color: green;
    width: 180px;
    height: 180px;
    position: relative;

    .inner {
      width: 170px;
      height: 170px;
      background-color: white;
      border-radius: 85px;
      margin: auto;
      position: relative;
      top: 5px;

      .content-wrapper {
        img {
          width: 50%;
          display: block;
          margin: auto;
          position: relative;
          top: 20px;
        }
        p, span {
          position: relative;
          top: 20px;
          left: 48px;
        }
        
        span {
          left: 65px;
          background-color: var(--color-green-2);
          padding: 3px 5px;
        }
        
      }
      }
    }

    .bunge {
      background-color: orange;
    }

`

const PuppyWalkHomeLogos = () => {
    return (<LogosContainer>
        <NavLink to='./mate'>
            <div className='outer'>
                <div className='inner'>
                    <div className='content-wrapper'>
                        <img src={dog} alt='dog'/>
                        <p>산책 메이트</p>
                        <span>탐색</span>
                    </div>
                </div>
            </div>
        </NavLink>
        <NavLink to='./bunge'>
            <div className='outer bunge'>
                <div className='inner'>
                    <div className='content-wrapper'>
                        <img src={bunge} alt='bunge'/>
                        <p style={{left: '55px'}}>산책 번개</p>
                        <span style={{backgroundColor: 'orange'}}>탐색</span>
                    </div>

                </div>
            </div>
        </NavLink>
        </LogosContainer>);
};

export default PuppyWalkHomeLogos;
