import { useState } from "react";
import { css, styled } from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { postArticalAPI } from "../Actions/index"
import firebase from "firebase/compat/app";

const Post = (props) => {
    const [editorText, setEditorText] = useState('');
    const [shareMedia, setShareMedia] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [assetsArea, setAssetArea] = useState('');

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === " " || image === undefined) {
            alert(`not an Image, the file is a ${typeof image}`)
            return;
        }
        setShareMedia(image);
    };

    const switchAssetArea = (area) => {
        setShareMedia("");
        setVideoLink("");
        setAssetArea(area);
    };

    const postArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        };

        const payload = {
            image: shareMedia,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };

        if (shareMedia === "" && videoLink === "") {
            props.postArticle(payload);
        } else {
            props.postArticle(payload);
        }

        reset(e);
    };

    const reset = (e) => {
        setEditorText("");
        setShareMedia("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    }

    return (
        <>
            {props.showModel === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(e) => props.handleClick(e)}>
                                <img src="./images/close.png" alt="" />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                {props.user.photoURL ? (
                                    <img src={props.user.photoURL} />
                                ) :
                                    (
                                        <img src="./images/user.svg" alt="" />
                                    )
                                }
                                <span>{props.user.displayName}</span>
                            </UserInfo>
                            <Editor>
                                <textarea value={editorText} onChange={(e) => setEditorText(e.target.value)} placeholder="What is happening?!" autoFocus={true} />

                                {assetsArea === "image" ? (
                                    <UploadImage>
                                        <input type="file" accept="image/gif, image/jpg, image/png, image/jpeg" name="image" id="file" style={{ display: "none" }} onChange={handleChange} />
                                        <p><label htmlFor="file">Select an Image to Upload</label></p>
                                        {shareMedia && <img src={URL.createObjectURL(shareMedia)} />}
                                    </UploadImage>
                                ) :
                                    (
                                        assetsArea === "media" && (
                                            <UploadVideo>
                                                <input type="text" placeholder="Please Enter Video Link" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
                                                {videoLink && (<ReactPlayer width={'100%'} url={videoLink} />)}
                                            </UploadVideo>
                                        )
                                    )

                                }


                            </Editor>
                        </SharedContent>
                        <ShareCreation>
                            <AttachAssets>
                                <AssetsButton onClick={() => switchAssetArea("image")}>
                                    <img src="./images/photo.png" alt="" />
                                </AssetsButton>
                                <AssetsButton onClick={() => switchAssetArea("media")}>
                                    <img src="./images/video.png" alt="" />
                                </AssetsButton>
                                <AssetsButton>
                                    <img src="./images/poll.png" alt="" />
                                </AssetsButton>
                                <AssetsButton>
                                    <img src="./images/smile.png" alt="" />
                                </AssetsButton>
                                <AssetsButton>
                                    <img src="./images/calender.png" alt="" />
                                </AssetsButton>
                                <AssetsButton>
                                    <img src="./images/map.png" alt="" />
                                </AssetsButton>
                            </AttachAssets>
                            <PostButton disabled={!editorText} onClick={(event) => postArticle(event)}>
                                post
                            </PostButton>
                        </ShareCreation>
                    </Content>
                </Container>
            }
        </>
    )
}

const Container = styled.div`
    color: #fff;
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s; 
`;

const Content = styled.div`
    width: 100%;
    max-width: 502px;
    background-color: rgba(0, 0, 0, 0.9);
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    margin: 0 0 0 588px;
    display: flex;
    flex-direction: column;
    top: 50px;

    @media (max-width: 800px) {
        margin: 0 0 0 95px;   
        width: 80%;
    }

    @media (max-width: 430px) {
        margin: 0 0 0 95px;
        width: 70%;
    }
`;

const Header = styled.div`
    display: flex;
    padding: 0 20px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 40px;
        height: 40px;
        min-width: auto;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;

        svg, img{
            pointer-events: none;
        }


        &:hover{
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;

        }
    }

`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px 12px;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;

    &::-webkit-scrollbar {
        width: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #aaa9a999;
    }

    &::-webkit-scrollbar-track {
        background-color: #f5f5f5; 
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg, img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-clip: content-box;
    }

    span{
        font-size: 15px;
        font-weight: 600;
        line-height: 1.5;
        margin-left: 8px;
    }
`;

const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
        border: none;
        outline: none;
        background: transparent;
        color: #fff;
    }
`;

const UploadImage = styled.div`
    text-align: center;
    img{
        margin-top: 30px;
        width: 100%;
    }
    video{
        margin-top: 30px;
        width: 100%;
    }
    label{
        color: #000;
        background-color: #fff;
        padding: 12px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            background-color: #ebebeb;
        }

        @media (max-width: 430px) {
            padding: 8px;
            font-size: 12px;
        }
    }
`;

const UploadVideo = styled.div`
    input{
        padding: 16px 24px;
        border-radius: 8px;
        text-align: center;
        
            @media (max-width: 430px) {
                padding: 8px;
                font-size: 12px;
            }
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
    flex-wrap: wrap;
`;

const AssetsButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    min-width: auto;
    font-size: 16px;
    cursor: pointer;

    &:hover{
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1)
    };
`;

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;

    ${AssetsButton} {
        width: 40px;
        margin-left: 2px;
    }
`;


const PostButton = styled.button`
    min-width: 60px;
    border-radius: 24px;
    border: none;
    outline: none;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;

    ${(props) =>
        props.disabled
            ? css`
                  background: #aaa;
                `
            : css`
                  background: #0a66c2;
                  &:hover {
                      background: #004182;
                  }
                `
    }

    @media screen {
     padding: 8px;   
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticalAPI(payload))

})

export default connect(mapStateToProps, mapDispatchToProps)(Post);