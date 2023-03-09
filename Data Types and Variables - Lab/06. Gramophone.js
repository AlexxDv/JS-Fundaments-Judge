function gramophone(album, band, song) {
  let duratinInSec = (album.length * band.length * song.length) / 2;

  console.log(`The plate was rotated ${Math.ceil(duratinInSec / 2.5)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
