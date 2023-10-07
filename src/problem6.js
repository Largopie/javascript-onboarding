function problem6(forms) {
  const crew = {};
  const duplicateNickname = [];
  const answer = [];

  for([email, nickname] of forms) {
    crew[nickname] = email
  }

  const crew_list = Object.keys(crew);

  for(let i = 0; i < crew_list.length; i++) {
    for(let j = 0; j < crew_list[i].length - 1; j++) {
      if (duplicateNickname.includes(crew_list[i])) break;
      const duplicate = crew_list.filter((nickname) => nickname.includes(crew_list[i][j] + crew_list[i][j + 1]));
      if(duplicate.length > 1) duplicateNickname.push(...duplicate);
    }
  }
  
  const removeSameName = new Set(duplicateNickname);
  
  for(nickname of removeSameName) {
    answer.push(crew[nickname]);
  }

  return answer.sort();
}

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ], ["jason@email.com", "jm@email.com", "mj@email.com"]))

module.exports = problem6;
