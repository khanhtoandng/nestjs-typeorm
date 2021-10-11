var dbConfig = {
    synchronize: false,
    migrations: ['migration/*.js'],
    cli: {
        migrationsDir: 'migrations',
    }

}

switch(process.env.NODE_ENV){
    case 'development':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: ['**/*.entity.js' ]
        });
        break;
    case 'test':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'test.sqlite',
            entities: ['**/*.entity.js' ]
        });
        break;
    case 'production':
        break;
    default: 
        throw new Error('unknow environment')
}

module.exports = dbConfig;