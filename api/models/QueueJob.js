module.exports={
	attributes:{
		ID: {
            type: Sequelize.BIGINT(20),
            autoIncrement: true,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'Must be an integer!'
                }
            },
            primaryKey: true
        },

        Receiver: {
        	type:Sequelize.STRING(255),
        	allowNull:false,
        },

        CC:{
        	type:Sequelize.STRING(255),
        	allowNull:true,
        },

        ReceiverType:{
        	type:Sequelize.STRING(20),
        },

        ReceiverUID:{
        	type:Sequelize.STRING(255),
        },

        Queue:{
        	type:Sequelize.STRING(20),
        },

        HandlerCode:{
        	type:Sequelize.STRING(255),
        },

        MsgContent:{
        	type:Sequelize.TEXT,
        },

        Subject:{
            type:Sequelize.STRING(1000),
        },

        MsgContentType:{
        	type:Sequelize.STRING(255),
        },

        FirstDelay:{
        	type:Sequelize.INTEGER(11),
            defaultValue:0,
        },

        ReleaseDelay:{
        	type:Sequelize.INTEGER(11),
            defaultValue:0,
        },

        MaxRelease:{
        	type:Sequelize.INTEGER(11),
            defaultValue:0,
        },

        ReleaseCount:{
        	type:Sequelize.INTEGER(11),
            defaultValue:0,
        },

        LastedSentAt:{
        	type:Sequelize.DATE,
        },

        Status:{
        	type:Sequelize.STRING(20)
        },

        

        SendFromServer:{
        	type:Sequelize.STRING(255)
        },

        SenderType:{
        	type:Sequelize.STRING(20)
        },

        SenderUID:{
        	type:Sequelize.STRING(255)
        },

        CreatedDate:{
        	type:Sequelize.DATE,
        },

        CreatedBy:{
        	type:Sequelize.BIGINT(20)
        },

        Read:{
            type:Sequelize.STRING(10)
        }
	},

	associations: function() {},
	options: {
        tableName: 'QueueJob',
        timestamps: false,
    }

}