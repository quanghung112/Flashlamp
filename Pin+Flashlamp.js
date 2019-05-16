let Batery=function () {
    this.energy = 100;
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy
    };
    this.decreaseEnergy=function () {
        if (this.energy>0){
            this.energy--;
        }
    }
};
let Flashlamp=function () {
    this.status=false;
    this.setBatery=function (batery) {
        this.batery=batery;
    };
    this.turnOn=function () {
        this.status=true;
    };
    this.turnOff=function () {
        this.status=false
    };
    this.light = function () {
        if(this.status){
            document.getElementById('status').innerHTML='Light'
        } else {
            document.getElementById('status').innerHTML=' Not Light'
        }
    };
};
let batery= new Batery();
batery.setEnergy(60);
document.getElementById('batery').innerHTML=batery.getEnergy()
let flashlamp=new Flashlamp();
flashlamp.setBatery(batery);
function OnOff() {
    if (batery.energy>0){
        if (flashlamp.status){
            flashlamp.turnOff();
            document.getElementById('onOff').value= 'Off';
            flashlamp.light()
        }else {
            flashlamp.turnOn();
            document.getElementById('onOff').value='On';
            flashlamp.light()
        }
        Energy()
    }
}
function Energy() {
    let energyauto= setInterval(function (){
       decreseEnergy()
        if ( batery<1 || flashlamp.status===false) {
            document.getElementById('onOff').value = 'Off';
            clearInterval(energyauto);
        }
    },1200);
}
function decreseEnergy() {
    if (batery.getEnergy()>0){
        batery.decreaseEnergy()
        document.getElementById('batery').innerHTML=batery.getEnergy();
    }

}