class Remote{
    id;
    constructor(id){
        this.id = id;
    }

    //kenh nao? cai tv nao?
    changeChannel(tv, newChannel){
        tv.setChannel(newChannel);
    }

    changeVollume(tv, vollume){
        tv.setVollume(vollume);
    }
}