import styled from "styled-components";
import { Nav } from "../nav";


const HeaderPage = styled.header`
    padding: 0 0.5rem;
    background: #007bff;
    height: 10vh;
    display: flex;
    align-items: center;
`

export function Header(){
    return(
        <>
            <HeaderPage>
                <Nav/>
            </HeaderPage>
        </>
    )
}