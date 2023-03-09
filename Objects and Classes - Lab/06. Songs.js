function songs(array) {
  class Song {
    constructor(playList, name, time) {
      (this.playlist = playList),
        (this.name = name),
        (this.time = time),
        (this.print = () => console.log(this.name));
    }
  }
  let numsOfSong = array.shift();
  let targetPlaylist = array.pop();

  let songs = [];
  for (let i = 0; i < numsOfSong; i++) {
    let currInput = array[i];
    let currArray = currInput.split("_");
    let currSong = new Song(currArray[0], currArray[1], currArray[2]);
    songs.push(currSong);
  }
  if (targetPlaylist === "all") {
    songs.forEach((s) => s.print());
  } else {
    let filteredSongs = songs.filter((s) => s.playlist === targetPlaylist);
    filteredSongs.forEach((s) => s.print());
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
