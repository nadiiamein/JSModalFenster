$.confirm = function(options) {
    return new Promise(((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: '400px',
            closable: false,
            content: options.content,
            onClose() {
                modal.destroy()
            },
            footerButtons: [
                {
                    text: 'Zuruck', type: 'secondary', handler(){
                        modal.close()
                        reject()
                    }
                },
                {
                    text: 'Loschen', type: 'danger', handler(){
                        modal.close()
                        resolve()
                    }
                }
            ]
        })
        serTemeout(()=> modal.open(), 100)
    }))
}