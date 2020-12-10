let fruits = [
    {
        id: 1, title: 'Stolen', price: 20, img:'https://e1.edimdoma.ru/data/recipes/0014/1902/141902-ed4_wide.jpg?1603287386'
    },
    {
        id: 2, title: 'Kekse', price: 30, img:'https://e1.edimdoma.ru/data/recipes/0014/1902/141902-ed4_wide.jpg?1603287386'
    },
    {
        id: 3, title: 'Kuchen', price: 40, img:'https://e1.edimdoma.ru/data/recipes/0014/1902/141902-ed4_wide.jpg?1603287386'
    }
]

const toHTML = fruit => `
<div class="col">
        <div class="card">
            <img class="card-img-top" style="height: 300px" src="${fruit.img}" alt="${fruit.title}">
            <div class="card-body">
              <h5 class="card-title">${fruit.title}</h5>
              <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Mehr Erfahren</a>
              <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Löschen</a>

            </div>
          </div>
       </div>
`

function render() {
    const html = fruits.map(toHTML).join('');
    document.querySelector('#fruits').innerHTML =  html;
}
render();

//title:string
//closable:boolean
//content: string
//width: string ('400')
const priceModal = $.modal({

    title: 'Priece für position',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Schliessen', type: 'primary', handler() {
            priceModal.close()
        }},
           ]
});
// const confirmModal = $.modal({

//     title: 'Sind Sie siecher?',
//     closable: true,
//     width: '400px',
//     footerButtons: [
//         {text: 'Zuruck', type: 'secondary', handler() {
//             confirmModal.close()
//         }},
//         {text: 'Loschen', type: 'danger', handler() {
//             confirmModal.close()
//         }},
//            ]
// });

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const fruit = fruits.find(f => f.id === id);

    if (btnType === 'price') {
        priceModal.SetContent(`<p> Preice fur ${fruit.title}: <strong> ${fruit.price}euro</strong></p>`);

      priceModal.open();

    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Sind Sie siecher?',
            content: `<p>Sie loschen position: <strong>${fruit.title}</strong></p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id)
            render()
        })
        .catch(() =>{
console.log('Cancel')
        })
        // confirmModal.SetContent(`<p>Sie loschen position: <strong>${fruit.title}</strong></p>`)
        // confirmModal.open()
    }
    
})