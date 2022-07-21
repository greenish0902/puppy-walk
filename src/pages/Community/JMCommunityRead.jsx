import React, { memo } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import useAxios from 'axios-hooks';
import { NavLink } from 'react-router-dom';
import ButtonWrapper from '../../components/ButtonWrapper';
import ImageSlider from '../../components/Community/CommunityRead/ImageSlider';
import Comment from '../../components/Community/CommunityRead/Comment';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/scss/palette.scss';
import BottomBox from "../../components/Size/BottomBox";

const CommunityReadContainer = styled.div`
  width: 340px;
  margin-left: 10px;
  padding-top: 45px;

  hr {
    border: none;
    border-top: 1px solid var(--color-text-gray);
    margin: 5px 0;
  }

  .tab-tag-title {
    p {
      font-size: 0.6em;
      color: var(--color-text-gray);
    }

    div {
      display: flex;
      position: relative;

      h3 {
        font-size: 1.2em;
        display: block;
        width: 270px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      button {
        font-size: 0.6em;
        line-height: 20px;
        margin-top: 5px;
        position: absolute;
        right: 0;
      }
    }
  }

  .writer {
    position: relative;

    .profile-image {
      background-color: var(--color-gray);
      height: 30px;
      width: 30px;
      float: left;
      margin-right: 5px;
      border-radius: 15px;
    }

    h5 {
      font-size: 0.7em;
    }

    p {
      font-size: 0.6em;
    }

    button {
      font-size: 0.6em;
      line-height: 20px;
      margin-top: 13px;
      position: absolute;
      right: 0;
      top: -7px;
    }

    &:after {
      float: none;
      display: block;
      content: '';
      clear: both;
    }
  }

  .post {
    height: fit-content;
    font-size: 0.8em;
  }

  .thumbup {
    button {
      font-size: 0.8em;
      line-height: 30px;
      margin: 10px auto;
      display: block;
    }
  }

  .control {
    text-align: right;

    button {
      font-size: 0.6em;
      margin-left: 5px;
    }
  }

  .comment {
    padding-top: 10px;

    .comment-head {
      display: flex;

      p {
        line-height: 15px;
        margin-left: 5px;
      }
    }

    .comment-content {
      width: 80%;
      height: fit-content;
      background-color: var(--color-gray);
      border-radius: 15px;

      .comment-writer {
        display: flex;
        height: 25px;

        .comment-profile-image {
          background-color: var(--color-text-gray);
          height: 25px;
          width: 25px;
          float: left;
          margin-left: 5px;
          margin-top: 5px;
          border-radius: 12.5px;
        }

        p {
          line-height: 35px;
          margin-left: 5px;
          font-size: .8em;

          span {
            font-size: .8em;
            color: var(--color-text-gray);
          }
        }

      }

      .comment-text {
        font-size: .7em;
        margin: 10px;
        padding-bottom: 5px;
      }
    }

    textarea {
      resize: none;
      outline: none;
      width: 100%;
      height: 50px;
      font-size: 0.7em;
      font-family: inherit;
    }
  }
`;


const CommunityRead = memo(({tab}) => {
    const params = useParams();

    const [{data, loading, error}, refetch] = useAxios(
        `http://localhost:3001/post?postNum=${params.postNum}`,
    );


    const post = data && data[0];

    return (
        <CommunityReadContainer>
            <div className="tab-tag-title">
                <p>
                    {tab === 'general'
                        ? `자유게시판 > ${data && post.tag}`
                        : tab === 'kin'
                            ? '지식in'
                            : '산책코스추천'}
                </p>

                <div>
                    <h3>{post && post.title}</h3>
                    <NavLink to={`/community/${post && post.tab}`}>
                        <ButtonWrapper
                            width="60px"
                            height="20px"
                            padding="2px"
                            bgColor="text-gray"
                            color="white"
                        >
                            목록보기
                        </ButtonWrapper>
                    </NavLink>
                </div>
                <hr/>
            </div>
            <div className="writer">
                <div className="profile-image"></div>
                <h5>{post && post.authorNickname}</h5>
                <p>{post && post.date}</p>
                <ButtonWrapper
                    width="60px"
                    height="20px"
                    padding="2px"
                    bgColor="green-2"
                    color="white"
                >
                    메이트 신청
                </ButtonWrapper>
            </div>
            <hr/>
            <ImageSlider
                imgList={["https://image.news1.kr/system/photos/2018/8/3/3239143/article.jpg/dims/optimize", "http://cdn.lecturernews.com/news/photo/202203/93345_312029_1841.jpg"]}/>
            <div className="post">
                <p>{post && post.content}</p>
            </div>
            <div className="thumbup">
                <ButtonWrapper
                    width="50px"
                    bgColor="green-2"
                    color="white"
                    height="30px"
                    padding="1px"
                >
                    👍24
                </ButtonWrapper>
            </div>
            <div className="control">
                <ButtonWrapper
                    width="60px"
                    height="20px"
                    padding="2px"
                    bgColor="red"
                    color="white"
                >
                    삭제하기
                </ButtonWrapper>
                <ButtonWrapper
                    width="60px"
                    height="20px"
                    padding="2px"
                    bgColor="text-gray"
                    color="white"
                >
                    수정하기
                </ButtonWrapper>
            </div>
            <div className='comment'>
                <div className='comment-head'>
                    <FontAwesomeIcon icon={faComment}/>
                    <p>comment</p>
                </div>
                <hr/>
                {/* 댓글 반복문 영역 */}
                <Comment writer='댓글작성자' date='2022-05-05'
                         content='댓글이지롱. 댓글이지롱. 댓글이지롱. 댓글이지롱. 댓글이지롱. 댓글이지롱. 댓글이지롱. 댓글이지롱. 댓글이지롱. 댓글이지롱. '/>
                {/* 댓글 반복문 영역 */}
                <hr/>
                <textarea/>
                <ButtonWrapper bgColor='green-2' color='white'>댓글등록</ButtonWrapper>
            </div>
            <BottomBox/>
        </CommunityReadContainer>
    );
});

export default CommunityRead;
