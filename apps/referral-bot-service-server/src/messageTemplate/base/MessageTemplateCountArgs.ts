/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageTemplateWhereInput } from "./MessageTemplateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MessageTemplateCountArgs {
  @ApiProperty({
    required: false,
    type: () => MessageTemplateWhereInput,
  })
  @Field(() => MessageTemplateWhereInput, { nullable: true })
  @Type(() => MessageTemplateWhereInput)
  where?: MessageTemplateWhereInput;
}

export { MessageTemplateCountArgs as MessageTemplateCountArgs };
