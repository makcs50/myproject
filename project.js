const phone = {
    energy: 100,
    yearUse: 3,
    newPhone: {
        iphone: 'last iphone'
    },
    yourPhone: false,

    energetic: function(){
        if(this.energy < 25){
            console.log("Заряди телефон")
        }
    },
    clean: function(){
        if(this.yearUse > 3){
            console.log('Почисти свой телефон')
        }
    
    },
    testYourPhone: function(text){
        if (text === "Da"){
            console.log("Г1оза лела йойла")
        }
        else if (text === "No")
        {
            console.log("Д1ало нех телефон")
        }
    },
    bronForPhone: function(){
        if(this.yearUse > 3 ){
            console.log('Купи чехол')
        }
        else {
            this.yearUse++;
        }
    }


}