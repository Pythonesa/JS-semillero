//constructor de juego:
export function Game(id, nick, count, number, isOver, isGuessed, guesses, startTime, endTime, time){
    this.id = id || crypto.randomUUID();
    this.nick = nick || "";
    this.count = count || 0;
    this.number = number || Math.floor(Math.random() * 101);
    this.isOver = isOver || false;
    this.isGuessed = isGuessed || false;
    this.guesses = guesses || [];
    this.startTime = startTime || Date.now();
    this.endTime = endTime || null;
    this.time = time || 0;
    this.guess = function(gNumber){
        this.guesses.push(gNumber);
        this.count++;
        if(gNumber === this.number){
            this.isOver = true;
            this.isGuessed = true;
            this.endTime = Date.now();
            this.time = (this.endTime - this.startTime) / 1000;
        }
    }
}