import User from "../models/userModel.js";

export class UserService {
  async findAll() {
    return await User.findAll({
      where: {
        status: true,
      },
    });
  }

  async createUser(data) {
    console.log("Data user service:", data);
    return await User.create(data);
  }

  async findOneByUserName(username) {
    return User.findOne({
      where: { username },
    });
  }

  async findByEmail(email) {
    return User.findOne({
      where: { email },
    });
  }

  async findOneById(id) {
    return await User.findOne({
      where: {
        id,
        status: true,
      },
    });
  }
  async updateUser(user, data) {
    return await user.update(data);
  }

  async deleteUser(user) {
    return await user.update({
      status: false,
    });
  }
}
