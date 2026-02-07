import 'reflect-metadata'

import { validate } from "class-validator"
import { PaginationDto } from "./pagination.dto"

describe('PaginationDto', () =>{

    it('Should valida with default values', async()=>{

        const dto = new PaginationDto();
        const errors = await validate(dto)

        console.log(errors)
    })




})