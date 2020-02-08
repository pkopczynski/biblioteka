import styled from 'styled-components'
import {Color} from '../../constants/color'

export const Bar = styled.div `
    margin: 0 auto;
    width: 30%;
    height: 30px;
    background-color: ${Color.secondaryOrange};
        &:hover {
            background-color: ${Color.mainOrange};
        }
`