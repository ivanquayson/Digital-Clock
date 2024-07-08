document.addEventListener('DOMContentLoaded', () =>{
    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    const ampm = document.getElementById("ampm");
    
    function updateClock(){
        const currentTime = new Date();

        let hours = currentTime.getHours();
        const ampmText = hours >= 12 ? 'PM': 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
        min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
        sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
        ampm.innerHTML = ampmText;

    }
    
    //Update the clock every second
    setInterval(updateClock, 1000);

    //Initialize the clock immediately
    updateClock();
})

