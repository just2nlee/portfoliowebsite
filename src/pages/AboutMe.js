import React from "react";
import "../styles/AboutMe.css";
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div class="mt-10-animate-fade-in-up">
            <div class="flex flex-row w-full h-full items-center">
                <div class="flex flex-col h-[400px] justify-evenly">
                <h2 class="text-5xl font-bold font-league">About Me</h2>
                <p class="font-league  text-xl">
                    I was born and raised in Ridgewood, NJ and lived with my mom, dad,
                    sister, and my dog, Teemo, up until college. Before I got into Software Engineering, 
                    I had a very different path in mind. In fact, I was previously on the pre-med track and 
                    spent a lot of my time in high school shadowing doctors as well as competing as a YMCA swimmer. 
                    As I ventured into college, I eventually declared myself as a Computer Science major after taking my 
                    first Computer Science courses and going to my first hackathon (BostonHacks). In my freetime I love playing chess,
                    working out, and keeping up with the New York Knicks and the NBA. I have also been getting into reading books recently
                    and would appreciate any book recommendations!
                    Let's explore my journey and see how it has led me to where I am today!
                </p>
                </div>
                {/* <img src={image} class="h-[400px] w-auto ml-[10%]" /> */}
            </div>
            <div class="mt-10">
                <h2 class="text-3xl font-semibold font-league mb-5">
                Notable Experiences:
                </h2>
                <div>
                <div class="flex flex-row w-full justify-between items-center">
                    <h4 class="text-2xl font-semibold font-league text-gray-700">
                    Software Development Intern - Empathie
                    </h4>
                    <Link
                        to="https://www.empathie.care/"
                        class="link"
                    >
                        Empathie Care Website
                    </Link>
                </div>
                <p class="text-lg font-league">
                    This was my first internship during the summer of my sophomore year.
                    Throughout the summer, I worked with various technologies such as
                    TensorFlow, Pandas, and Flutter. My team worked on the activity recommendation 
                    system that would be used for the MVP app to help suggest mental health exercises 
                    to users based on provided data.
                </p>
                </div>
                <div class="mt-5">
                <div class="flex flex-row w-full justify-between items-center">
                    <h4 class="text-2xl font-semibold font-league text-gray-700">
                    Part-Time Research Assistant - Boston University
                    </h4>
                    <Link
                        to="https://docs.google.com/document/d/1o6-sLelUu16Nd-csv9ao3HUfOVlcXXinw82OgIc5fwg/edit?usp=sharing"
                        class="link"
                    >
                        Research Paper
                    </Link>
                </div>
                <p class="text-lg font-league">
                    This was my first experience doing research during the fall
                    semester of my Junior year with the professor who taught my Introduction to Algorithms class. 
                    My primary responsibility was to research how the opinion of individuals is influenced by their peers. 
                    I researched methods of network propagation using existing Twitter data
                    to help perform sentiment analysis on prominent political figures in the United States.
                    I worked with: NetworkX, Twitter API, Google NLP, Word Cloud, and Numpy.
                </p>
                </div>
                <div class="mt-5 mb-10">
                <div class="flex flex-row w-full justify-between items-center">
                    <h4 class="text-2xl font-semibold font-league text-gray-700">
                    Technical Teammate - XC475 Team SpeedyPark
                    </h4>
                    <Link
                        to = "https://github.com/danielyu12/SpeedyPark"
                        class = "link"
                    >
                        Project repo
                    </Link>
                </div>
                <p class="text-lg font-league">
                    This was a course that I took in the first semester of my Junior
                    year and my first experience working with mobile development. My
                    team and I wanted to create an app that would help streamline the
                    process of finding parking in the greater boston area. Using
                    historical data given by the City of Boston, our app generates a
                    percentage chance of finding parking on a given street block. Users
                    were able to save commonly visited blocks for future reference. I
                    worked with: React Native, Javascript, Firebase Firstore
                </p>
                </div>
            </div>
            {/* <Link
                to="/resume"
                class="text-lg font-semibold font-league inline-block border-b-2 border-transparent hover:border-gray-700 transition duration-300"
            >
                Interested in my experience? View my resume
            </Link> */}
            {/* put my resume here  */}
        </div>
    );

}
export default AboutMe;