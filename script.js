const ON = 'pic_bulbon.gif';
const OFF = 'pic_bulboff.gif';

let indexR1 = -1;
const r1Lamps = ['r1-1', 'r1-2', 'r1-3'];

function stepR1() {
    indexR1 = (indexR1 + 1) % r1Lamps.length;
    r1Lamps.forEach((id, i) => {
        document.getElementById(id).src = (i === indexR1) ? ON : OFF;
    });
}

function toggleAllR1() {
    const lamp1 = document.getElementById('r1-1');
    const targetStatus = lamp1.src.includes(OFF) ? ON : OFF;
    
    r1Lamps.forEach(id => {
        document.getElementById(id).src = targetStatus;
    });
}

let indexR2 = -1;
const r2Lamps = ['r2-a', 'r2-b', 'r2-c', 'r2-d'];

function stepR2() {
    indexR2 = (indexR2 + 1) % r2Lamps.length;
    r2Lamps.forEach((id, i) => {
        document.getElementById(id).src = (i === indexR2) ? ON : OFF;
    });
}

function toggleAllR2() {
    const lampA = document.getElementById('r2-a');
    const targetStatus = lampA.src.includes(OFF) ? ON : OFF;
    
    r2Lamps.forEach(id => {
        document.getElementById(id).src = targetStatus;
    });
}

function toggleGroupsR2() {
    const lampA = document.getElementById('r2-a');
    
    if (lampA.src.includes(OFF)) {
        // Nyalakan A,B dan matikan C,D
        document.getElementById('r2-a').src = ON;
        document.getElementById('r2-b').src = ON;
        document.getElementById('r2-c').src = OFF;
        document.getElementById('r2-d').src = OFF;
    } else {
        // Matikan A,B dan nyalakan C,D
        document.getElementById('r2-a').src = OFF;
        document.getElementById('r2-b').src = OFF;
        document.getElementById('r2-c').src = ON;
        document.getElementById('r2-d').src = ON;
    }
}