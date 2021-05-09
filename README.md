# WebRTC-Practice
WebRTC Homepage ([WebRTC](https://webrtc.org/))

> webcam으로 video를 얻고, snapshots을 찍고 WebRTC를 통해 P2P를 공유하는 App Build   
위 과정에서 핵심 WebRTC API를 사용하고 Node.js를 사용하여 messaging server를 설정하는 방법을 배움

<br>

- 배우는 것
1. webcam에서 video streaming
    - webcam에서 video scream 가져오기
    - stream 재생 조작
    - CSS와 SVG를 사용하여 video 조작
2. RTCPeerConnection에서 video streaming
    - WebRTC shim, adapter.js를 사용하여 Browser 차이를 추상화
    - RTCPeerConnection API를 사용하여 video를 streaming
    - media capture 및 streaming 제어
3. RTCDataChannel을 사용하여 data 교환
    - webRTC endpoints(peers) 간에 data를 교환하는 방법
4. message 교환을 위한 signaling 서비스 설정
    - npm을 사용하여 package.json에 지정된대로 프로젝트 종속성 설치
    - Node.js server를 실행하고, node-static을 사용하여 정적 파일 제공
    - Socket.IO를 사용하여, Node.js에서 messaging 서비스 설정
    - messaging 서비스를 사용하여 '방'을 만들고 message 교환
5. peer 연결 및 signaling
    - Node.js에서 실행되는 Socket.IO를 사용하여 WebRTC 신호 서비스 실행
    - 해당 서비스를 사용하여 peer 간에 WebRTC metadata 교환
6. 사진을 찍고 채넣을 통해 data 공유
    - canvas 요소를 사용해 사진을 찍고 data를 가져옴
    - 원격 사용자와 이미지 data 교환

<br>
