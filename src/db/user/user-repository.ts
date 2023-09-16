import { FindOptions } from 'sequelize';
import { User } from './user';

class UserRepository {

    async createUser(firstName: string, lastName: string, email: string, password: string): Promise<User> {
        return await User.create({ firstName, lastName, email, password });
    }
    
    async updateUser(id: string, firstName: string, lastName: string): Promise<void> {
         await User.update({ firstName, lastName }, { where: { id } });
    }
    
    async deleteUser(id: string): Promise<void> {
        await User.update({isDeleted:false, deleetedBy:"admin"}, {where: {id}});
    }

    async getUserById(id: string): Promise<User | null> {
        const options: FindOptions = {
            where: {isDeleted: false}
        };
        
        return await User.findByPk(id, options);
    }

    async getUsers(page: number, pageSize: number): Promise<User[]> {
        const options: FindOptions = {
            limit: pageSize,
            offset: (page - 1) * pageSize,
            where: {isDeleted: false}
        };
        return await User.findAll(options);
    }
}

export default UserRepository;