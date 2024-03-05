import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { signInAPI } from "../Actions";
import { connect } from "react-redux";

const Login = (props) => {
    return (
        <Container>
            {props.user && <Navigate to="/home" />}
            <Logo>
                <img src="./images/x.png" alt="" />
            </Logo>
            <Form>
                <h1>Happening now</h1>
                <h5>Join today.</h5>
                <Method>
                    <Google onClick={() => props.signIn()}>
                        <img src="./images/google.svg" alt="" />
                        <span>Sign In with Google</span>
                    </Google>
                    <Apple onClick={() => props.signIn()}>
                        <img src="./images/apple.png" alt="" />
                        <span>Sign In with Apple</span>
                    </Apple>
                    <Or>
                        <span>OR</span>
                    </Or>
                    <Account onClick={() => props.signIn()}>
                        Create Account
                    </Account>
                    <Notice>
                        By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy,</a> including <a>Cookie Use.</a>
                    </Notice>
                    <NewAccount>
                        <h2>Already have an account?</h2>
                        <SignIn onClick={() => props.signIn()}>
                            Sign In
                        </SignIn>
                    </NewAccount>
                </Method>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 150px 80px;
    padding: 50px 80px;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 40px;
        padding: 0;
    }
`;

const Logo = styled.a`
    padding: 0 150px;

    img{
        margin-top: 80px;
        width: 350px;
    }

    @media (max-width: 800px) {
        padding: 0;
        img{
            margin: 0;
            width: 50px;
            margin-bottom: 55px;
        }
    }

`;

const Form = styled.div`
    color: #cacaca;
    padding: 0 150px;

    h1{
        font-size: 70px;
        margin-bottom: 40px;
    }
    h5{
        font-size: 35px;
    }

    @media (max-width: 800px) {
        padding: 0;
        h1{
            font-size: 40px;
        }
        h5{
            font-size: 20px;
        }
    }
`;

const Method = styled.div`
    margin-top: 30px;
    color: #fff;
    max-width: 300px;
`;

const Google = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 30px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin-bottom: 20px;
    cursor: pointer;
    span{
        text-align: center;
        margin-left: 15px;
        font-size: 16px;
    }
    &:hover{
        background-color: #ebebeb;
    }
`;
const Apple = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 30px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin-bottom: 20px;
    cursor: pointer;
    span{
        text-align: center;
        margin-left: 15px;
        font-size: 16px;
    }
    img{
        width: 20px;
    }
    &:hover{
        background-color: #ebebeb;
    }
`;

const Or = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 130px;
`;


const Account = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 30px;
    background-color: #0095ff;
    color: #fff;
    border-radius: 30px;
    margin-bottom: 12px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: #0484e0;
    }
`;

const Notice = styled.p`
    font-size: 13px;
    padding: 0 10px;

    a{
        color: #0095ff;
        &:hover{
            text-decoration: underline;
        }
    }
`;

const NewAccount = styled.div`
    margin-top: 50px;
    h2{
        font-size: 20px;
    }
`;

const SignIn = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 12px 30px;
    border-radius: 30px;
    margin-top: 20px;
    background: transparent;
    color: #0095ff;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid #242424;
    cursor: pointer;
    &:hover{
        background-color: #0095ff11;
    }
`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);