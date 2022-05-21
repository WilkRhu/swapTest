import { TypeTransformIssues, TypeTransformUseRepo } from "./interfaces/ITypesTransforms";

const transformUseRepo = (data: any): object => {
  try {
    const response: TypeTransformUseRepo = {
      user: data.owner.login,
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

const transformContributorsQuantityCommits = (data: any): any => {
  return data.map((item: { login: string; contributions: number; }) =>
    ({ name: item.login, qt_commits: item.contributions })
  )
}

export { transformUseRepo, transformIssues, transformContributorsQuantityCommits };
