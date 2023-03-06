<script setup>
import { ref } from 'vue'
import json from '../assets/music.json'

let index = 0;


      let myJson = json;
      let props = {
        test: "test text",
        mp3File: json.songs[index].audio,
        mp3File0: json.songs[0].audio,
        mp3File1: json.songs[1].audio,
        mp3File2: json.songs[2].audio,
        mp3File3: json.songs[3].audio,
        mp3File4: json.songs[4].audio,
        mp3File5: json.songs[5].audio,
        mp3File6: json.songs[6].audio,
        mp3File7: json.songs[7].audio,
        mp3File8: json.songs[8].audio

        //mp3File: "./rdr ost/Red Dead Redemption 2 Soundtrack - See The Fire In Your Eyes.mp3"
      }

  
    function loadSong() {
      console.log("loading song at: " + index);
      props.mp3File = json.songs[index].audio;
      console.log(props.mp3File)
    }

    function nextSong() {
      console.log("next song")
      if (index < 8) {
        index++;
        loadSong();
      }
    }

    function lastSong() {
      console.log("last song")
      if (index > 0) {
        index--;
        loadSong();
      }
    }

//loadSong();
</script>

<template>
  <body>
    <h1>App 9</h1>

    <div id="mp3Player">
      <!--<span v-bind="data" >{{ data }}</span>-->
      <!--<audioTable :data="data.audio"/>-->
      <span id="playlist" v-for="songs in myJson">
        <h3>MP3 Player (Red Dead Redemption OST)</h3>
        <audio :src="props.mp3File0" type="audio/mpeg" controls></audio>{{ songs[0].title }} - {{ songs[0].time }}
        <br>
        <audio :src="props.mp3File1" type="audio/mpeg" controls></audio>{{ songs[1].title }} - {{ songs[1].time }}
        <br>
        <audio :src="props.mp3File2" type="audio/mpeg" controls></audio>{{ songs[2].title }} - {{ songs[2].time }}
        <br>
        <audio :src="props.mp3File3" type="audio/mpeg" controls></audio>{{ songs[3].title }} - {{ songs[3].time }}
        <br>
        <audio :src="props.mp3File4" type="audio/mpeg" controls></audio>{{ songs[4].title }} - {{ songs[4].time }}
        <br>
        <audio :src="props.mp3File5" type="audio/mpeg" controls></audio>{{ songs[5].title }} - {{ songs[5].time }}
        <br>
        <audio :src="props.mp3File6" type="audio/mpeg" controls></audio>{{ songs[6].title }} - {{ songs[6].time }}
        <br>
        <audio :src="props.mp3File7" type="audio/mpeg" controls></audio>{{ songs[7].title }} - {{ songs[7].time }}
        <br>
        <audio :src="props.mp3File8" type="audio/mpeg" controls></audio>{{ songs[8].title }} - {{ songs[8].time }}
        <br>
      </span>

      <br>
      <!--
      <span id="audioPlayer" v-bind="props">
        <audio v-bind:src="props.mp3File" type="audio/mpeg" controls>
        </audio>

        <input id="btnPrev" type="button" value="Previous Song" @click="lastSong"/>
        <input id="btnNext" type="button" value="Next Song" @click="nextSong"/>
      </span>
    -->
    </div>


  </body>
</template>

<style>
audio{
  margin: 4px;
  max-width: 100px;
  max-height: 32px;  
  visibility: hidden;
}

audio::-webkit-media-controls-play-button{
  visibility: visible;
  background-color: rgb(152, 152, 152);
  border-radius: 100px;
}

#mp3Player{
  border-width: 3px;
  border-radius: 20px;
  border-color: black;
  border-style: solid;
  padding: 14px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 450px;
}
h3{
  text-align: center;
}


</style>