import {Module} from "@nestjs/common";
import {TasksService} from "./tasks.service";
import {TasksController} from "./tasks.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Task, TaskSchema} from "./schemas/task.schema";

@Module({
    providers: [TasksService],
    controllers: [TasksController],
    imports:[
        MongooseModule.forFeature([
            {name: Task.name, schema: TaskSchema}
            ]
        )
    ]
})

export class TasksModule {

}