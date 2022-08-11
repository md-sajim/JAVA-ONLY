// writ a function. have therr parametert.
//fist 100 page, second 200 page, thard 300page.
//you return who many page need
function totalPages(book1, book2, book3) {
    const fistBook = 100;
    const secondBook = 200;
    const thardBook = 300;
    const totalPageFist = book1 * fistBook;
    const totalPageSecond = book2 * secondBook;
    const totalPageThard = book3 * thardBook;
    return total = totalPageFist + totalPageSecond + totalPageThard;
}
const book1pic = 5;
const book2pic = 5;
const book3pic = 5;

const totalpage = totalPages(book1pic, book2pic, book3pic)
console.log(totalpage)