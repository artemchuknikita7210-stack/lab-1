const catalogName = "Каталог курсів з мобільної розробки";

function getLabel(minutes) {
  if (minutes <= 15) {
    return catalogName + ": короткий ресурс";
  }
  return catalogName + ": довгий ресурс";
}

console.log(getLabel(15));
console.log(getLabel(16));
