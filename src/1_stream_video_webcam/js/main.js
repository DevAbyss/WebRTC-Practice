'use strict';

/**
 * 작동 원리
 * getUserMedia() 호출 후 Browser는 사용자에게 카메라 액세스 권한 요청
 * (현재 origin에 카메라 액세스가 처음 요청된 경우)
 * 성공하면 MediaStream이 반환되며, srcObject 속성을 통해 media element에서 사용 가능
 * */

// constraints 인수를 사용하면, 가져올 media를 지정 가능
// https://webrtc.github.io/samples/src/content/peerconnection/constraints/
// 오직 video만 streaming
const mediaStreamConstraints = {
  video: true,
};

// stream이 배치될 video element
const localVideo = document.querySelector('video');

// video에서 재생될 local stream
let localStream;

// video element에 MediaStream 추가하여 success 처리
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// 오류 message와 함께 console에 message를 기록하여 오류 처리
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// media stream 초기화
// getUserMedia() - audio 및 video capture
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream)
  .catch(handleLocalMediaStreamError);
