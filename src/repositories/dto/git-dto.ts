export interface GitDto {
    readonly user: string;
    readonly repository: string;
    readonly issues: [
    {
        readonly title: string;
        readonly author: string;
        readonly labels: [];
    }
    ];
    readonly contributors: [
    {
        readonly name: string;
        readonly qt_commits: number
    }
    ];
}