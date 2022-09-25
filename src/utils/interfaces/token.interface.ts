import { Schema } from 'mongoose';

export default interface Token extends Object {
    id: Schema.Types.ObjectId;
    expiresIn: number;
}
