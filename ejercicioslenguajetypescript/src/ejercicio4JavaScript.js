
  function isBookRead(books, titleToSearch) {
    // Implementation here
    for(var i=0; i < books.length; i++){
        if (books[i].title === titleToSearch) {
            return books[i].isRead;
        }
    }
    return false;
  }

  function isBookReadRecursivo(books, titleToSearch) {
    // Implementation here
   const [head, ...tail] = books;
   if (head) {
      return (head.title === titleToSearch) ? head.isRead : isBookReadRecursivo(tail, titleToSearch);   
   }
    return false;  
  }

  
  
  // Ejemplo:
  var books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
  ];
  
  console.log(isBookReadRecursivo(books, "Devastación")); // true
  console.log(isBookReadRecursivo(books, "Canción de hielo y fuego")); // false
  console.log(isBookReadRecursivo(books, "Los Pilares de la Tierra")); // false


  // Este servidor no me coge ts, hay algo que tenga que hacer con el?