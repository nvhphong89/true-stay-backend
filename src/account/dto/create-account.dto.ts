import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class AccountType {
  @Field(() => ID)
  _id: string;
  // @Field()
  // readonly firstName: string;
  // @Field()
  // readonly lastName: string;
  @Field()
  readonly email: string;
  @Field()
  readonly phoneNumber: string;
}

// export enum subscriptionUserType {
//   BASIC = 'BASIC',
//   PREMIUM = 'PREMIUM',
// }
