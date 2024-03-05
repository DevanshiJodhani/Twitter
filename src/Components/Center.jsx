import styled from "styled-components";
import Header from "./Header";
import Post from "./Post";
import { useEffect, useState } from "react";
import { getArticlesAPI } from "../Actions";
import ReactPlayer from "react-player";
import { connect } from "react-redux";


const Center = (props) => {

    const [showModel, setShowModel] = useState("close");

    useEffect(() => {
        props.getArticles();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch(showModel) {
            case "open" :
                setShowModel("close");
                break;

            case "close" :
                setShowModel("open");
                break;

            default: 
                setShowModel("close");
                break;
        }
    }
    return (
        <Container>
            <Up>
                <Header />
            </Up>
            <ShareBox>
                <div>
                    {props.user && props.user.photoURL ? (
                        <img src={props.user.photoURL} alt="" />
                    ) :
                        (
                            <img src="/images/user.svg" alt="" />
                        )
                    }
                    <button onClick={handleClick}>What is happening?!</button>
                </div>
                <div>
                    <button>
                        <img src="./images/photo.png" alt="" />
                    </button>
                    <button>
                        <img src="./images/gif.png" alt="" />
                    </button>
                    <button>
                        <img src="./images/poll.png" alt="" />
                    </button>
                    <button>
                        <img src="./images/smile.png" alt="" />
                    </button>
                    <button>
                        <img src="./images/calender.png" alt="" />
                    </button>
                    <button>
                        <img src="./images/map.png" alt="" />
                    </button>
                    <Btn>
                        <span>Post</span>
                    </Btn>
                </div>
            </ShareBox>
            {/* {props.articles.lenth === 0 && <p>There are no articles</p>} */}
            <Content>
                {props.articles.length > 0 && props.articles.map((article, key) => (
                    <Artical key={key}>
                        <SharedActor>
                            <a>
                                <img src={article.actor.image} alt="" />
                                <div>
                                    <span>{article.actor.title}</span>
                                    <span>{article.actor.description}</span>
                                    <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                </div>
                            </a>
                            <button>
                                <img src="/images/ellipsis.png" alt="" />
                            </button>
                        </SharedActor>
                        <Description>{article.description}</Description>
                        <SharedImg>
                            <a>
                                {!article.sharedImg && article.video ?
                                    (<ReactPlayer width={'100%'} url={article.video} />)
                                    :
                                    (article.sharedImg && <img src={article.sharedImg} />)
                                }
                            </a>
                        </SharedImg>
                        <SocialActions>
                            <button>
                                <img src="./images/comment.png" alt="" />
                            </button>
                            <button>
                                <img src="./images/send.png" alt="" />
                            </button>
                            <button>
                                <img src="./images/like.png" alt="" />
                            </button>
                            <button>
                                <img src="./images/save.png" alt="" />
                            </button>
                            <button>
                                <img src="./images/dot.png" alt="" />
                            </button>
                        </SocialActions>
                    </Artical>
                ))}
            </Content>
            <Post showModel={showModel} handleClick={handleClick} />
        </Container>
    )
}
const Container = styled.div`
    max-width: 503px;
`;

const Up = styled.div`
 margin-bottom: 39px;
`;

const ShareBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 8px;
    border-bottom: 1px solid #1f1f1f;
    div{

        button{
            display: flex;
            align-items: center;
            border: none;
            outline: none;
            font-size: 18px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            color: #aaa;
            cursor: pointer;
        }
        &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;

            img{
                width: 48px;
                border-radius:50%;
            }

            button{
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                background: transparent;
                text-align: left;
            }
        }
        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            padding-top: 10px;
            margin-left: 10px;
            cursor: pointer;

            button{
                img{
                    padding: 5px;
                    border-radius: 50%;
                    margin-left: 4px;

                    &:hover{
                        background-color: #b7d0d239;
                    }

                    @media (max-width:800px) {
                        width: 20px;
                    }
                }
                
            }

            @media (max-width:800px) {
                        margin-left: 0;
                    }

        }
    }
`;

const Btn = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 80px;
    padding: 8px 24px;
    background: #06b0bc;
    border-radius: 30px;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: #0497a1;
    }
    @media (max-width:800px) {
        margin-left: 10px;
    }

`;

const Content = styled.div`
    text-align: center;
    & > img{
        width: 30px;
    }
`;

const Artical = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    border: none;
    background-color: transparent;
    position: relative;
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding: 12px 16px;
    padding-right: 40px;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 8px;
    display: flex;

    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span{
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                }
                &:nth-child(n+1){
                    font-size: 12px;
                    color: #fff;
                }
            }
        }

    }

    button{
        border: none;
        outline: none;
        background: transparent;
        position: absolute;
        right: 12px;
        top: 0;

        img{
            width: 25px;
            height: 25px;
        }
    }
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    text-align: left;

`;

const SharedImg = styled.div`
    margin-top: 8px;
    display: block;
    position: relative;
    width: 100%;
    background: transparent;

    img{
        width: 100%;
        height: 100%;
    }
`;

const SocialActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 4px 50px;
    min-height: 40px;
    border-bottom: 1px solid #1f1f1f;

    button{
        border: none;
        outline: none;
        background:transparent;
        display: inline-flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;

        &:hover{
            background-color: #0c0c0c;
            border-radius: 50%;
        }
    }

    @media (max-width: 800px) {
        padding: 4px 10px;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
        articles: state.articleState.articles,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticlesAPI()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Center);