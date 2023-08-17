function x(){
    var x = document.querySelector("#topic").value;
    var t = document.querySelector("#frame")
    switch(x){
        case 'btac':
            t.src = 'Files/btac.html';
            break;
        case 'wwl':
            t.src = 'Files/wwl.html';
            break;
        case 'ds':
            t.src = 'Files/ds.html';
            break;
        case 'wwo':
            t.src = 'Files/wwo.html';
            break;
        case 'so':
            t.src = 'Files/so.html';
            break;
        case 's':
            t.src = 'Files/s.html';
            break;
        case 'fo':
            t.src = 'Files/fo.html';
            break;
        case 'wwc':
            t.src = 'Files/wwc.html';
            break;
        case 'seoo':
            t.src = 'Files/seoo.html';
            break;
        case 'ptw':
            t.src = 'Files/ptw.html';
            break;
        case 'p':
            t.src = 'Files/p.html';
            break;
        default:
            t.src = 'main.html';
            break;
    }
}