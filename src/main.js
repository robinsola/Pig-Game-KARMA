// import {Player} from './pig-game';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

// $(document).ready(function() {
//
//   $("#player1").submit(function(event) {
//     event.preventDefault();
//     var playerName = $("#name1").val();
//     var player1 = new Player(playerName, 0, 0, 0);
//     $(".player1-name").text(playerName);
//     $("#player1").hide();
//     $("#player2").show();
//     $("#player1Roll").click(function() {
//       var player1RollPoints = player1.newRoll();
//       $("#player1-roll").text(player1RollPoints);
//       var player1CurrentScore = player1.addPoints();
//       $("#player1-turnScore").text(player1CurrentScore);
//     });
//     $("#player1Hold").click(function() {
//       var playerOneTotalScore = player1.addTotal();
//       $("#player1-score").text(playerOneTotalScore);
//       player1.youWin();
//     });
//   });
//
//   $("#player2").submit(function(event) {
//     event.preventDefault();
//     var playerName = $("#name2").val();
//     var player2 = new Player(playerName, 0, 0, 0);
//     $(".player2-name").text(playerName);
//     $("#player2").hide();
//     $("#player2Roll").click(function() {
//       var player2RollPoints = player2.newRoll();
//       $("#player2-roll").text(player2RollPoints);
//       var player2CurrentScore = player2.addPoints();
//       $("#player2-turnScore").text(player2CurrentScore);
//     });
//     $("#player2Hold").click(function() {
//       var playerTwoTotalScore = player2.addTotal();
//       $("#player2-score").text(playerTwoTotalScore);
//       player2.youWin();
//     });
//   });
// });
