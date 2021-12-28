function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  const random = Math.floor(Math.random() * tags.length;
  return tags[random];
}

function randomSelect() {
  const randomTag = pickRandomTag();
  highlightTag(randomTag);
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
