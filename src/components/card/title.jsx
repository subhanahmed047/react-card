import styled from 'styled-components';

const CardTitle = styled.h4`
    color: ${props => props.theme.colorPrimary};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
    margin-right: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

CardTitle.defaultProps = {
    theme: {
        colorPrimary: '#ffffff',
    }
}

export default CardTitle;