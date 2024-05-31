function play(videoId){
    const secretURL = `https://urlMasSecretaQueElArea52.com/${videoId}`;
    console.log(`Reproduciendo el video con identificador ${videoId} desde la url secreta que nunca conocerás...`);
}

export class Video {
    constructor(title, id){
        this.title = title;
        this.id = id;
    }

    play(){
        play(this.id);
    }
}