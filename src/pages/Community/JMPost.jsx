import React from 'react';
import styled from 'styled-components';
import '../../assets/scss/palette.scss';
import ButtonWrapper from '../../components/ButtonWrapper';

const PostContainer = styled.div`
  padding-top: 45px;
  margin-left: 10px;

  .info {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 0.8em;
  }

  select {
    width: fit-content;
  }

  .file {
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    label > div {
      background-color: var(--color-green-2);
      width: fit-content;
      padding: 5px;
      border-radius: 15px;

      p {
        font-size: 1em;
        color: var(--color-white);
      }
    }

    .filelist {
      font-size: 0.8em;
      padding-top: 5px;
    }

    input {
      opacity: 0;
      height: 0;
    }
  }

  .post {
    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    input {
      width: 340px;
      height: 20px;
      font-weight: normal;
    }

    textarea {
      width: 340px;
      height: 300px;
      resize: none;
      outline: none;
      font-size: 1em;
    }
  }

  .btn {
    display: flex;
    justify-content: center;

    button {
      margin: 10px;
      cursor: pointer;
    }
  }
`;

const Post = () => {
  const [filelist, setFileList] = React.useState('');

  const onChangeFile = e => {
    const list = [];
    for (let v of e.target.files) {
      list.push(v.name);
    }
    if (list.length > 10) {
      alert('사진은 10장 이하로 업로드가 가능합니다.');
      return;
    } else {
      setFileList(list.join(' '));
    }
  };

  return (
    <PostContainer>
      <div className="info">
        <div className="tab">
          <label htmlFor="tab">게시판 선택 > </label>
          <select style={{ fontSize: '0.7em' }} id="tab" name="tab">
            <option value="자유게시판">자유게시판</option>
            <option value="지식in">지식in</option>
            <option value="산책코스추천">산책코스추천</option>
          </select>
        </div>

        <div className="tag">
          <label htmlFor="tag">태그 선택 > </label>
          <select style={{ fontSize: '0.7em' }} id="tag" name="tag">
            <option value="강아지자랑">강아지자랑</option>
            <option value="낙서글">낙서글</option>
            <option value="산책후기">산책후기</option>
            <option value="토론">토론</option>
            <option value="정보글">정보글</option>
          </select>
        </div>

        <div className="file">
          <label htmlFor="img">
            <div>
              <p>이미지 추가</p>
            </div>
          </label>
          <p className="filelist">{filelist}</p>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            multiple
            onChange={onChangeFile}
          />
        </div>
      </div>

      <div className="post">
        <h3>글 제목</h3>
        <input type="text" />
        <h3>글 내용</h3>
        <textarea />
      </div>
      <div className="btn">
        <ButtonWrapper
          color="white"
          bgColor="green-2"
          width="fit-content"
          padding="10px 10px"
          onClick={e => {
            window.confirm('게시물을 등록하시겠습니까?');
          }}
        >
          작성하기
        </ButtonWrapper>
        <ButtonWrapper
          color="black"
          bgColor="gray"
          width="fit-content"
          padding="10px 10px"
          onClick={e => {
            window.confirm('게시물 등록을 취소하시겠습니까?');
          }}
        >
          취소하기
        </ButtonWrapper>
      </div>
    </PostContainer>
  );
};

export default Post;
