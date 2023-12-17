AFRAME.registerComponent("game-play", {
    schema:{
        elementId:{type:"string", default:"#coin1"}
    },
    update: function(){
        this.isCollided(this.data.elementId)
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId);
        console.log("element " + elementId)
        element.addEventListener("collide", (e)=>{
            console.log("collition detected")
            if(elementId.includes("coin")){
                console.log(elementId + " collected.")
            }
            else if(elementId.includes("hurdle")){
                console.log("oh! collided with a fish.")
            }
        })
    }
})
