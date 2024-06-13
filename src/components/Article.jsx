import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from './Form';




const Article = () => {
    const scrollToRef = useRef({});

    const handleScrollToUserTitle = (refName) => {
        scrollToRef.current[refName].scrollIntoView({ behavior: 'smooth' });
    };

    const fullCommentRef = useRef(null);

    const handleContributeClick = () => {
        if (fullCommentRef.current) {
            fullCommentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [liked, setLiked] = useState(false);
    const [liked1, setLiked1] = useState(false);

    const handleLikeClick = () => {
        setCount(count + 1);
        setLiked(true);
    };
    const handleLikeClick1 = () => {
        setCount1(count1 + 1);
        setLiked1(true);
    };


    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <Container style={{ marginTop: '120px' }}>

                <div className=" mt-5 mb-5 ">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="left-side-book">
                                <img src="book.PNG" className="img-fluid" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="community-chat-box">
                                <div className="">
                                    <h1>Top experts in this article</h1>
                                    <p>Selected by the community from 37 contributions. <strong className="font-500"><a href="#" className="learn-more"> Learn More </a></strong></p>
                                </div>
                                <div className="earn-community-box">
                                    <div className="media">
                                        <div className="d-flex flex-nowrap justify-content-center">
                                            <div className="media-left flex-shrink-0">
                                                <img src="user.PNG" width="64px" alt="User" />
                                            </div>
                                            <div className="media-right flex-grow-1">
                                                <div className="media-right-title">
                                                    <h5>Earn a Community Top Voice badge</h5>
                                                </div>
                                                <p>Add to collaborative articles to get recognized for your expertise on your profile. <strong className="font-500"><a href="#" className="learn-more">Learn more</a></strong></p>
                                                <button className="contribute-btn" onClick={handleContributeClick}>Start a contribution</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-community-box">
                                    <div className="media">
                                        <div className="d-flex flex-nowrap justify-content-center">
                                            <a href="#">
                                                <div className="media-left flex-shrink-0">
                                                    <img src="user.PNG" width="64px" alt="User" />
                                                </div>
                                                <div className="media-right flex-grow-1">
                                                    <div className="user-title">
                                                        <h5> Salman Hossain Saif</h5>
                                                    </div>
                                                    <div className="user-designation">
                                                        <p>UX/UI Designer with 8+ Years of Experience | UX Writer & Mentor | Creating User-Centric Solutions for Web and Mobile </p>
                                                    </div>
                                                    <div className="view-and-reply d-flex flex-row">
                                                        <button onClick={() => handleScrollToUserTitle('user2')}>View contribution and reply</button>
                                                        <div className="d-flex reaction-buttons">

                                                            <span className="like-count">4</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-community-box">
                                    <div className="media">
                                        <div className="d-flex flex-nowrap justify-content-center">
                                            <a href="#">
                                                <div className="media-left flex-shrink-0">
                                                    <img src="user.PNG" width="64px" alt="User" />
                                                </div>
                                                <div className="media-right flex-grow-1">
                                                    <div className="user-title">
                                                        <h5> Ashutosh Sharma</h5>
                                                    </div>
                                                    <div className="user-designation">
                                                        <p>UX Designer &amp; AI Enthusiast | Linkedin Top UX, UX Design, UX Research, &amp; Product Design Voice</p>
                                                    </div>
                                                    <div className="view-and-reply d-flex flex-row">
                                                        <button onClick={() => handleScrollToUserTitle('user1')}>View contribution and reply</button>
                                                        <div className="d-flex reaction-buttons">
                                                            <img src="like.PNG" alt="Like" />
                                                            <span className="like-count">3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-community-box">
                                    <div className="media">
                                        <div className="d-flex flex-nowrap justify-content-center">
                                            <a href="#">
                                                <div className="media-left flex-shrink-0">
                                                    <img src="user.PNG" width="64px" alt="User" />
                                                </div>
                                                <div className="media-right flex-grow-1">
                                                    <div className="user-title">
                                                        <h5> Salman Hossain Saif</h5>
                                                    </div>
                                                    <div className="user-designation">
                                                        <p>UX/UI Designer with 8+ Years of Experience | UX Writer & Mentor | Creating User-Centric Solutions for Web and Mobile </p>
                                                    </div>
                                                    <div className="view-and-reply d-flex flex-row">
                                                        <button>View contribution and reply</button>
                                                        <div className="d-flex reaction-buttons">
                                                            <img src="like.PNG" alt="Like" />
                                                            <img src="bulb.PNG" alt="Bulb" />
                                                            <span className="like-count">8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="get-started-section">
                                    <div className="community-photos d-inline-flex">
                                        <img src="user.PNG" width="32px" className="border border-1 rounded-circle border-dark" alt="User" />
                                        <img src="user.PNG" width="32px" className="border border-1 rounded-circle border-dark" alt="User" />
                                        <img src="user.PNG" width="32px" className="border border-1 rounded-circle border-dark" alt="User" />
                                    </div>
                                    <div className="see-what-other-saying-button d-inline-flex">
                                        <button onClick={handleContributeClick}>See what others are saying <span><i className="fa-solid fa-arrow-down"></i> </span></button>
                                    </div>
                                </div>
                                <div className="add-your-perspective-btn">
                                    <button>Add your perspective</button>
                                </div>
                                <div ref={fullCommentRef} className="full-comment-community-box" >
                                    <div className="media">
                                        <div className="d-flex flex-nowrap justify-content-center">
                                            <a href="#">
                                                <div className="media-left flex-shrink-0">
                                                    <img src="user.PNG" width="64px" alt="User" />
                                                </div>
                                            </a>
                                            <div className="media-right flex-grow-1" ref={(el) => (scrollToRef.current.user1 = el)}>
                                                <a href="#">
                                                    <div className="user-title">
                                                        <h5>  Ashutosh Sharma</h5>
                                                    </div>
                                                    <div className="user-designation one-ellipsis">
                                                        <p>UX/UI Designer with 8+ Years of Experience | UX Writer & Mentor | Creating User-Centric Solutions for Web and Mobile </p>
                                                    </div>
                                                </a>
                                                <div className="comment-text line-clamp-5">
                                                    <p>
                                                        Tailoring the UI to the specific industry of the crucial for success. For instance, a gaming community platform would require a design that caters to the preferences and expectations of gamers, while a professional photography community would demand a more sophisticated
                                                        <span id="dots" style={{ display: isExpanded ? 'none' : 'inline' }}>...</span>
                                                        <span id="more-text" style={{ display: isExpanded ? 'inline' : 'none' }}>
                                                            and streamlined interface. Understanding the nuances of each industry ensures that the experience aligns with the community's needs and fosters engagement.
                                                        </span>
                                                        <button id="myseemoreBtn" onClick={handleToggle}>
                                                            {isExpanded ? 'show less' : 'see more'}
                                                        </button>
                                                    </p>
                                                </div>
                                                <div className="like-unlike d-flex flex-row">
                                                    <div className="d-flex like-btn">
                                                        <a href="#" className="like-anchor" onClick={handleLikeClick}>
                                                            <i className={`fa-regular fa-thumbs-up ${liked ? 'liked' : ''}`}></i>
                                                            <span className="like-hit-btn">Like</span>
                                                        <span className="like-count ">{count}</span>
                                                        </a>
                                                    </div>
                                                   
                                                    <div className="d-flex reply-comment">

                                                    </div>
                                                    <Form />
                                                </div>
                                                <div id="text-comment" className="collapse">
                                                    <textarea placeholder="Reply to this contribution"></textarea>
                                                    <div className="d-flex align-content-center justify-content-end gap-2">
                                                        <button className="cancel-reply-btn"> Cancel </button>
                                                        <button className="reply-comment-btn"> Reply </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="full-comment-community-box">
                                    <div className="media">
                                        <div className="d-flex flex-nowrap justify-content-center">
                                            <a href="#">
                                                <div className="media-left flex-shrink-0">
                                                    <img src="user.PNG" width="64px" alt="User" />
                                                </div>
                                            </a>
                                            <div className="media-right flex-grow-1" ref={(el) => (scrollToRef.current.user2 = el)}>
                                                <a href="#">
                                                    <div className="user-title">
                                                        <h5> Salman Hossain Saif</h5>
                                                    </div>
                                                    <div className="user-designation one-ellipsis">
                                                        <p>UX/UI Designer with 8+ Years of Experience | UX Writer & Mentor | Creating User-Centric Solutions for Web and Mobile </p>
                                                    </div>
                                                </a>
                                                <div className="comment-text line-clamp-5">
                                                    <p>
                                                        Tailoring the UI to the specific industry of the crucial for success. For instance, a gaming community platform would require a design that caters to the preferences and expectations of gamers, while a professional photography community would demand a more sophisticated
                                                        <span id="dots">...</span><span id="more-text"> and streamlined interface. Understanding the nuances of each industry ensures that the experience aligns with the community's needs and fosters engagement.</span>
                                                        {/* <button id="myseemoreBtn">see more</button> */}
                                                        {/* <button onClick={myFunction} id="myseemoreBtn">see more</button> */}
                                                    </p>
                                                </div>
                                                <div className="like-unlike d-flex flex-row">
                                                    <div className="d-flex like-btn">
                                                        <a href="#" className="like-anchor" onClick={handleLikeClick1}>
                                                            <i className={`fa-regular fa-thumbs-up ${liked1 ? 'liked1' : ''}`}></i>
                                                            <span className="like-hit-btn">Like</span>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex reaction-buttons">
                                                        <a href="#">
                                                            <img src="like.PNG" alt="Like" />
                                                            <img src="bulb.PNG" alt="Bulb" />
                                                        </a>
                                                        <span className="like-count">{count1}</span>
                                                    </div>

                                                    <div className="d-flex reply-comment">
                                                        <a href="#text-comment1" className="reply-anchor" data-bs-toggle="collapse">
                                                            <i className='far fa-comment-dots'></i>
                                                            <span className="reply-btn">Reply</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="text-comment1" className="collapse">
                                                    <textarea placeholder="Reply to this contribution"></textarea>
                                                    <div className="d-flex align-content-center justify-content-end gap-2">
                                                        <button className="cancel-reply-btn"> Cancel </button>
                                                        <button className="reply-comment-btn"> Reply </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-more-contrubute">


                                    <button>Load more contributions</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Article;
