import styled from "styled-components";
import LeftSide from "./LeftSide";
import Center from "./Center";
import RightSide from "./RightSide";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


const Home = (props) => {
    return (
        <Container>
            {!props.user && <Navigate to="/" />}
            <Left>
                <LeftSide user={props.user} />
            </Left>
            <Main>
                <Center />
            </Main>
            <Right>
                <RightSide />
            </Right>
        </Container>
    )
}

const Container = styled.div`
    color: #fff;
    width: 100%;
    height: 100vh;
`;

const Left = styled.div`
    position: fixed;
    margin: 0 300px;
    @media (max-width: 800px) {
        margin: 0;
    }

`;

const Main = styled.div`
    margin: 0 0 0 580px;

    ::before{
        content:'';
        position: fixed;
        width: 1px;
        height: 100vh;
        top: 0;
        left: 588px;
        margin: 0%;
        padding: 0;
        background-color: #1f1f1f;
        
    }

    ::after{
        content:'';
        position: fixed;
        width: 1px;
        height: 100vh;
        top: 0;
        left: 1090px;
        margin: 0%;
        padding: 0;
        background-color: #3b3b3b;
    }

    @media (max-width: 800px) {
        margin: 0 0 0 83px;   
    }
`;

const Right = styled.div`
    position: fixed;
    margin: -1790px 0 0 1100px;
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(Home);