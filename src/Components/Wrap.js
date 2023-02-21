import styled from "styled-components"

export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
`