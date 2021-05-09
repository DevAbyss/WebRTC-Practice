# WebRTC

## 1. Introduction
- WebRTC는 Web 및 native app에서 오디오, 비디오 및 데이터의 실시간 통신을 가능하게 하는 오픈 소스 프로젝트입니다.
- 아래는 WebRTC에서 제공하는 JS API 및 demo입니다.
    - getUserMedia() - 오디오 및 비디오 캡쳐
    - MediaRecorder - 오디오 및 비디오를 기록
    - RTCPeerConnection - 사용자 간에 오디오 및 비디오를 스트리밍
    - RTCDataChannel - 사용자 간의 스트림 데이터

<br>

## 2. WebRTC 사용 가능한 Browser
- Firefox, opera, desktop, android의 Chrome
- IOS 및 Android의 기본 App

<br>

## 3. Signaling
- WebRTC는 RTCPeerConnection을 사용하여 Browser 간에 스트리밍 데이터를 전달하지만, 통신을 조정하고 시그널링이라고 하는 프로세스인 제어 메시지를 보내는 메커니즘이 필요합니다.
- 시그널링 방법 및 프로토콜은 WebRTC에서 지정하지 않습니다. 이 코드랩에서는 메시징에 Socket.IO를 사용하지만, 여러 가지 대안이 있습니다.

<br>

## 4. STUN and TURN
- WebRTC는 P2P로 작동하도록 설계되었으므로, 사용자는 가능한 가장 direct 경로로 연결할 수 있습니다.
- 그러나 WebRTC는 실제 네트워킹에 대처하도록 구축돼 있습니다.<br>
(클라이언트 애플리케이션은 NAT 게이트웨이와 방화벽을 통과해야 하며, P2P 네트워킹은 직접 연결이 실패할 경우 fallbacks가 필요)
- 이 프로세스의 일부로 WebRTC API는 STUN 서버를 사용하여 컴퓨터의 IP 주소를 가져오고, TURN 서버는 피어 투 피어 통신이 실패할 경우 릴레이 서버로 작동합니다.

<br>

## 5. WebRTC secure
- 암호화는 모든 WebRTC 구성요소에 필수이며, 해당 JS API는 보안 원본(HTTPS or localhost)에서만 사용할 수 있습니다.
- 시그널링 메커니즘은 WebRTC 표준에 의해 정의되지 않았으므로, 보안 프로토콜을 사용하는지 확인해야 합니다.

<br>

