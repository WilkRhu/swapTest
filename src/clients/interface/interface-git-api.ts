export interface InterfaceGitApi {
    readonly user: string,
    readonly repository: string,
    readonly issues: {
        readonly title: string,
    }
    readonly contributors: {
        readonly name: string
    }
}