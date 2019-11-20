 interface book {
      title: string;
      isRead: boolean;
  }
  
 // Ejemplo:
 export var books: book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
  ];

 export  function isBookReadWithTypes(books: book[], titleToSearch: string): boolean {
    for(var i=0; i < books.length; i++){
        if (books[i].title === titleToSearch) {
            return books[i].isRead;
        }
    }
    return false;
  }

 export function isBookReadRecursivoWithTypes(books, titleToSearch) {
   const [head, ...tail] = books;
   if (head) {
      return (head.title === titleToSearch) ? head.isRead : isBookReadRecursivoWithTypes(tail, titleToSearch);   
   }
    return false;  
  }
  
  console.log("Salida del ejercicio 4 en TypeScript");

  console.log(isBookReadWithTypes(books, "Devastación")); // true
  console.log(isBookReadWithTypes(books, "Canción de hielo y fuego")); // false
  console.log(isBookReadWithTypes(books, "Los Pilares de la Tierra")); // false

  console.log("Metodo recursivo");

  console.log(isBookReadRecursivoWithTypes(books, "Devastación")); // true
  console.log(isBookReadRecursivoWithTypes(books, "Canción de hielo y fuego")); // false
  console.log(isBookReadRecursivoWithTypes(books, "Los Pilares de la Tierra")); // false