import { Module } from '@nestjs/common';
import { Tea } from './entities/tea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeasService } from './teas.service';
import { TeasResolver } from './teas.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  providers: [TeasService, TeasResolver],
  exports: [TeasService],
})
export class TeasModule {}
