import { TypeTransformContributors, TypeTransformIssues, TypeTransformUseRepo } from "./interfaces/ITypesTransforms";

const transformUseRepo = (data: any): object => {
  try {
    const response: TypeTransformUseRepo = {
      name: data.owner.login,
      repository: data.name,
    };
    return response
  } catch (error) {
    throw new Error(`${error}`);
    
  }
};



const transformIssues = (data: any): any => {
  try {
    return data.map(
      (item: TypeTransformIssues) => {
        return {
          title: item.title,
          author: item.user.login,
          labels: item.labels,
        };
      }
    );
    
  } catch (error) {
    throw new Error(`${error}`);
    
  }
};

const transformContributors = (data: any): any => {
  const loginUse: string[] = []
  const amount = data.map(
    (item: TypeTransformContributors) => item.commit.author.name
  );
  const equals = amount.reduce(function (
    object: { [x: string]: number },
    item: string | number
  ) {
    if (!object[item]) {
      object[item] = 1;
    } else {
      object[item]++;
    }
    return object;
  },
  {});
  console.log(equals)
};

export { transformUseRepo, transformIssues, transformContributors };
