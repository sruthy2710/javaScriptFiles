//with statement
addPrice(100);
book("little women","louisa alcott")
function addPrice(amount){
    with(book){
       price = amount;
       console.log(price);
    }
 }
 function book(title, author){
     console.log(title);   
     console.log(author);   
     price = 0;
 }