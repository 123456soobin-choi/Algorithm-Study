function solution(participant, completion) {
    let hashed = []
    participant.forEach(entry => {
        hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1        
    })
    completion.forEach(entry => {
        hashed[entry] = hashed[entry] - 1
    })

    for (var key in hashed) {
        if (hashed[key] >= 1) return key
    }
}

// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
    
//     for(let i=1; i < participant.length; i++){
//         if(participant[i] != completion[i]){
//             return participant[i];
//         }
//     }

// }

// for문 성능에서 x