class Contestant{
        
        constructor() {
            this.index = null;
            this.answer = null;
            this.name = null;
            this.realAnswer = "2";
        }
        
        getCount() {
            var playerCountRef = database.ref('contestant Count');
            playerCountRef.on("value", function (data) {
                playerCount = data.val();
            });
        }
    
    
        updateCount(countInput) {
            database.ref('/').update({
                playerCount: countInput
            });
        }
    
        updatePlayerRecord() {
            var playerIndex = "players/player" + this.index;
            database.ref(playerIndex).set({
                name: this.name,
                Answer: this.answer
            });
        }
    
        static getPlayerInfo() {
            var playerInfoRef = database.ref("players");
            playerInfoRef.on("value", (data) => {
                allPlayers = data.val();
            });
        }
}