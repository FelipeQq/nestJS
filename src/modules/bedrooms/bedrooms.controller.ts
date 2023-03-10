import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BedroomsService } from './bedrooms.service';
import { BedroomDto } from './bedroom.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('bedrooms')
@Controller('events/:id/bedrooms')
export class BedroomsController {
  constructor(private readonly bedroomsService: BedroomsService) {}

  @Post(':idBedrooms')
  async create(
    @Param('idEvent') idEvent: string,
    @Body() createBedroomDto: BedroomDto,
  ) {
    return await this.bedroomsService.create(+idEvent, createBedroomDto);
  }

  @Get()
  findAll() {
    return this.bedroomsService.findAll();
  }

  @Get(':idBedrooms')
  findOne(@Param('idBedrooms') idBedrooms: string) {
    return this.bedroomsService.findOne(+idBedrooms);
  }

  @Put(':idBedrooms')
  update(
    @Param('idEvent') idEvent: string,
    @Param('idBedrooms') idBedrooms: string,
    @Body() updateBedroomDto: BedroomDto,
  ) {
    return this.bedroomsService.update(+idEvent, +idBedrooms, updateBedroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bedroomsService.remove(+id);
  }
}
