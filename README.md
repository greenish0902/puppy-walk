# 산책하개 (puppy-walk)

산책하개에서 당신의 반려견과 함께할 산책 메이트를 만나보세요.

# Coding Convention

1. ReactJS

   - 함수형 컴포넌트
   - 파일명: PascalCase(ex. HelloWorld.jsx)
   - 자식 컴포넌트가 없으면 해당 태그 내에서 닫아주기 (ex. `<Foo bar="bar" baz="baz" />`)
   - ref. [Aribnb ReactJS Style Guide](https://airbnb.io/javascript/react/)

2. Git commit message

   - Add
   - Update
   - Fix

3. CSS

   - CSS-in-JS 라이브러리 (styled-components) 사용
   - 선택자 간 엔터로 구분
   - 예시
   - ```css
     a {
       font-size: 12px;
       &:focus {
         color: #189193;
       }
     }

     p {
       line-height: 14px;
     }
     ```

4. Settings

   - 2칸 띄어쓰기

5. 폴더 구조
   - 논의중
