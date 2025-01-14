import { ObjectType, Field } from '@nestjs/graphql';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

import { DownloadableMediaState } from 'src/app.dto';

@Entity()
@ObjectType()
export class Movie {
  @Field()
  @PrimaryGeneratedColumn()
  public id!: number;

  @Field()
  @Index()
  @Column('int', { unique: true })
  public tmdbId!: number;

  @Field()
  @Column('varchar')
  public title!: string;

  @Field((_type) => DownloadableMediaState)
  @Index()
  @Column('varchar', { default: DownloadableMediaState.SEARCHING })
  public state: DownloadableMediaState = DownloadableMediaState.SEARCHING;

  @Field()
  @CreateDateColumn()
  public createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  public updatedAt!: Date;
}
