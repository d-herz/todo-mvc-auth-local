Vim�UnDo� l"S�!\[,A�B�]�Vӗ���މ���+����   �                                  cG    _�                             ����                                                                                                                                                                                                                                                                                                                                                             c�     �          �    �         �    5��                          �              �      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c<     �         �      $async function getSortedGames(req) {5��                        �                    5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             cJ     �         �      ,async function getRecentlyPlayedGames(req) {5��       '                  �                     5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             cK     �         �      *async function getRecentlyPlayedGames(r) {5��       &                 �                    5�_�                       (    ����                                                                                                                                                                                                                                                                                                                                                             cV     �                �  // TODO: Automate setting up the WebAPI Key per user and storing in User's document in db, so that a user doesn't need to make their profile public to make use of these features.5��                          "      �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             cc     �         �      5  // requesting the user's owned games in json format5��                         r                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             cd     �         �      /  // requesting the user's games in json format5��                         r                     5�_�      	                 *    ����                                                                                                                                                                                                                                                                                                                                                             cm     �                �  // fetch req in here, can't normally fetch from the server so installed node-fetch pkg and required it in server.js and here in the steam controller5��                          �      �               5�_�      
           	      *    ����                                                                                                                                                                                                                                                                                                                                                             cw     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${req.user.steamID}&format=json&include_appinfo=true`)�         �    5��       *       �       �   �      �       �       5�_�   	              
      �    ����                                                                                                                                                                                                                                                                                                                                                             c~     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=9B4E063468097CEECB414E4AA3BA5F6E&steamid=76561198214999639`)5��       �                  3                     5�_�   
                    �    ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=9B4E063468097CEECB414E4AA3BA5F6E&steamid=`)5��       �                  3                     �       �                 3                    5�_�                       �    ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=9B4E063468097CEECB414E4AA3BA5F6E&steamid=$`)5��       �                  4                     5�_�                       �    ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=9B4E063468097CEECB414E4AA3BA5F6E&steamid=${}`)5��       �                  5                     5�_�                       u    ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=9B4E063468097CEECB414E4AA3BA5F6E&steamid=${req.user.steamID}`)5��       u                  
                     5�_�                       v    ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=$&steamid=${req.user.steamID}`)5��       v                                       5�_�                       w    ����                                                                                                                                                                                                                                                                                                                                                             c�    �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${}&steamid=${req.user.steamID}`)5��       w                                       �       }                                     �       �                                     �       �                                     �       �                                     �       �                                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      4  const ownedGames = await ownedGamesResponse.json()5��              
          M      
              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      �  const ownedGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${req.user.steamID}`)5��                        �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      5  const recentGames = await ownedGamesResponse.json()5��                        b                    �                        b                    �                        b                    �                        b                    �                        b                    �                        b                    �                        b                    5�_�                       +    ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      2    return b.playtime_forever - a.playtime_forever5��       +                                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c     �         �      1    return b.playtime_forever - a.playtime_2weeks5��                     	   �             	       �              	          �      	              �                        �                    �                        �                    �                        �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             c�     �         �      2    return b.playtime_forever - a.playtime_forever5��                     	   e             	       �                        j                    �                        j                    �                        s                    �                        r                    5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             c    �         �      3    return b.rtime_last_played - a.playtime_forever5��       #                 {                    �       #                 {                    �       #                 {                    �       #                 {                    �       #                 {                    5�_�                             ����                                                                                                                                                                                                                                                                                                                               +                 V   3    cF    �             
   ,async function getRecentlyPlayedGames(req) {   ?  // requesting the user's recently played games in json format   �  // Retrieve the user's owned games using the WebAPI Key provided in .env, along with the user's steam ID, and include extended info for each game.   �  const recentGamesResponse = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${req.user.steamID}`)   6  const recentGames = await recentGamesResponse.json()   ;  // Presort games by total time played in descending order   3  return ownedGames.response.games.sort((a, b) => {   0    return b.playtime_2weeks - a.playtime_2weeks     })   }5��           
               �      �              5��