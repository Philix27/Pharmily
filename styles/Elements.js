import styled from 'styled-components'


export const Button = styled.a `
font-size: 0.75rem;
font-weight: 1.5rem;
padding: 6px 12px;
border-radius: 10px;
color: #160836;
border: 2px solid #9c711b;
&:hover{
    color: #fff;
    background-color: #9c711b;
}
`;



export const BigButton = styled.a `
font-size: 1.3rem;
font-weight: 1.5rem;
padding: 10px 18px;
border-radius: 20px;
color: #fff;
background-color: #160836;
/* border: 2px solid #160836; */

`;

export const ProductDesc = styled.p `
max-lines: 2;
text-overflow: ellipsis;
color: #4d4942;
padding-top: 0px;
padding-bottom: 5px;
font-size: 0.75rem;
font-weight: w500;
`;

export const SubTitle1 = styled.p `
max-lines: 1;
text-overflow: ellipsis;
color: #141311;
padding-top: 0px;
padding-bottom: 5px;
font-size: 0.8rem;
font-weight: w800;

`;

//!! Headings Headings Headings
export const Heading1 = styled.h1`
    font-size: 1.5rem;
    color: rgb(11, 55, 73);
    font-weight: bold;
    `
export const Heading2 = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    color: rgb(11, 55, 73);
    `
export const Heading3 = styled.h3`
    font-size: 0.8rem;
    font-weight: bold;
    color: rgb(11, 55, 73);
`
export const Line = styled.hr`
    /* outline-color: rgb(11, 55, 73); */
    /* color: rgb(11, 55, 73); */
`

