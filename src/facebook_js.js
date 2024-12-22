const form = document.getElementById('facebook_form');
const ApiUrl = 'http://localhost/'
form.addEventListener('submit',async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    console.log(Array.from(data));

    try{
        const res = await fetch(
            ApiUrl,
            {
                method: 'POST',
                body: data,
            },
        )
        const resData = await res.json()
        console.log(resData)
    }catch (err){
        console.log(err.message)
    }
})

