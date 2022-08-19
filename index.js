const sounds = ["clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav"]
const audioFiles = sounds.map(
    function(sound){
        const audioFile = new Audio("./sounds/" + sound)
        return audioFile
    }
)

//drumbuttons. 
//Objects.
const drumButtons = {
    "KeyA": 0,
    "KeyS": 1,
    "KeyD": 2,
    "KeyF": 3,
    "KeyJ": 6,
    "KeyH": 5,
    "KeyC": 4,
    "KeyK": 7,
}
//querySelectorAll: Selects all elements with .class:
let myDrum = document.querySelectorAll(".drum")
console.log(myDrum)

function handleClick(index){
    console.log(index)
    audioFiles[index].play()
    audioFiles[index].currentTime = 0

}
//forEach method calls a function for each element in an array.
myDrum.forEach(
    function (drum, index){
        drum.addEventListener("click", ()=>{
            handleClick(index)
        })


    }
)   //Keydown: key is pressed down
document.addEventListener("keydown", function(event){
    console.log(event.code)
    console.log(drumButtons[event.code])
    handleClick(drumButtons[event.code])
   

})

