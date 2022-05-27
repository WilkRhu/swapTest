import { ObjectId } from "bson";
import mongoose, { Document, Model } from "mongoose";

export interface GitHub {
    _id: ObjectId, 
    user: string,
    repository: string,
    issues: [
        {
            title: string,
            author: string,
            labels: [],
        }
    ],
    contributors: [
        {
            name: string,
            qt_commits: number
        }
    ]
}

interface GitHubModel extends Omit<GitHub, '_id'>, Document {}

const schema = new mongoose.Schema({
    user: { type: String},
    repository: {type: String},
    issues: [
        {
            _id: false,
            title: { type: String},
            author: { type: String},
            labels: [],
        }
    ],
    contributors: [
        {
            _id: false,
            name: {type: String},
            qt_commits: {type: Number}
        }
    ],
}, {timestamps: true})

export const GitHub: Model<GitHubModel> = mongoose.model('GitHub', schema);