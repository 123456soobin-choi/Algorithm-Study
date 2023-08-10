function solution(id_list, report, k) {
      const userList = id_list.reduce((result, currentId) => {
        result[currentId] = [0, []];
        return result;
      }, {});

      for (const id of new Set(report)) {
        const [REPORT_ID, ID] = id.split(' ');
        userList[REPORT_ID][1].push(ID);
        userList[ID][0]++;
      }

      const banned = id_list.filter((id) => userList[id][0] >= k);
      const emailList = id_list.map((id) => {
        return userList[id][1].filter((id) => {
          return banned.includes(id);
        }).length;
      });

      return emailList;
    
//     let answer = [];
    
//     const uniqueArr = report.filter((element, index) => {
//         return report.indexOf(element) === index;
//     });
    
//     for(let i=0; i<uniqueArr.length; i++){
//         console.log(uniqueArr[i].split(" ")[1])
//     }
    
//     return answer;
}