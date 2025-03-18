/*
interface Props {
    index: int;
    name: string;
    description: String;
}
USE LATER TO GET RID OF HARDCODING
*/

function Projects(){
    return(
        <>
            <h2>
                Projects:
            </h2>
            
            <h3>
                CS 2114 Project 5
            </h3>
            <p>
                This was a 4 person project for my CS2114 (Softare Design and Data
                Structures) class. We were tasked with developing a Java program within
                Eclipse IDE that takes in a set of "video's" in the form of 10 data inputs
                (month, username, channel name, country, main topic, likes, posts, followers,
                comments, and views), sort them, and output the sorts in 2 ways. 
                The first way was to calculate their Traditional and Reach engagement rates,
                sort the channels by their channel name, and output each channels engagement rates.
                Traditional engagement is calculated by doing ((comments + likes) / followers) * 100
                and Reach engagment is calculated by doing ((comments + likes) / views) * 100.
                sorted video's and a text file containing each video's Traditional and 
                Reach engagement rates. These rates were calculated 
            </p>

            <h3>
                This Website
            </h3>
            <p>
                As stated in the ABOUT section, I created this website as a way
                for me to properly showcase the projects I create. By doing so, I 
                hope to advance my web devlopment skills and reinforce my drive to 
                create projects using CS skills I've developed over the years. I 
                created this project using React because I learned the basics during
                meetings for a club I'm in called CSSquared. 
                https://benevolent-strudel-eb294a.netlify.app/  
            </p>

            <h3>
                Project 1: This Website
            </h3>
            <p>
                As stated in the ABOUT section, I created this website as a way
                for me to properly showcase the projects I create. By doing so, I 
                hope to advance my web devlopment skills and reinforce my drive to 
                create projects using CS skills I've developed over the years. I 
                created this project using React because I learned the basics during
                meetings for a club I'm in called CSSquared. 
                https://benevolent-strudel-eb294a.netlify.app/  
            </p>

            <h3>
                Project 2: Solitaire 
            </h3>
            <p>
                I've always loved to play video games and have recently 
                become interested in learning how to make one. To start this 
                learning journey, I decided to remake a game I know within a 
                video game engine. I chose to make Solitaire in Godot, a very 
                popular game engine specializing in 2D game development.
                
            </p>
            
        </>
    );
}


export default Projects