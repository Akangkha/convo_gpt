import { useState, useRef } from "react";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";

const AudioRecorder = () => {
  const [permission, setPermission] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const mimeType = "audio/webm";
  const mediaRecorder = useRef(null);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = () => {
    setRecordingStatus("recording");
    console.log(recordingStatus);
    console.log("recording started");
    //create new Media recorder instance using the stream
    mediaRecorder.current = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    console.log(recordingStatus);
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    console.log(recordingStatus);
    console.log("recording stoopped");
    // Set onstop event before stopping the recording
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
      console.log("audioUrl", audioUrl);
    };
    console.log(recordingStatus);
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
  };

  return (
    <div>
      <main>
        <div className="audio-controls">
          {!permission ? (
            <button
              type="button"
              className="text-white p-2 bg-transparent"
              onClick={getMicrophonePermission}
            >
              <img
                onClick={getMicrophonePermission}
                src="/icons/mic.png"
                // className="absolute right-12 top-3"
                alt="microphone"
                width={20}
              />
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <button
              type="button"
              className="text-white p-2 bg-transparent"
              onClick={startRecording}
            >
              <img
                onClick={getMicrophonePermission}
                src="/icons/mic.png"
                
                // className="absolute right-12 top-3"
                alt="microphone"
                width={20}
              />
            </button>
          ) : null}
          {recordingStatus === "recording" ? (
            <button
              onClick={stopRecording}
              type="button"
              className=" p-2 bg-transparent"
            >
              <SpatialAudioOffIcon />
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default AudioRecorder;
