const jsonApi = JSON.stringify({"success":true,"data":[{"_id":"6182d48e7df14206307896b8","movieName":"Harry Potter","linkToMovie":"String","synopsis":"String hhhhhh","image":"https://wallpaperaccess.com/full/3421252.jpg","rating":3,"date":"2021-11-03T18:27:26.573Z","__v":0},{"_id":"6187e7f4a65c7f0016a126e3","movieName":"spider-man  Far From Home","rating":6,"image":"https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg","synopsis":"Spider-Man: Far From Home was released on July 2, 2019.[266][267] Watts returned to direct,[268] from a script by McKenna and Sommers.[269] Holland, Favreau, Zendaya, Tomei, and Batalon reprise their roles,[270][271] with Jake Gyllenhaal joining as Mysterio.[272] Samuel L. Jackson and Cobie Smulders also reprised their roles as Nick Fury and Maria Hill, respectively, from previous MCU media.[273]","linkToMovie":"https://en.wikipedia.org/wiki/Spider-Man:_Far_From_Home","date":"2021-11-07T14:51:32.722Z","__v":0},{"_id":"6187e826a65c7f0016a126fd","movieName":"spider-man No Way Home","rating":8,"image":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Spider-Man_No_Way_Home_logo.jpg/330px-Spider-Man_No_Way_Home_logo.jpg","synopsis":"Spider-Man: Far From Home was released on July 2, 2019.[266][267] Watts returned to direct,[268] from a script by McKenna and Sommers.[269] Holland, Favreau, Zendaya, Tomei, and Batalon reprise their roles,[270][271] with Jake Gyllenhaal joining as Mysterio.[272] Samuel L. Jackson and Cobie Smulders also reprised their roles as Nick Fury and Maria Hill, respectively, from previous MCU media.[273]","linkToMovie":"https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home","date":"2021-11-07T14:52:22.181Z","__v":0},{"_id":"6188f9dd7e079d0016127504","movieName":"Black Panter","rating":5,"image":"https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg","synopsis":"Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther","linkToMovie":"https://en.wikipedia.org/wiki/Black_Panther_(film)","date":"2021-11-08T10:20:13.143Z","__v":0},{"_id":"61895abe3143600016238e94","movieName":"matrix","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The.Matrix.glmatrix.1.png/1200px-The.Matrix.glmatrix.1.png","synopsis":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.","linkToMovie":"https://www.imdb.com/title/tt0133093/","rating":9,"date":"2021-11-08T17:13:34.675Z","__v":0},{"_id":"618961db314360001623947a","movieName":"superman","image":"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2016%2F03%2Fman_of_steel-1200x800.jpg","synopsis":"An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.","linkToMovie":"https://www.imdb.com/title/tt0770828/","rating":6,"date":"2021-11-08T17:43:55.454Z","__v":0},{"_id":"618a75db42e78f0016d2215e","movieName":"joker","image":"https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg","synopsis":"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.","linkToMovie":"https://www.imdb.com/title/tt7286456/","rating":9,"date":"2021-11-09T13:21:31.064Z","__v":0},{"_id":"618a8acf33a37b0016c0174a","movieName":"The Dark Knight","image":"https://artbup.com/storage/pictures/pic_5fa66f54b08fd_orig.jpg","linkToMovie":"https://www.imdb.com/title/tt0468569/?ref_=hm_fanfav_tt_i_24_pd_fp1","synopsis":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","rating":2,"date":"2021-11-09T14:50:55.916Z","__v":0},{"_id":"618a8b4e33a37b0016c017ce","movieName":"Breaking Bad","image":"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg","linkToMovie":"https://www.imdb.com/title/tt0903747/?ref_=hm_fanfav_tt_i_30_pd_fp1","synopsis":"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.","rating":4,"date":"2021-11-09T14:53:02.741Z","__v":0}]});
const ObjApi = JSON.parse(jsonApi);
const arrayApi = ObjApi.data;
console.log(arrayApi);
let url = 'http://moviesmern.herokuapp.com/movies/all'
let nameUrl = 'http://moviesmern.herokuapp.com/movies/movie/searchByName'
let idUrl = 'http://moviesmern.herokuapp.com/movies/movie'
let deleteUrl = 'http://moviesmern.herokuapp.com/movies/movie'
//!  all movies url !\\
async function presentMoviesOnPage() {
    try {
        return await fetch(url)
        .then(response => response.json())
        // return await arrayApi
    } catch (error) {
        return error
    }
}
//!  name url !\\
async function showDetails(api,name) {
    try {
        return await fetch(`${api}/${name}`)
        .then(response => response.json())
        // return await arrayApi
    } catch (error) {
       return error 
    }
}
//!  id url !\\   
async function showDetailsById(api,id) {
    try {
        return await fetch(`${api}/${id}`)
        .then(response => response.json())
        // return arrayApi
    } catch (error) {
       return error 
    }
}
//! delete movie by id url !\\   
async function deleteDetailsById() {
    try {
        return await fetch(`${api}/${id}`,option)
        .then(response => response.json())
        .then((res)=>{
        console.log(res);})
        // return await arrayApi
    } catch (error) {
       return error 
    }
}
//! present movies on page !\\
let counter = 0
presentMoviesOnPage()
.then((res)=>{
for (const iterator of res.data) {
    // console.log(`${iterator}${counter++}`);
if (iterator.movieName != undefined && iterator.image != undefined) {
container.innerHTML +=`
 <article class="article">
    <img src="${iterator.image}">
    <h1 class="h1">${iterator.movieName}</h1>
    <p>${iterator.rating}</p>
    <span class ="span">
    <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
    <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
    <button>EDIT</button>
    </span>
</article>`
}
else{
    container.innerHTML +=`
    <article class="article">
       <img src="data:image/jpeg;base64,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">
       <h1 class="h1">An anonymous film</h1>
       <p>${iterator.rating}</p>
       <span class ="span">
       <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
       <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
       <button>EDIT</button>
       </span>
   </article>`
}
}

})
.catch((rej)=>{container.innerHTML=rej})

//! get Movie Details by id !\\
function getMovieDetails(getId) {
////////////////////////////! by json
// showDetailsById()
// .then((res)=>{
//     for (const iterator of res) {
//        if(iterator._id == getId){
//         container.innerHTML =
//              `
//                 <article id="middle">
//                           <h1>name</h1>
//                     <h5>${iterator.movieName}</h5>
//                           <h1>image</h1>
//                     <h5>${iterator.image}</h5>
//                           <h1>link to movie</h1>
//                     <h5>${iterator.linkToMovie}</h5>
//                           <h1>rating</h1>
//                     <h5>${iterator.rating}</h5>
//                           <h1>synposis</h1>
//                     <h5>${iterator.synopsis}</h5>
//                           <h1>id</h1>
//                     <h5>${iterator._id}</h5>
//                           <h1>date</h1>
//                     <h5>${iterator.date}</h5>
//                 </article>  ` 
//        }
//     }
// })
//////////////////////! by api
showDetailsById(idUrl,getId)
.then((res)=>{
    container.innerHTML =
     `  <article id="middle">
                  <h1>name</h1>
            <h5>${res.data.movieName}</h5>
                  <h1>image</h1>
            <img src ="${res.data.image}">
                  <h1>link to movie</h1>
            <h5>${res.data.linkToMovie}</h5>
                  <h1>rating</h1>
            <h5>${res.data.rating}</h5>
                  <h1>synposis</h1>
            <h5>${res.data.synopsis}</h5>
                  <h1>id</h1>
            <h5>${res.data._id}</h5>
                  <h1>date</h1>
            <h5>${res.data.date}</h5>
        </article>  `

})
.catch((rej)=>{container.innerHTML = rej})
}
//!  search by name !\\ 
function searchByName(inputName) {
// showDetails()
// .then((res)=>{
//     for (const iterator of res) {
//     if (iterator.movieName==inputName) {
//         container.innerHTML =`
//          <article class="article">
//             <img src="${iterator.image}">
//             <h1 class="h1">${iterator.movieName}</h1>
//             <p>${iterator.rating}</p>
//             <span class ="span">
//             <button>LEARN MORE</button>
//             <button>DELETE</button>
//             <button>EDIT</button>
//             </span>
//         </article>`
//         }
//     }
// })
//////////////////////! by api
    showDetails(nameUrl,inputName)
    .then((res)=>{  
    for (const iterator of res.data) {
        container.innerHTML =`
         <article class="article">
            <img src="${iterator.image}">
            <h1 class="h1">${iterator.movieName}</h1>
            <p>${iterator.rating}</p>
            <span class ="span">
            <button>LEARN MORE</button>
            <button>DELETE</button>
            <button>EDIT</button>
            </span>
        </article>`
        }
})
.catch((rej)=>{container.innerHTML = rej})  
}
search_btn.onclick=()=>{
searchByName(input.value)
}


//! delete movie !\\
function deleteMovie(deletId) {
////////////////! by json
// let confirmMessage = confirm("Are you sure that you want delete movie?")
//     if (confirmMessage) {
//     deleteDetailsById()
//     .then((res)=>{
//         for (const iterator of res) {
//              if (iterator._id == deletId) {
//                 res.splice(iterator,1) 
//                 console.log(iterator);
//             }
//         }
//     })
// }
//////////////! by api
     if (confirmMessage) {  
     alert("The movie has been successfully deleted")
     let option = {
         method:"DELETE"
     }
     deleteDetailsById(deleteUrl,deletId,option)
 }
} 
//! sort by parmmatrs !\\
function sortByParamter(item) {
// switch (item) {
//     case "NAME":
//           presentMoviesOnPage()  
//          .then((res)=>{
//           res.sort((a,b)=>{
//           console.log("name");
//           if(a.movieName < b.movieName)return -1;})})  
//           break;
//           case "RATING":
//                 presentMoviesOnPage()  
//                .then((res)=>{
//                 res.sort((a,b)=>{
//                 console.log("rating");                
//                 return a.rating - b.rating})})  
//                 break;
//                     case "DATE":
//                     presentMoviesOnPage()  
//                    .then((res)=>{
//                     res.sort((a,b)=>{
//                     console.log("date");
//                     if(a.date < b.date)return -1})})  
//                     break;
//     default:
//         break;
//     }
// presentMoviesOnPage()
// .then((res)=>{
// for (const iterator of res) {
//     console.log(iterator);
// container.innerHTML +=`
//  <article class="article">
//     <img src="${iterator.image}">
//     <h1 class="h1">${iterator.movieName}</h1>
//     <p>${iterator.rating}</p>
//     <span class ="span">
//     <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
//     <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
//     <button>EDIT</button>
//     </span>
// </article>`
// }})

//////////////////! by api
switch (item) {
    case "NAME":
        presentMoviesOnPage()  
        .then((res)=>{res.data.sort((a,b)=>{
        if(a.movieName!=undefined && b.movieName != undefined){
        if( a.movieName.toLowerCase() < b.movieName.toLowerCase())return -1;}})
        for (const iterator of res.data) {
            console.log(iterator.movieName);
            container.innerHTML +=`
                <article class="article">
                <img src="${iterator.image}">
                <h1 class="h1">${iterator.movieName}</h1>
                <p>${iterator.rating}</p>
                <span class ="span">
                <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
                <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
                <button>EDIT</button>
                </span>
                </article>`
            }
        })  
        break;
            case "RATING":
            presentMoviesOnPage()  
            .then((res)=>{res.data.sort((a,b)=>{
            return a.rating - b.rating })   
            for (const iterator of res.data) {
                console.log(iterator.rating);
                container.innerHTML +=`
                    <article class="article">
                    <img src="${iterator.image}">
                    <h1 class="h1">${iterator.movieName}</h1>
                    <p>${iterator.rating}</p>
                    <span class ="span">
                    <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
                    <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
                    <button>EDIT</button>
                    </span>
                    </article>`
                }
            })  
            break;
                case "DATE":
                presentMoviesOnPage()  
                .then((res)=>{
                res.data.sort((a,b)=>{
                if(a.date < b.date)return -1;})
                for (const iterator of res.data) {
                    console.log(iterator.date);
                    container.innerHTML +=`
                        <article class="article">
                        <img src="${iterator.image}">
                        <h1 class="h1">${iterator.movieName}</h1>
                        <p>${iterator.rating}</p>
                        <span class ="span">
                        <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
                        <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
                        <button>EDIT</button>
                        </span>
                        </article>`
                    }
            
            })  
                break;
    default:
       
        break;
    }
// presentMoviesOnPage()
// .then((res)=>{
// for (const iterator of res.data) {
//     console.log(iterator.movieName);
    // console.log(iterator.rating);
    // console.log(iterator.dat);
    // if (iterator.movieName != undefined) {
    // container.innerHTML +=`
    //  <article class="article">
    //     <img src="${iterator.image}">
    //     <h1 class="h1">${iterator.movieName}</h1>
    //     <p>${iterator.rating}</p>
    //     <span class ="span">
    //     <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
    //     <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
    //     <button>EDIT</button>
    //     </span>
    // </article>`
    // }
    // else{
    //     container.innerHTML +=`
    //     <article class="article">
    //        <img src="data:image/jpeg;base64,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">
    //        <h1 class="h1">An anonymous film</h1>
    //        <p>${iterator.rating}</p>
    //        <span class ="span">
    //        <button onclick = getMovieDetails("${iterator._id}")>LEARN MORE</button>
    //        <button onclick = deleteMovie("${iterator._id}")>DELETE</button>
    //        <button>EDIT</button>
    //        </span>
    //    </article>`
    // }
// }})
}

sort_btn.onclick=()=>{
    container.innerHTML = ""
    // console.log(select.value);
 switch (select.value) {
     case "by_name":
       return sortByParamter("NAME");
         case "by_rating":
           return  sortByParamter("RATING");
            case "by_date":
               return sortByParamter("DATE");
     default:
         break;
}}