import styled from 'styled-components';
import { loadColorFromTheme } from '../utils';

export const HeaderWrapper = styled.div`
    height: 400px;
    background: ${loadColorFromTheme('headerGradient')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 130px 0 70px;
    text-align: center;
`;

export const HeaderTitle = styled.h1`
    color: ${loadColorFromTheme('title')};
    font-size: 108px;
    margin-top: 50px;
`;

export const HeaderSubTitle = styled.h2`
    text-transform: uppercase;
    color: ${loadColorFromTheme('primary')};
    font-size: 18px;
`;
