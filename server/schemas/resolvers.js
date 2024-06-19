// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, args, context) => {
            const foundUser = await User.findOne({
                username: args.username
            });

            if (!foundUser) {
                return { message: 'Cannot find a user with this id!' };
            }

            return (foundUser);
        }
    },

    Mutation: {
        createUser: async (parent, args, context) => {
            const user = await User.create(args);

            if (!user) {
                return { message: 'Something is wrong!' };
            }
            const token = signToken(user);
            return ({ token, user });
        },
        login: async (parent, args, context) => {
            const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });
            if (!user) {
                return ({ message: "Can't find this user" });
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                return ({ message: 'Wrong password!' });
            }
            const token = signToken(user);
            return ({ token, user });
        },
        save: async (parent, args, context) => {
            console.log(context.user);
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args } },
                    { new: true, runValidators: true }
                );
                return (updatedUser);
            } catch (err) {
                console.log(err);
                return (err);
            }
        },
        delete: async (parent, args, context) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
            );
            if (!updatedUser) {
                return ({ message: "Couldn't find user with this id!" });
            }
            return (updatedUser);
        },

    },
};

module.exports = resolvers;
