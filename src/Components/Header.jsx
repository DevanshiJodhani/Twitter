import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <UpSkill>
                <span>
                    <p>For You</p>
                </span>
                <p>Following</p>
            </UpSkill>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    box-shadow: 0 1px 0px 0px rgba(255, 255, 255, 0.25);
    z-index: 1;


`;

const UpSkill = styled.div`
    display: flex;
    width: 502px;
    background-color: #000;

    span{
        color: #43f2ff;
    }
    
    p{
        margin-left: 50px;
        margin-right: 110px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 10px;
        &:hover{
            color: #43f2ff; 
        }

        @media (max-width: 800px) {
            margin-left: 10px;
            margin-right: 40px ;
        }
    }

`;

export default Header;