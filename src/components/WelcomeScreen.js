import React,{useState} from 'react'
import Typewriter from 'typewriter-effect'

import Card from './Card'

function WelcomeScreen() {


    return (
        <>
            <div style={{
                fontFamily:"Courier New",
                fontWeight:"500",
                fontSize:"30px",
                textAlign:"center",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                Height:"100%",
                backgroundColor:"black",
                color:"#4AF626",
                top:0,
                flexDirection:"column"
            }}>
                <Typewriter style={{}}
                    onInit={(typewriter)=>{
                    typewriter
                        .typeString("Welcome !!!")
                        .start();
                    }
                }/>
                 <Typewriter 
                    onInit={(typewriter)=>{
                    typewriter
                        .pauseFor(1500)
                        .typeString("This is Mayur Jain")
                        .start();
                    }
                }/>
                 <Typewriter 
                    onInit={(typewriter)=>{
                    typewriter   
                        .pauseFor(4000)
                        .typeString("Sophomore at PICT Pune")
                        .start();
                    }
                }/>
            </div>
            <div style={{
                float:"left",
                justifyContent:"center",
                alignItems:"center",
                width: "100%",
                height:"100%",
                backgroundColor:"black",
                color:"#4AF626",
                top:0,
                }}>
                    <Card children={"~ Projects>>"} content1={"~ Projects >> Infix Expression Converter: This is page which takes any normal (infix) expression for eg. A+b*C as input and returns its postfix and prefix converted output"} content2={"~ Projects >> DoConnect - Book appointments online: We are creating a hybrid mobile application with React Native and UI kitten library, the application helps patient to book medical appointment without visiting the clinic so as to reduce social contact in these times of COVID-19 Pandemic."}/>                        

                    <Card children={"~ Certifications>>"} content1={"~ Certifications >> Object Oriented Programming Using C++: Pune Institute Of Computer Technology, IT Department, Pune, Online Sep 2020 - Dec 2020 I learned about object oriented programming, Data Structures and STL libraries. Assignments during the course helped me to analyze and practice my concepts on the same "} content2={"~ Certifications >> HTML CSS And JAVASCRIPT: Coursera Online I learned basics of Web-Dev and used the learned skills to create static web pages it helped me to learn frameworks like React JS."}/>

                    <Card children={"~ Skills>>"} content1={"~ Skills >> HTML CSS and JavaScript (Intermediate)  4/5 "} content2={"~ Skills >> React JS and React Native  (Beginner)   3/5"} />
            </div>
        </>
    )
}

export default WelcomeScreen
