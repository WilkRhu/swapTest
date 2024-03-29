import { TypeTransformIssues, TypeTransformUseRepo } from '../services/interfaces/types-transform-interface';

export class TransformDatasRepo {
  public transformUseRepo = (data: any): object => {
    try {
      const response: TypeTransformUseRepo = {
        user: data.owner.login,
        repository: data.name,
      };
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  public transformIssues = (data: any): object => {
    try {
      return data.map(
        (item: TypeTransformIssues) => ({
          title: item.title,
          author: item.user.login,
          labels: item.labels,
        }),
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  public transformContributorsQuantityCommits = (data: any): object => data.map((item: { login: string; contributions: number; }) => ({ name: item.login, qt_commits: item.contributions }));
}
