import { TypeTransformIssues, TypeTransformUseRepo } from "./interfaces/ITypesTransforms";

export class GitHubApiService {
  public transformUseRepo = (data: any): object => {
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
  
  public transformIssues = (data: any): any => {
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
  
  public transformContributorsQuantityCommits = (data: any): any => {
    return data.map((item: { login: string; contributions: number; }) =>
      ({ name: item.login, qt_commits: item.contributions })
    )
  }
}
