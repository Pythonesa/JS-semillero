export function Top(name, games) {
    this.name = name;
    this.games = games;
    this.update = function(game) {
        this.games.push(game);
        this.games.sort(function(a, b) {
            if (name == "time") {
                return a.time - b.time;
            }
            else if (name == "count") {
                return a.count - b.count;
            }
        }.bind(this));
        this.games.splice(0, this.games.length - 3);
    }
}

