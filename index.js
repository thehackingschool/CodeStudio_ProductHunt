const selectDiv = document.getElementById('root')

selectDiv.addEventListener('click', upvote)


function loadProductList() {
    const xhr = new XMLHttpRequest()

    //open
    xhr.open('GET', 'data.json', true)
        //onload  
    xhr.onload = function() {
        if (this.status == 200) {
            const productsList = JSON.parse(this.response)
            let output = ''

            productsList.forEach(function(product) {

                output += `
            
             <div class='col-sm-5 shadow p-3 mb-5 bg-white rounded media' style="text-align: center">
             <img src=${product.image} class="align-self-center mr-3" alt="...">
             <div class="media-body">
              <h4 class="mt-1">${product.productName}</h4>
              <h5 class="mt-1">${product.description}</h5>
              <p class="mb-1">${product.votes}</p>
              <button class="mb-0 upBt" id=${product.id}> Upvote </button>
              </div>
             </div>
            `


            })
            selectDiv.innerHTML = output
        }
    }

    //send
    xhr.send()
}

loadProductList()


function upvote(e) {

    if (e.target.classList.contains('upBt')) {
        const value = e.target.parentElement
        const updateVote = (value.querySelector('p'))
        updateVote.textContent = Number(updateVote.textContent) + 1
    }
}