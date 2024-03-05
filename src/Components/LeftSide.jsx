import styled from "styled-components";
import { signOutAPI } from "../Actions";
import { connect } from "react-redux";

const LeftSide = (props) => {
    return (
        < Container >
            <Logo>
                <img src="./images/x.png" alt="" />
            </Logo>
            <Navbar>
                <Nav>
                    <a>
                        <img src="./images/home.png" alt="" />
                        <span>Home</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/search.png" alt="" />
                        <span>Explore</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/notification.png" alt="" />
                        <span>Notifications</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/message.png" alt="" />
                        <span>Messages</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/grok.png" alt="" />
                        <span>Grok</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/list.png" alt="" />
                        <span>Lists</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/bookmark.png" alt="" />
                        <span>Bookmarks</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/community.png" alt="" />
                        <span>Communities</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/x.png" alt="" />
                        <span>Premium</span>
                    </a>
                </Nav>
                <Nav>
                    <a>
                        <img src="./images/user.png" alt="" />
                        <span>Profile</span>
                    </a>
                </Nav>
                <Nav>
                    <p>
                        <a>
                            <img src="./images/more.png" alt="" />
                            <span>More</span>
                        </a>
                    </p>
                </Nav>
                <Post>Post</Post>
                <UserInfo>
                    {props.user && props.user.photoURL ? (
                        <img src={props.user.photoURL} alt="" />
                    ) :
                        (
                            <img src="./images/user.svg" alt="" />
                        )
                    }
                    {props.user && (
                        <span>
                            <p>{props.user.displayName}</p>
                            <p>{props.user.email}</p>
                        </span>
                    )}
                    <SignOut onClick={() => props.SignOut()}>
                        <a>Sign Out</a>
                    </SignOut>
                </UserInfo>
            </Navbar>
        </Container >
    )
}

const Container = styled.div`
    margin: 10px;
`;

const Logo = styled.a`
    position: fixed;
    top: 10px;
    margin: 20px;
    img{
        width: 30px;
    }

    @media (max-width: 800px) {
        display: none;

    }
`;

const Navbar = styled.div`
    position: fixed;
    top: 80px;

    @media (max-width: 800px) {
        top: 20px;
        margin: 0;
        padding: 0;

        ::before{
            content: '';
            position: absolute;
            width: 1px;
            height:100vh;
            background-color: #aaa;
            left: 70px;
        }
    }

`;

const Nav = styled.div`
    padding: 5px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        padding: 8px 16px;

        &:hover{
            border-radius: 30px;
            background-color: #191919;

            span{
                font-weight: 700;
            }
        }
    }
    img{
        width: 30px;
        margin-right: 15px;
    }

    @media (max-width: 800px) {
     span{
        display: none
     } 
     p{
        display:none;
     } 
     img{
        width: 25px;
    } 
    }
`;

const Post = styled.div`
    padding: 20px;
    margin-top: 25px;
    background-color: #06b0bc;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;

    &:hover{
        background-color: #0497a1;
    }

    @media (max-width: 800px) {
     display: none   
    }
`;

const SignOut = styled.div`
    position: absolute;
    top: 680px;
    background-color: #a70000;
    padding: 10px 16px;
    border-radius: 5px;
    text-align: center;
    display: none;
    cursor: pointer;
    a{
        font-size: 15px;
    }

    @media (max-width: 768px) {
        top: 510px;
        padding: 6px 6px;
        width: 58px;
        a{
            font-size:12px;
        }
    }
`;

const UserInfo = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    span{
        p{
            margin: 5px;
            font-size: 12px;
        }
    }

    &:hover{
        ${SignOut} {
            display: flex;
            align-items: center;
            justify-content: center;   
        }
    }

    @media (max-width: 800px) {
        span{
            display: none;
        }
    }
   
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) => ({
    SignOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);