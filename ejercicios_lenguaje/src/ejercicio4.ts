
  interface book {
      title: string;
      isRead: boolean;
  }
  
 // Ejemplo:
 var books: book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
  ];

  function isBookReadWithTypes(books: book[], titleToSearch: string): boolean {
    // Implementation here
    for(var i=0; i < books.length; i++){
        if (books[i].title === titleToSearch) {
            return books[i].isRead;
        }
    }
    return false;
  }

  function isBookReadRecursivoWithTypes(books, titleToSearch) {
    // Implementation here
   const [head, ...tail] = books;
   if (head) {
      return (head.title === titleToSearch) ? head.isRead : isBookReadRecursivo(tail, titleToSearch);   
   }
    return false;  
  }
  
  console.log(isBookReadWithTypes(books, "Devastación")); // true
  console.log(isBookReadWithTypes(books, "Canción de hielo y fuego")); // false
  console.log(isBookReadWithTypes(books, "Los Pilares de la Tierra")); // false