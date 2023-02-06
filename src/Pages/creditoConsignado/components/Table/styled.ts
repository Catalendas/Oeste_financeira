import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;

    a {
        text-decoration: underline;
    }

    strong {
        font-size: 2rem;
    }
    
    tbody {

       
        tr {
        border-collapse: collapse;
        display: flex;
        justify-content: space-between;
        align-items: center;

            td {
                height: 2.5rem;
                border-style: hidden;
                display: flex;
                align-items: center;
            }
            
            &:nth-child(odd) {
             background-color: ${({ theme }) => theme.colors["base-gray-light"]};
            }
            
        }  
        
    }
    
`

export const ContracHere = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-align: center;
        text-decoration: underline;
        color: ${({ theme }) => theme.colors["base-blue-black"]};
    }
`