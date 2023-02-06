import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'


const steps = [
  {
    id:'Greet',
    message: 'Hello, Welcome to our website, before going to your questions let us generate OTP for authentication.',
    trigger:'Ask Name'
  },
  {
    id:'Ask Name',
    message: 'Please enter your name',
    trigger:'waiting1'
  },
  {
    id:'waiting1',
    user: true,
    trigger:'Name'
  },
  {
    id:'Name',
    message: 'Hi {previousValue}, Please write your mobile number',
    trigger:'phone'
  },
  {
      id:'phone', 
      user:true, 
      validator: (value) => {
         if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
           {
             return true;
           }
         else
           {
             return'Please enter a valid phone number.';
           }
      },
      //user:true,
      trigger:'thanks'
  },
  {
      id:'thanks',
      message: 'Thank you for your details, Please select your issue',
      trigger:'issues'
  },
  {
    id:'issues',
    options: [
      {value: "React js",label:"React js",trigger:"React js"},
      {value: "Node js",label:"Node js",trigger:"Node js"},
      {value: "Javascript",label:"Javascript",trigger:"Java"},
      {value: "CSS",label:"CSS",trigger:"css"},
      {value: "HTML",label:"HTML",trigger:"html"},
      {value: "How to ask question on stackoverflow ?",label:"How to ask question on stackoverflow ?",trigger:"ask"},
      {value: "How to post an answer on stackoverflow ?",label:"How to ask question on stackoverflow ?",trigger:"post"},
      {value: "MongoDB Atlas",label:"MongoDB Atlas",trigger:"mongodb"},
    ],
  },
  {
    id:'React js',
    message:'ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of your application.',
    end:true
  },
  {
    id:'Node js',
    message:'NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript.',
    end:true
  },
  {
      id:'Java',
      message:'JavaScript is a scripting or programming language that allows you to implement complex features on web pages .',
      end:true
    },
    {
      id:'css',
      message:'is the language for describing the presentation of Web pages, including colors, layout, and fonts.',
      end:true
    },
    {
      id:'html',
      message:'is the language for describing the structure of Web pages.',
      end:true
    },
    {
      id:'ask',
      message:'Navigate to the Stack Overflow homepage in your browser at stackoverflow.com. In the upper right hand corner of the page, you should see the Ask Question button, which you should click to continue..',
      end:true
    },
    {
      id:'post',
      message:'Thanks for telling your issue, Login or signup to website. Click on the question you wish to answer. Click on post answer. Post your answer there.',
      end:true
    },
    {
      id:'mongodb',
      message:'is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP).',
      end:true
    },
];


const theme={
  background:'silver',
  headerBgColor:'blue',
  haederFontSize:'20px',
  botBubbleColor:'blue',
  headerFontColor:'white',
  botFontColor:'white',
  userBubbleColor:'skyblue',
  userFontColor:'white',
};

const config={
  floating:true
}
  const Home = () => {
    return (
        <>
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
         <div>
            <ThemeProvider theme={theme}><ChatBot headerTitle="Chatbot" steps={steps}{...config} />
            </ThemeProvider>
        </div>
        </>
    )
}

export default Home