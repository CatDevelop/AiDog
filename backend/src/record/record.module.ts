import {Module} from '@nestjs/common';
import {RecordService} from './record.service';
import {RecordController} from './record.controller';
import {CommentService} from "../comment/comment.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Comment} from "../comment/entities/comment.entity";
import {Record} from "./entities/record.entity";
import {RecordTrigger} from "../record_triggers/entities/record_trigger.entity";
import {Trigger} from "../trigger/entities/trigger.entity";
import {ResultService} from "../result/result.service";
import {Result} from "../result/entities/result.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Record, Result, RecordTrigger, Trigger])],
  controllers: [RecordController],
  providers: [RecordService, CommentService, ResultService],
})
export class RecordModule {
}
