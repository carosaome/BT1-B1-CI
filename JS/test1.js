let btn = document.getElementById('btn-submit')
btn.addEventListener('click', () => {
    let a = parseInt(document.getElementById('1st-num').value);
    let b = parseInt(document.getElementById('2nd-num').value);
    let output = document.getElementById('result');
    let arr2 = [];
    for (let i = a; i < b; i++)
    {
        let check = true;
        if (i > a) {

            for (let j = 1; j < i; j++) {
                if (j > 1 && i % j == 0) {
                    check = false;
                    break;
                }

            }
            if (check) {
                arr2.push(i)
            }
        }

    }
    
    let html = arr2.map((item) => {
        return `
            <li>${item}</li>
        `
    })

    output.innerHTML = html.join('');
    document.getElementById('1st-num').value = ''
    document.getElementById('2nd-num').value = ''
   
})







