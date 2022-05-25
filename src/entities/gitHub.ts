import { ObjectId } from 'mongodb';
import {
  Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
export class GitHub {
    @ObjectIdColumn()
      _id: ObjectId;

    @Column()
      user: string;

    @Column()
      repository: string;

    @Column()
      issues: [{
        title: string,
        author: string,
        labels: string,
    }];

    @Column()
      contributors: [{
        name: string,
        qt_commits: number
    }];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
      created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
      updated_at: Date;

    constructor(
      user: string,
      repository: string,
      issues: [{
            title: string,
            author: string,
            labels: string,
        }],
      contributors: [{
            name: string,
            qt_commits: number
        }],
      created_at: Date,
      updated_at: Date,
    ) {
      this._id = new ObjectId();
      this.user = user,
      this.repository = repository,
      this.issues = issues,
      this.contributors = contributors;
      this.created_at = created_at,
      this.updated_at = updated_at;
    }
}
