# nextJS_music(쉼표)

## 🖥️ 프로젝트 소개
nextJS를 기반으로 spotify API를 이용해 음악 검색 및 로그인시 감상할 수 있는 사이트 입니다. 

## 🧭 웹사이트
next-js-music-peach.vercel.app

## 🕰️ 개발 기간
- 24.01월 - 23.03월

## ⚙️ 개발환경
- Typescript
- Next JS/상태관리(Recoil)
- tailwind CSS
- Vercel(배포)

## ⚙️ 사용API
- spotify web API(https://developer.spotify.com/documentation/web-api)

## 📌주요 기능
### 실제 Youtube의 동영상 data를 가져와서 구현 - <a href="https://github.com/mandarinfactory/react_videoTube/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5(%EB%8F%99%EC%98%81%EC%83%81data%EA%B5%AC%ED%98%84)">위키</a>
- 실제 Youtube처럼 검색, 사이드바를 만들었고 각각의 키워드에 따라 클릭시 검색결과가 나오게 구현했습니다.
- 각각 해당 썸네일을 클릭하면 해당 동영상이 자동재생 및 정보 그리고 관련된 동영상 추천이 나오게 구현했습니다.

### 동영상 검색칸 - <a href="https://github.com/mandarinfactory/react_videoTube/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5(%EB%8F%99%EC%98%81%EC%83%81-%EA%B2%80%EC%83%89)">위키</a>
- 동영상 키워드 검색 후 엔터키를 누르면 검색결과가 나오게 했습니다.
- 마찬가지로 검색결과를 누르면 동영상 재생 및 동영상 관련 정보 그리고 관련된 동영상 추천까지 나오게 구현했습니다.

### 음성검색 및 다크모드 구현 - <a href="https://github.com/mandarinfactory/react_videoTube/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5(%EC%9D%8C%EC%84%B1%EA%B2%80%EC%83%89,-%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C)">위키</a>
- web speech API를 이용해 음성검색을 구현했습니다.
- 다크모드는 따로 useDarkmode라는 커스텀hook을 만들어서 구현했습니다.
