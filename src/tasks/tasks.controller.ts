import {Body, Controller, Delete, Get, Param, Post, Put,} from '@nestjs/common';
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";
import {TasksService} from "./tasks.service";
import {Task} from "./schemas/task.schema";

@Controller('tasks')
export class TasksController {

    constructor( private readonly tasksService: TasksService) {
    }

    @Get()
    getAll(): Promise<Task[]>{
        return this.tasksService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Task>{
        return this.tasksService.getById(id)
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Promise<Task>{
        return this.tasksService.create(createTaskDto)
    }


    @Put(":id")
    update(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id:string): Promise<Task>{
        return this.tasksService.update(id, updateTaskDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<Task>{
        return this.tasksService.remove(id)
    }

}
