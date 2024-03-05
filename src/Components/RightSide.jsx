import styled from "styled-components";

const RightSide = (props) => {
    return (
        <Container>
            <Search>
                <img src="./images/search.png" alt="" />
                <input type="text" placeholder="Search" />
            </Search>
            <Subscribe>
                <h3>Subscribe to Premium</h3>
                <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <Btn>Subscribe</Btn>
            </Subscribe>
            <Happening>
                <h3>What’s happening</h3>
                <Part>
                    <h5>Paris Fashion Week Fall 2024</h5>
                    <p>Fashion · LIVE</p>
                    <span>Trending with <a>#ParisFashionWeek</a></span>
                </Part>
                <Tranding>
                    <span>
                        Trending in India
                        <img src="./images/dot.png" alt="" />
                    </span>
                    <h5>#shameful</h5>
                    <p>3,475 posts</p>
                </Tranding>
                <Tranding>
                    <span>
                        Trending in India
                        <img src="./images/dot.png" alt="" />
                    </span>
                    <h5>#AnantRadhikaWedding</h5>
                    <p>3,475 posts</p>
                </Tranding>
                <Tranding>
                    <span>
                        Trending in India
                        <img src="./images/dot.png" alt="" />
                    </span>
                    <h5>#Dhanshree</h5>
                    <p>2,975 posts</p>
                </Tranding>
                <Tranding>
                    <span>
                        Indian Premier League · Trending
                        <img src="./images/dot.png" alt="" />
                    </span>
                    <h5>#MSDhoni</h5>
                    <p>11.5K posts</p>
                </Tranding>
                <More>
                    Show More
                </More>
            </Happening>
            <Follow>
                <h5>Who to Follow</h5>
                <Info>
                    <User>
                        <img src="./images/shubmanGill.jpg" alt="" />
                        <a>
                            <span>Shubman Gill</span>
                            <p>@ShubmanGill</p>
                        </a>
                    </User>
                    <FollowBtn>
                        <a>Follow</a>
                    </FollowBtn>
                </Info>

                <Info>
                    <User>
                        <img src="./images/GoogleCLoud.jpg" alt="" />
                        <a>
                            <span>Google Cloud</span>
                            <p>@googlecloud</p>
                        </a>
                    </User>
                    <FollowBtn>
                        <a>Follow</a>
                    </FollowBtn>
                </Info>
                <Info>
                    <User>
                        <img src="./images/modi.png" alt="" />
                        <a>
                            <span>PMO India</span>
                            <p>@PMOIndia</p>
                        </a>
                    </User>
                    <FollowBtn>
                        <a>Follow</a>
                    </FollowBtn>
                </Info>
                <More>
                    Show More
                </More>
            </Follow>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    max-width: 500px;
    margin: 0;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    background: #333;
    max-width: 380px;
    border-radius: 35px;

    img{
        margin-left: 15px;
    }

    input{
        border: none;
        outline:none;
        background: transparent;
        width: 100%;
        height: 100%;
        padding: 10px 0;
        margin-left: 10px;
        font-size: 16px;
        color: #fff;
    }
`;

const Subscribe = styled.div`
    margin: 15px 0;
    background: #333;
    max-width: 350px;
    height: auto;
    border-radius: 20px;
    padding: 10px 20px ;
    h5{
        font-size: 18px;
    }
    p{
        font-size: 12px;
        margin-top: 10px;
    }
`;

const Btn = styled.button`
    margin-top: 12px;
    padding: 8px 20px;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #06b0bc;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: #0497a1;
    }
`;


const Happening = styled.div`
    margin: 15px 0;
    background: #333;
    max-width: 350px;
    height: auto;
    border-radius: 20px;
    padding: 10px 20px ;
`;

const Part = styled.div`
    margin-top: 15px;
    cursor: pointer;
    h5{
        font-size: 16px;
    }
    p{
        font-size: 12px;
        color: #aaa;
        margin-top: 5px;
    }
    span{
        margin-top: 5px;
        font-size: 12px;
        color: #aaa;

        a{
            color: #06b0bc;

            &:hover{
                text-decoration: underline; 
            }
        }
    }
`;

const Tranding = styled.div`
    margin-top: 15px;
    cursor: pointer;

    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: #aaa;
    }
    h5{
        font-size: 15px;
        margin-top: 5px;
    }
    p{
        margin-top: 5px;
        font-size: 14px;
        color: #aaa;
    }

    @media (max-width: 500px) {
        h5{
            font-size: 12px;
        }
    }

`;

const More = styled.div`
    margin-top: 8px;
    font-size: 14px;
    color: #06b0bc;
    cursor: pointer;
`;

const Follow = styled.div`
    margin: 12px 0;
    background: #333;
    max-width: 350px;
    height: auto;
    border-radius: 20px;
    padding: 10px 20px;

    @media (max-width: 500px) {
        h5{
            font-size: 12px;
        }
    }

`;

const Info = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
    }
`;

const User = styled.div`
    display:flex;
    align-items: center;

    a{
        font-size: 14px;
        color: #aaa;

        p{
            margin-top: 5px;
        }
    }

    img{
        width: 45px;
        border-radius: 50%;
        margin-right: 10px;
    }
`;

const FollowBtn = styled.button`
    padding: 8px 16px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 25px;
    font-weight: 900;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;



export default RightSide