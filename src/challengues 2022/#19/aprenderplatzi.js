function learn(time, courses) {
  let indexs = null;
  let max=0;
  for(let pivot=0; pivot<courses.length; pivot++){
    for(let j=pivot+1; j<courses.length; j++){
      const total = courses[pivot] + courses[j]
      console.log("total:",total)
      if (total === time) return [pivot, j];
      if(courses[pivot] + courses[j] < time && max < total){
        max = total;
        console.log("max:", max)
        indexs = [pivot, j];
        console.log(indexs)
      }
    }
  }
  return indexs
}
