class Tivi{
    channel;
    vollume;
    status;
    constructor(){
        this.channel = 1;
        this.vollume = 10;
        this.status = false;
    }

    setChannel(newChannel){
        this.channel = newChannel;
    }

    setVollume(vollume){
        this.vollume += vollume;
    }

}