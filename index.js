const fruits = [
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
//title:string
//closable:boolean
//content: string
//width: string ('400')
const modal = $.modal({
    title: 'Nadiia Modal',
    closable: true,
    content:
    `<h4>Modal is working</h4>
    <h4>Lorem4  </h4>`,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked');
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked');
            modal.close()
        }}
    ]
});

