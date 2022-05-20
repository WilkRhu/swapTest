interface TypeTransformIssues {
    readonly title: string;
    readonly  user: { login: string};
    readonly labels: [ any ]
  }

interface TypeTransformUseRepo {
    readonly name: string;
    readonly repository: string
}

interface TypeTransformContributors {
    readonly commit: { author: { name: string } }, 
    readonly author: { login: string}
}

export {
    TypeTransformIssues,
    TypeTransformUseRepo,
    TypeTransformContributors
};
