import React from 'react';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';



// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Projects() {
  const cardInfo = [
      {image: "/images/storybookweddings.png", title: "StoryBookWeddings", text: "JDS Consultants created a future social media application that currently allows users to browse through posted weddings to find inspiration. We also want users to post their own own wedding experience so that they and others can not only find inspiration, but share their beautiful day.", link: "https://storybook-weddings.herokuapp.com/", link: "https://github.com/Nishyo-coder/Wedding-Profile"},
      {image: "/images/NishCodes.png.png", title: "Nish Codes Now", text: "This new portfolio is under a new repo, still with a cleaner and more responsive application that my first go at my portfolio. The media responsiveness has been updated along with cleaning up the Navbar.", link: "https://nishyo-coder.github.io/My-Portfolio/", link: "https://github.com/Nishyo-coder/My-Portfolio"},
      {image: "/images/Notetaker.png", title: "Note Taker App", text: "I built the back end, connect to the front end code so a small business owner is able to write and save notes and organize their thoughts and keep track of tasks.", link: "https://floating-wildwood-69708.herokuapp.com/", link: "https://github.com/Nishyo-coder/NoteTaker"},
      {image: "/images/Covid Safety Image.png", title: "Safer In the Know", text: "My team created a centralized application to gather important pandemic, health-related details and country-related news in order to deliver them to people in a user-friendly manner.", link: "https://nishyo-coder.github.io/Project-One-Pandemic-Travel/", link: "https://github.com/Nishyo-coder/Project-One-Pandemic-Travel"},
      {image: "/images/Readmesample.png", title: "ReadMe", text: "As a new developer, I created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package].The application will be invoked by using a command line interface.", link: "https://drive.google.com/drive/u/0/folders/1v0rulICqsLHiWyfzDpIceyfsumWM58vE", link: "https://github.com/Nishyo-coder/Readme-App"},
      {image: "/images/Scheduler.png", title: "Scheduler", text: "A simple calendar application that allows a user to save events for each hour of the day by modifying starter code.", link: "https://nishyo-coder.github.io/Daily-Planner/", link: "https://github.com/Nishyo-coder/Daily-Planner"},
  ];
  const renderCard = (card, index) => {
      return(

        <Card style={{ width: '18rem' }} key={index}>
  <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
      {card.text}
    </Card.Text>
    <Card.Link href={card.link}>Launch</Card.Link>
    <Card.Link href={card.link}>Github</Card.Link>

  </Card.Body>
</Card>
      );
  };
  return <div>
      {cardInfo.map(renderCard)}
  </div>
  
  ;
}



export default Projects;
