// let url = `http://moviesmern.herokuapp.com/movies/movie/searchByName`
// async function showDetails(api,name) {
//     try {
//         return await fetch(`${api}/${name}`)
//         .then(response => response.json())
//     } catch (error) {
//        return error 
//     }
// }
// showDetails(url,"Harry Potter")
// .then((res)=>{console.log(res)})

// function getMovieDetails(name) {
// showDetails(url,name)
// .then((res)=>{
//     console.log(res.data);
//     for (const iterator of res.data) {
//     container.innerHTML = `
//     <article>
//               <h1>${iterator.movieName}</h1>
//               <p>${iterator.image}</p>
//               <p>${iterator.linkToMovie}</p>
//               <p>${iterator.rating}</p>
//               <p>${iterator.synopsis}</p>
//               <p>${iterator._id}</p>
//               <p>${iterator.date}</p>
//     </article>  `
// }    
// })
// .catch((rej)=>{container.innerHTML = rej})
// }

