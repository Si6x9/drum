// drums
const drums = document.querySelectorAll('.drum');
// sounds
const w = document.getElementById('w');
const a = document.getElementById('a');
const s = document.getElementById('s');
const d = document.getElementById('d');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');


document.addEventListener('keypress', (key) => {
    if (key.key == 'w') {
        w.load()
        w.play()
    }
    else if (key.key == 'a') {
        a.load()
        a.play()
    }
    else if (key.key == 's') {
        s.load()
        s.play()
    }
    else if (key.key == 'd') {
        d.load()
        d.play()
    }
    else if (key.key == 'j') {
        j.load()
        j.play()
    }
    else if (key.key == 'k') {
        k.load()
        k.play()
    }
    else if (key.key == 'l') {
        l.load()
        l.play()
    }
})