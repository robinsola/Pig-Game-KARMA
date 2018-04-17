import { Player } from './../src/pig-game.js';

describe('Player' function() {

  it('should create a player with 0 points in all categories', function() {
    var player = new Player("Robin", 0, 0, 0);
    expect(player.playerName).toEqual("Robin");
    expect(player.rollPoints).toEqual(0);
    expect(player.turnScore).toEqual(0);
    expect(player.turnTotal).toEqual(0);
  });
});
