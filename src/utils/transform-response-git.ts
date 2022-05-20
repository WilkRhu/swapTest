const transformFirstData = (data: any): object => {
    return {
        name: data.owner.login,
        repository: data.name
    }
}

const transformIssues = (data: any): any =>{
   data.map((item: { title: string; user: { login: string }; labels: string }) => {
       return {
        title: item.title,
        author: item.user.login,
        labels: item.labels
       }
   })
}

const transformContributors = (data: any): any => {
    const amount = data.map((item: { commit: { author: { name: any } } }) => item.commit.author.name);
    const equals = amount.reduce(function(object: { [x: string]: number }, item: string | number){
      if(!object[item]) {
        object[item] = 1
      } else {
        object[item] ++
      }
      return object
    }, {})
    return equals
}



export {
    transformFirstData,
    transformIssues,
    transformContributors
}
