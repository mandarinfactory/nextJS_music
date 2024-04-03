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
### 실제 Spotify data를 가져와 구현 - <a href="https://github.com/mandarinfactory/nextJS_music/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5(%EC%8B%A4%EC%A0%9C-Spotify-data%EB%A5%BC-%EA%B0%80%EC%A0%B8%EC%99%80-%EA%B5%AC%ED%98%84)">위키</a>
- 첫 페이지에서 Spotify의 플레이리스트, 무작위의 아티스트를 추천해주는 화면을 구현했습니다.
- 최신앨범 섹션을 따로 만들어서 최신앨범의 data를 받아 구현했습니다.
- 각각 해당 사진들을 클릭하면 해당 정보들과 관련된 정보, 노래들이 나오게 구현했습니다.

### 음악 검색 구현 - <a href="https://github.com/mandarinfactory/nextJS_music/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5(%EC%9D%8C%EC%95%85-%EA%B2%80%EC%83%89-%EA%B5%AC%ED%98%84)">위키</a>
- 노래 또는 가수 검색시 관련 아티스트, 노래, 앨범이 결과로 나오게 구현했습니다.
- 마찬가지로 클릭시 아티스트, 앨범은 자세한 정보 및 노래들이 나오게 구현했고, 노래는 바로 재생되게끔 구현했습니다(재생은 Spotify 프리미엄 유저만 가능합니다.).

### 음악 재생 구현 - <a href="https://github.com/mandarinfactory/nextJS_music/wiki/%EC%A3%BC%EC%9A%94%EA%B2%80%EC%83%89(%EC%9D%8C%EC%95%85-%EC%9E%AC%EC%83%9D-%EA%B5%AC%ED%98%84)">위키</a>
- Spotify Web API에서 따로 token을 받아 로그인시에 해당 token이 localStorage에 저장되게해 계속 로그인을 유지하게 하면서 재생하도록 구현했습니다.
- 로그아웃 시 localStorage에서 삭제하도록 구현했습니다.
