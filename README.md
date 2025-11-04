# TODO! (To-Do List)

## Project Overview
<!--
> 할 일 목록을 작성하고 관리할 수 있는 웹 사이트입니다
> -->
A simple to-do list application with theme switching capabilities.

<br/>

## Motivation
<!--
- 기본적인 CRUD 기능이 포함된 투두 리스트를 제작해보고 싶었습니다
- Context API를 이용해 다크 모드를 구현해보고 싶어서 다크 모드가 포함된 사이트를 제작했습니다-->
- To practice implementing basic CRUD operations in a real application
- To explore Context API by buildling a dark mode feature

<br/>

## Live Demo
[https://co-todo-list.netlify.app](https://co-todo-list.netlify.app)

<br/>

## Preview
<img height="420" alt="Light mode preview" src="https://github.com/user-attachments/assets/701d8d69-064a-448a-b9ca-1f07eca1a201" />
<img height="420" alt="Dark mode preview" src="https://github.com/user-attachments/assets/58986af7-0f79-4482-8126-2fbab88c74cb" />
<br/><br/>

## Features
### Task Management
<!--- 새로운 투두 아이템 추가
* 투두 아이템의 상태 변경(완료, 미완료)
* 투두 아이템 삭제
* 투두 목록 캐싱-->
- Add new to-do items
- Toggle task status (incomplete/completed)
- Delete tasks

### To-do Data Caching
- Automatically saves to-do list to 'localStorage'
- Restores tasks on page reload

### Theme Switching
- Light and dark mode support
- Theme preference stored in 'localStorage' until session ends
<br/>

## Tech Stack
<!--* Context API
  - 다크 모드 Context를 이용해 라이트 모드, 다크 모드 구현
* PostCSS
  - CSS 모듈화
* localStorage-->
**React.js** with Context API
- Global state management for dark mode theme
  
**PostCSS**
- CSS modules for maintainable styling
  
**localStorage**
- Client-side data storing
