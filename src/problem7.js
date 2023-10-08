const checkRelation = (user, relationObject, relationFriend) => {
  let score = 0;
  if(relationFriend === user) return;
  for(friend of relationObject[relationFriend]){
    if(relationObject[user].includes(friend)) {
      score += 10;
    }
  }
  return score;
}

const notExistInObj = (Obj, id) => {
  if(!Obj[id]) return true;
  return false;
}

function problem7(user, friends, visitors) {
  const relationship = {};
  const score = {};

  for([idA, idB] of friends) {
    if(notExistInObj(relationship, idA)) relationship[idA] = [];
    relationship[idA].push(idB);

    if(notExistInObj(relationship, idB)) relationship[idB] = [];
    relationship[idB].push(idA);
  }

  for(relationFriend of Object.keys(relationship)) {
    const plusScore = checkRelation(user, relationship, relationFriend);
    
    if(plusScore) {
      if(notExistInObj(score, relationFriend)) score[relationFriend] = plusScore;
      else score[relationFriend]+= plusScore;
    }
  }

  for(visitor of visitors) {
    if(notExistInObj(score, visitor)) score[visitor] = 1;
    else score[visitor] += 1;
  }
  
  const sortScore = Object.entries(score).sort(([idA, scoreA], [idB, scoreB]) => {
    if(scoreA > scoreB) return -1;
    else if(scoreA === scoreB) {
      if(idA < idB) return -1;
      else return 1;
    }
    else return 1;
  }).filter((val, idx) => idx < 3).map((val) => val[0])

  return sortScore;
}

module.exports = problem7;
