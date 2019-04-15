// Create a class called StopWatch.
class StopWatch 
{
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for these 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */
    constructor() 
    {
        this.isRunning = false;
        this.timer = null;
        this.timerTime = 0;

        this.startButton = document.querySelector("#start");
        this.stopButton = document.querySelector("#stop");
        this.resetButton = document.querySelector("#reset");

        this.startButton.onclick = this.startTimer.bind(this);
        this.stopButton.onclick = this.stopTimer.bind(this);
        this.resetButton.onclick = this.resetTimer.bind(this);

        this.minBtn = document.querySelector("#minutes");
        this.secBtn = document.querySelector("#seconds");
    }

    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */
    startTimer()
    {
        if (this.isRunning == false) 
        {
            this.isRunning = true;
            this.timer = setInterval(this.incrementTimer.bind(this), 1000);
        }
    }
    incrementTimer()
    {
        this.timerTime++;
        let mins = Math.floor(this.timerTime / 60);
        let secs = Math.floor(this.timerTime % 60);
        this.minBtn.innerHTML = this.pad(mins);
        this.secBtn.innerHTML = this.pad(secs);
    }
    pad(number) 
    {
        return (number < 10) ? "0" + number : number;
    }
    stopTimer()
    {
        if (this.isRunning) 
        {
            this.isRunning = false;
            clearInterval(this.timer);
        }
    }
    resetTimer() 
    {
        this.stopTimer();
        this.timerTime = 0;
        document.querySelector("#minutes").innerHTML = "00";
        document.querySelector("#seconds").innerHTML = "00";
    }
}



// Create a variable called stopWatch
let stopWatch;
// Add an event handler to the load event of the window. 
window.addEventListener("load", () => {
    stopWatch = new StopWatch();
});
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch