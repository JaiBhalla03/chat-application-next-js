import React, {useContext} from "react";
import {Context} from "../context";
import {useRouter} from "next/router";
import axios from 'axios';

export default function Auth() {
    const {
        username,
        setUsername,
        setSecret,
        secret
    } = useContext(Context)
    const router = useRouter();
    function onSubmit(e){
        e.preventDefault()
        if(username.length === 0 || secret.length === 0){
            return;
        }
        axios.put(
            'https://api.chatengine.io/users/',
            {username, secret},
            {headers : {"Private-key" : '7e674c4c-33d1-4249-abeb-3a5f788eba8a'}}
        ).then(r=>{
            router.push('/chats');
        })
    }
  return(
      <div className="background">
        <div className='auth-container'>
          <form className={'auth-form'} onSubmit={e=>onSubmit(e)}>
              <div className={'auth-title'}>
                  NextJS Chat
              </div>
              <div className={'input-container'}>
                  <input
                      placeholder={'Email'}
                      className={'text-input'}
                      onChange={e=>setUsername(e.target.value)}
                  />
              </div>
              <div className={'input-container'}>
                  <input
                      placeholder={'password'}
                      type={'password'}
                      className={'text-input'}
                      onChange={e=>setSecret(e.target.value)}
                  />
              </div>
              <button type={'submit'} className={'submit-button'}>
                  Login/Sign Up
              </button>
          </form>
        </div>
      </div>
  )
}
