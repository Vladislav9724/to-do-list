import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'
import {timestamp} from "rxjs";

export type TaskDocument = Task & Document


@Schema({timestamps: true})
export class Task {
    @Prop()
    title: string

    @Prop()
    body: string

    @Prop({default: false})
    isCompleted: boolean

}

export const TaskSchema = SchemaFactory.createForClass(Task)