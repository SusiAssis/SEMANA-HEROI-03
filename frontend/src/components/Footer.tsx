"use client";
import {
  Camera,
  CameraOff,
  Chamada,
  Microfone,
  MicrofoneOff,
  Tela,
  TelaOff,
} from "@/Icons";
import Container from "./Container";
import { useState } from "react";

export default function Footer() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0") + ":";
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return (
    <div className="fixed bottom-0 bg-black py-6 w-full">
      <Container>
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <p className="text-xl">
              {hours}
              {minutes}
            </p>
          </div>
          <div className="flex space-x-6 justify-center">
            {isMuted ? (
              <MicrofoneOff
                className="h-12 w-16 text-white p-2 bg-red-500 cursor-pointer rounded-md"
                onClick={() => setIsMuted(!isMuted)}
              />
            ) : (
              <Microfone
                className="h-12 w-16 text-white p-2 bg-gray-950 cursor-pointer rounded-md"
                onClick={() => setIsMuted(!isMuted)}
              />
            )}
            {isCameraOff ? (
              <CameraOff
                className="h-12 w-16 text-white p-2 bg-red-500 cursor-pointer rounded-md"
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            ) : (
              <Camera
                className="h-12 w-16 text-white p-2 bg-gray-950 cursor-pointer rounded-md"
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            )}
            {isScreenSharing ? (
              <TelaOff
                className="h-12 w-16 text-white p-2 bg-red-500 cursor-pointer rounded-md"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
              />
            ) : (
              <Tela
                className="h-12 w-16 text-white p-2 bg-gray-950 cursor-pointer rounded-md"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
              />
            )}
            <Chamada className="h-12 w-16 text-white p-2 hover:bg-red-500 bg-primary cursor-pointer rounded-md " />
          </div>
        </div>
      </Container>
    </div>
  );
}
