import { name, datatype, system, internet } from 'faker';
import { User, UserData } from '../../types';

const makeFakeUser = (): User & UserData =>
  ({
    name: `${name.firstName()} ${name.lastName()}`,
    avatarUrl: system.filePath(),
    isPro: datatype.boolean(),
    id: datatype.number(),
    email: internet.email(),
    token: datatype.uuid(),
  } as User & UserData);

export { makeFakeUser };
