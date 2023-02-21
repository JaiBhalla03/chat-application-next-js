import React,{useState, useEffect, useContext} from "react";
import {Context} from "../context";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
const ChatEngine = dynamic(()=>
  import("react-chat-engine").then((module)=>module.ChatEngine)
)

const MessageFormSocial = dynamic(()=>
  import("react-chat-engine").then((module)=>module.MessageFormSocial)
)

export default function Chats() {
  const {username, secret} = useContext(Context);
  const router = useRouter();
  const [showChat, setShowChat] = useState(false)
  useEffect(()=>{
    if(typeof document !== null){
      setShowChat(true);
    }
    if(!showChat){
      return <div/>
    }
  })
  useEffect(()=>{
    if(username.length === 0 || secret.length === 0) router.push('/')
  })
  return (
      <div className="background">
        <div className={'shadow'}>
          <ChatEngine
              height={'calc(100vh-100px)'}
              projectID={'5e2c64e6-4ff9-42d4-82fe-2e6ae78c678f'}
              userName={username}
              userSecret={secret}
              renderNewMessageForm={()=><MessageFormSocial/>}
          />
        </div>
      </div>
  )
}
