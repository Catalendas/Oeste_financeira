import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    
    display: flex;
    align-items: center;

    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-blue"]};

    list-style: none;

    div {

        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        > svg {
                display: none;
            }  
        
    }


    @media(max-width: 520px) {
        
        div {
            padding: 0 2rem 0 2rem;
           

            > svg {
                display: block;
            }
        }
    }
`

export const HeaderLinks = styled.nav`     
        
        ul {

            display: flex;
            align-items: center;
            gap: 2rem;
            list-style: none;

                li {
                        a {
                            position: relative;
                            text-transform: uppercase;
                            font-weight: 400;

                            &::after {
                                content: "";
                                background-color: ${({ theme }) => theme.colors["base-blue"]};
                                height: 3px;
                                width: 0;
                                position: absolute;
                                left: 0;                
                                bottom: -10px;
                                transition: .3s;
                            }       

                            &:hover::after {
                                width: 100%;
                            }

                            svg {
                                background-color: ${({ theme }) => theme.colors["base-blue"]};
                                transition: .3s;

                                &:hover {
                                    background-color: ${({ theme }) => theme.colors["base-blue-black"]};
                                }
                            }
                        }

                }
    }   

    @media(max-width: 520px) {
        display: none;
    }
`