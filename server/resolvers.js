const resolvers = {
    Query: {
        user: (...args) => {
            const [, data, context] = args;
            return context.dataSources.contentAPI.getUser(data.id);
        },
        company: (...args) => {
            const [, data, context] = args;
            return context.dataSources.contentAPI.getCompany(data.id);
        }
    },
    UserType: {
        company: (...args) => {
            const [parent, , context] = args;
            return context.dataSources.contentAPI.getCompany(parent.companyId);
        }
    },
    CompanyType: {
        users: (...args) => {
            const [parent, , context] = args;
            return context.dataSources.contentAPI.getUsersForCompany(parent.id);
        }
    },
    Mutation: {
        addUser: (...args) => {
            const [, data, context] = args;
            return context.dataSources.contentAPI.addUser(data);
        },
        deleteUser: (...args) => {
            const [, data, context] = args;
            return context.dataSources.contentAPI.deleteUser(data.id);
        },
        updateUser: (...args) => {
            const [, data, context] = args;
            return context.dataSources.contentAPI.updateUser(data);
        }
    }
};

module.exports = resolvers;