
function Project(){
    return(
        <>
            <h2>
                Projects:
            </h2>
            <h3>
                Project 1: This Website
            </h3>
            <p>
                As stated in the ABOUT section, I created this website as a way
                for me to properly showcase the projects I create. By doing so, I 
                hope to advance my web devlopment skills and reinforce my drive to 
                create projects using CS skills I've developed over the years.
                http://localhost:5173/home 
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

/* 
WORK IN PROGRESS METHOD
WITH GOAL TO MORE EASILY ADD PROJECTS TO SITE

const createProject = () => {
    const proj = {
        n: proj_name,
        d: date_finished,
        f: proj_file,
        t: proj_takeaways
    }

}
*/

export default Project