document.addEventListener('DOMContentLoaded', () =>{
    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    
    function updateClock(){
        const currentTime = new Date();

        hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
        min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
        sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    }
    
    //Update the clock every second
    setInterval(updateClock, 1000);

    //Initialize the clock immediately
    updateClock();
})

