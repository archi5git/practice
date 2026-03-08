class Liberary{
    constructor(){
        this.books=[];

    }
    add(book){
        this.books.push(book);

    }
    ListAllBooks(){
        this.books.forEach(function(book,index){
            console.log(`${index +1}. ${book.name} by ${book.author}`);
            
        });
    }
}
class Book{
    constructor(name,isbn,price,author){
        this.name=name;
        this.isbn=isbn;
        this.price=price;
        this.author=author;
        this.readStatus=false;

    }
    info(){
        console.log(`${this.name} is written by ${this.author} and you have ${this.readStatus ? "read it":"not read it"}  
            and available on amazon at ${this.price}  rupees`);
        
    }
    changereadStatus(){
        this.readStatus=!this.readStatus;
    }
} 
let jhasiliberary=new Liberary();
let book1= new Book("wealth","12abcs","180","Harsh");
let book2= new Book("life","1962abcs","120","krish");
let book3= new Book("Peace","12auhbgs","80","karthik");
let book4= new Book("Happiness","10542aughfbcs","180","Danimy");
let book5= new Book("Tiger","456hubtgf","200","hampy");
jhasiliberary.add(book1);
jhasiliberary.add(book2);
jhasiliberary.add(book3);
jhasiliberary.add(book4);jhasiliberary.add(book5);
jhasiliberary.add([book1 , book2, book3,book4,book5]);